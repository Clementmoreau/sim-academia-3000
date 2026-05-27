const RUNS = Number(process.argv[2] || 1000);
const YEARS = Number(process.argv[3] || 30);

const ASSOCIATE_REP_THRESHOLD = Number(process.env.ASSOCIATE_REP_THRESHOLD || 7);
const FULL_REP_THRESHOLD = Number(process.env.FULL_REP_THRESHOLD || 28);
const ROUTINE_RESEARCH_PROBABILITY = 0.66;
const BASE_REVISION_ACCEPTANCE = 0.5;
const VANITY_THRESHOLDS = {
  thirdHighest: 2800,
  secondHighest: 3600,
  highest: 5000,
};
const VANITY = [
  { citations: 15, funds: 40 },
  { citations: 35, funds: 180 },
  { citations: 60, funds: 500 },
  { citations: 100, funds: 1200 },
  { citations: 180, funds: 3200 },
  { citations: 300, funds: 7600 },
  { citations: 650, funds: 16000 },
  { citations: 1200, funds: 32000 },
  { citations: 2200, funds: 65000 },
  { citations: 2800, funds: 110000 },
  { citations: 3600, funds: 170000 },
  { citations: 5000, funds: 250000 },
];

const FUNDERS = [
  { minGrant: 80, maxGrant: 120, chance: 0.72 },
  { minGrant: 180, maxGrant: 320, chance: 0.48 },
  { minGrant: 650, maxGrant: 1200, chance: 0.26 },
  { minGrant: 1800, maxGrant: 3200, chance: 0.16 },
  { minGrant: 4500, maxGrant: 8000, chance: 0.09 },
  { minGrant: 9000, maxGrant: 16000, chance: 0.055 },
  { minGrant: 18000, maxGrant: 32000, chance: 0.032 },
  { minGrant: 35000, maxGrant: 55000, chance: 0.018 },
  { minGrant: 65000, maxGrant: 85000, chance: 0.01 },
  { minGrant: 90000, maxGrant: 110000, chance: 0.004 },
];

const ALLOCATIONS = [
  [[0, 0], [80, 2], [420, 5], [1800, 12], [9500, 26]],
  [[0, 0], [150, 4], [1400, 11], [12000, 28], [65000, 70]],
  [[0, 0], [250, 4], [2800, 14], [22000, 42], [95000, 85]],
  [[0, 0], [120, 2], [900, 7], [3500, 16], [18000, 34]],
  [[0, 0], [100, 2], [1200, 10], [8500, 28], [48000, 65]],
];

const RESEARCH_EVENTS = [-10, 8, -18, 20, -15, 7, -8, 13, -22, 18, 5, -12];
const REVISION_EVENTS = [-7, 6, 3, -5, 9, 4, -6];
const JOURNALS = [
  [1, 50],
  [2, 72],
  [3, 94],
  [4, 120],
  [5, 152],
  [6, 192],
  [7, 240],
  [8, 280],
  [9, 330],
  [10, 390],
];

const REVISION_SUPPORT_COST = 180 + 950 + 26000;
const REVISION_SUPPORT_BONUS = 0.3;

const STRATEGIES = [
  { key: "balanced", label: "Balanced baseline", journal: "balanced", allocation: "balanced", revision: "none", collaboration: "none" },
  { key: "safe", label: "Safe journals only", journal: "safe", allocation: "balanced", revision: "none", collaboration: "none" },
  { key: "risky", label: "Risky journals", journal: "risky", allocation: "balanced", revision: "none", collaboration: "none" },
  { key: "spendAll", label: "Spend all grants", journal: "balanced", allocation: "spendAll", revision: "buyAll", collaboration: "none" },
  { key: "saveVanity", label: "Save for vanity", journal: "balanced", allocation: "frugal", revision: "none", collaboration: "none" },
  { key: "superstar", label: "Always contact superstar collaborators", journal: "balanced", allocation: "balanced", revision: "none", collaboration: "superstar" },
];

const COLLEAGUE_SCORE_TIERS = [55, 90, 130, 180, 240, 310, 390, 500, 650, 820, 1040, 1320, 1660, 2050, 2500];

const COLLAB_CONGRESS_STRATEGIES = [
  { key: "quiet", label: "No collaboration, quiet congresses", collaboration: "none", congress: "notes", talk: "none" },
  { key: "peer", label: "Contact closest peers", collaboration: "peer", congress: "notes", talk: "none" },
  { key: "upward", label: "Contact slightly senior colleagues", collaboration: "higher", congress: "notes", talk: "none" },
  { key: "superstar", label: "Chase superstar collaborators", collaboration: "superstar", congress: "notes", talk: "none" },
  { key: "questions", label: "Ask questions at congress", collaboration: "peer", congress: "question", talk: "technical" },
  { key: "network", label: "Chat after talks, then contact friends", collaboration: "friendFirst", congress: "chat", talk: "technical" },
  { key: "funders", label: "Inspirational congress talks", collaboration: "peer", congress: "chat", talk: "inspirational" },
];

function rand(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function mean(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1));
  return sorted[index];
}

function reputationAdjustedChance(baseChance, reputation, boost = 0) {
  const midpoint = 25;
  const steepness = 0.11;
  const reputationBoost = 1 / (1 + Math.exp(-steepness * (reputation - midpoint)));
  return clamp(baseChance + 0.25 * reputationBoost + boost, 0.05, 0.95);
}

function randomGrant(funder) {
  return Math.round(funder.minGrant + Math.random() * (funder.maxGrant - funder.minGrant));
}

function rankQualityBonus(rank) {
  if (rank === "Full Professor") return 30;
  if (rank === "Associate Professor") return 12;
  return 0;
}

function experienceQualityBonus(experience) {
  return Math.round(18 * Math.log1p(experience));
}

function rankScoreBonus(rank) {
  if (rank === "Full Professor") return 180;
  if (rank === "Associate Professor") return 90;
  return 25;
}

function careerScore(player, citations, vanityCount) {
  return Math.round(
    player.reputation * 8 +
      player.experience * 5 +
      rankScoreBonus(player.rank) +
      citations / 8 +
      vanityCount * 20
  );
}

function promotionChance(player, promotion, citations, vanityCount) {
  const baselineRank = promotion.rank === "Full Professor" ? "Associate Professor" : "Assistant Professor";
  const baseline = promotion.threshold * 8 + player.experience * 5 + rankScoreBonus(baselineRank);
  const surplus = Math.max(0, careerScore(player, citations, vanityCount) - baseline);
  return clamp(0.25 + 0.35 * (1 - Math.exp(-surplus / 900)), 0.25, 0.6);
}

function chooseFunding(reputation, boost = 0) {
  // Simple bot: apply from easiest to hardest until one succeeds.
  for (const funder of FUNDERS) {
    if (Math.random() < reputationAdjustedChance(funder.chance, reputation, boost)) {
      return randomGrant(funder);
    }
  }
  return 0;
}

function chooseAllocations(funds, strategy, citations, vanityCount) {
  let bonus = 0;
  if (strategy.allocation === "frugal") {
    return { bonus, funds };
  }
  const reserve =
    strategy.allocation === "frugal"
      ? VANITY.slice(vanityCount, vanityCount + 3)
          .filter((item) => citations >= item.citations * 0.5)
          .reduce((sum, item) => sum + item.funds, 0)
      : 0;
  for (const category of ALLOCATIONS) {
    let spendable = strategy.allocation === "frugal" ? Math.max(0, funds - reserve) : funds;
    if (strategy.allocation === "balanced" && funds > 1000) {
      spendable = Math.max(250, funds * 0.55);
    }
    const affordable = category.filter(([cost]) => cost <= spendable);
    affordable.sort((a, b) => {
      if (strategy.allocation === "frugal") return (b[1] / Math.max(1, b[0])) - (a[1] / Math.max(1, a[0]));
      return b[1] - a[1] || a[0] - b[0];
    });
    const [cost, quality] = affordable[0];
    funds -= cost;
    bonus += quality;
  }
  return { bonus, funds };
}

function collaborationOfferFromGap(gap, isFriend = false) {
  const friendChance = isFriend ? 0.35 : 0;
  const friendBonus = isFriend ? 3 : 0;
  if (gap < -60) return { chance: clamp(0.9 + friendChance, 0, 0.98), bonus: 5 + friendBonus, malus: 1, kind: "lower" };
  if (Math.abs(gap) <= 60) return { chance: clamp(0.5 + friendChance, 0, 0.95), bonus: 10 + friendBonus, malus: 0, kind: "peer" };
  if (gap > 220) return { chance: clamp(0.1 + friendChance, 0, 0.9), bonus: 18 + friendBonus, malus: 0, kind: "veryHigh" };
  return { chance: clamp(0.3 + friendChance, 0, 0.9), bonus: 14 + friendBonus, malus: 0, kind: "higher" };
}

function chooseCollaboratorScore(playerScore, strategy, friends) {
  if (!strategy.collaboration || strategy.collaboration === "none") return null;
  const friendScores = COLLEAGUE_SCORE_TIERS.filter((score) => friends.has(score));
  if (strategy.collaboration === "friendFirst" && friendScores.length) {
    const usefulFriends = friendScores.filter((score) => score >= playerScore - 60);
    if (usefulFriends.length) {
      return usefulFriends.sort((a, b) => Math.abs(a - playerScore) - Math.abs(b - playerScore))[0];
    }
  }
  if (strategy.collaboration === "peer" || strategy.collaboration === "friendFirst") {
    return [...COLLEAGUE_SCORE_TIERS].sort((a, b) => Math.abs(a - playerScore) - Math.abs(b - playerScore))[0];
  }
  if (strategy.collaboration === "higher") {
    const higher = COLLEAGUE_SCORE_TIERS.filter((score) => score > playerScore + 60 && score <= playerScore + 260);
    if (higher.length) return higher[0];
    return [...COLLEAGUE_SCORE_TIERS].sort((a, b) => Math.abs(a - playerScore) - Math.abs(b - playerScore))[0];
  }
  if (strategy.collaboration === "superstar") return COLLEAGUE_SCORE_TIERS[COLLEAGUE_SCORE_TIERS.length - 1];
  return null;
}

function collaborationBonus(player, citations, vanityCount, strategy, friends) {
  const playerScore = careerScore(player, citations, vanityCount);
  const colleagueScore = chooseCollaboratorScore(playerScore, strategy, friends);
  if (colleagueScore === null) return { bonus: 0, accepted: false, attempt: false, friend: false, malus: 0, kind: "none" };
  const isFriend = friends.has(colleagueScore);
  const offer = collaborationOfferFromGap(colleagueScore - playerScore, isFriend);
  const accepted = Math.random() < offer.chance;
  return {
    bonus: accepted ? offer.bonus : 0,
    accepted,
    attempt: true,
    friend: isFriend,
    malus: accepted ? offer.malus : 0,
    kind: offer.kind,
  };
}

function researchProgressIncrement(impactful) {
  return impactful ? Math.floor(9 + Math.random() * 9) : Math.floor(1 + Math.random() * 6);
}

function runResearch(quality) {
  let progress = 0;
  let events = 0;
  while (progress < 100) {
    const impactful = Math.random() >= ROUTINE_RESEARCH_PROBABILITY;
    progress += Math.min(researchProgressIncrement(impactful), 100 - progress);
    if (impactful) quality = Math.max(0, quality + rand(RESEARCH_EVENTS));
    events += 1;
  }
  return { quality, events };
}

function journalFit(quality, threshold) {
  const delta = quality - threshold;
  if (delta >= 35) return "overkill";
  if (delta >= 15) return "safe";
  if (delta >= -5) return "best";
  if (delta >= -25) return "stretch";
  return "highRisk";
}

function rewardProfile(fit, prestige) {
  const profiles = {
    overkill: { reputation: Math.max(1, Math.round(prestige * 0.18)), experience: 1, citationMultiplier: 0.12 },
    safe: { reputation: Math.max(1, Math.round(prestige * 0.65)), experience: 1, citationMultiplier: 0.55 },
    best: { reputation: prestige, experience: 2, citationMultiplier: 1 },
    stretch: { reputation: Math.round(prestige * 1.25) + 1, experience: 3, citationMultiplier: 1.15 },
    highRisk: { reputation: Math.round(prestige * 1.8) + 3, experience: 4, citationMultiplier: 1.35 },
  };
  return profiles[fit] || profiles.best;
}

function weightedOutcome(choices) {
  const roll = Math.random();
  let cursor = 0;
  for (const [outcome, probability] of choices) {
    cursor += probability;
    if (roll < cursor) return outcome;
  }
  return choices[choices.length - 1][0];
}

function revisionProgressIncrement() {
  return Math.floor(16 + Math.random() * 9);
}

function runRevision(quality, acceptanceBonus = 0) {
  let progress = 0;
  let events = 0;
  while (progress < 100) {
    progress += Math.min(revisionProgressIncrement(), 100 - progress);
    quality = Math.max(0, quality + rand(REVISION_EVENTS));
    events += 1;
  }
  const accepted = Math.random() < clamp(BASE_REVISION_ACCEPTANCE + acceptanceBonus, 0.05, 0.95);
  return { quality, events, result: accepted ? "accepted" : "rejected" };
}

function review(fit, final = false, acceptanceBonus = 0) {
  if (final) return Math.random() < clamp(BASE_REVISION_ACCEPTANCE + acceptanceBonus, 0.05, 0.95) ? "accepted" : "rejected";
  const probabilities = {
    overkill: [["accepted", 0.9], ["revision", 0.05], ["rejected", 0.05]],
    safe: [["accepted", 0.72], ["revision", 0.18], ["rejected", 0.1]],
    best: [["accepted", 0.5], ["revision", 0.25], ["rejected", 0.25]],
    stretch: [["accepted", 0.2], ["revision", 0.3], ["rejected", 0.5]],
    highRisk: [["accepted", 0.04], ["revision", 0.13], ["rejected", 0.83]],
  };
  return weightedOutcome(probabilities[fit]);
}

function createCitationProfile(quality, journal, reward) {
  const prestigeLift = 0.75 + journal.prestige * 0.12;
  const qualityLift = Math.max(0.4, quality / 120);
  const baseImpact = Math.max(1, (4 + journal.prestige * 1.8 + qualityLift * 4) * reward.citationMultiplier * prestigeLift);
  const roll = Math.random();
  if (roll < 0.04) {
    return { type: "snowball", age: 0, base: Math.max(1, Math.round(baseImpact * (0.45 + Math.random() * 0.35))), growth: 1.08 + Math.random() * 0.08, volatility: 0.55 };
  }
  if (roll < 0.22) {
    return { type: "sporadic", age: 0, base: Math.max(1, Math.round(baseImpact * (0.15 + Math.random() * 0.25))), chance: clamp(0.2 + journal.prestige * 0.045, 0.2, 0.72), burst: Math.max(1, Math.round(journal.prestige / 2)), volatility: 1.1 };
  }
  return { type: "wave", age: 0, base: Math.max(1, Math.round(baseImpact * (0.45 + Math.random() * 0.35))), peakYear: 5 + Math.floor(Math.random() * 6), decay: 4 + Math.random() * 5 + journal.prestige * 0.25, volatility: 0.7 };
}

function volatileRound(value, volatility) {
  const jitter = 1 - volatility / 2 + Math.random() * volatility;
  return Math.max(0, Math.round(value * jitter));
}

function annualCitations(paper) {
  const profile = paper.citationProfile;
  profile.age += 1;
  if (profile.type === "snowball") {
    return volatileRound(profile.base * Math.pow(profile.growth, profile.age - 1), profile.volatility);
  }
  if (profile.type === "sporadic") {
    if (Math.random() > profile.chance) return 0;
    return volatileRound(profile.base + Math.random() * profile.burst, profile.volatility);
  }
  const age = profile.age;
  const peakYear = profile.peakYear;
  const rise = Math.pow(Math.min(age, peakYear) / peakYear, 1.35);
  const decline = age <= peakYear ? 1 : Math.exp(-(age - peakYear) / profile.decay);
  return volatileRound(profile.base * 2.2 * rise * decline, profile.volatility);
}

function chooseJournal(quality, strategy) {
  const options = JOURNALS.map(([prestige, threshold]) => ({
    prestige,
    threshold,
    fit: journalFit(quality, threshold),
  }));
  if (strategy.journal === "safe") {
    const safe = options.filter((journal) => ["overkill", "safe"].includes(journal.fit)).sort((a, b) => b.prestige - a.prestige)[0];
    return safe || options[0];
  }
  if (strategy.journal === "risky") {
    const highRisk = options.filter((journal) => journal.fit === "highRisk").sort((a, b) => b.prestige - a.prestige)[0];
    const stretch = options.filter((journal) => journal.fit === "stretch").sort((a, b) => b.prestige - a.prestige)[0];
    if (stretch && Math.random() < 0.7) return stretch;
    if (highRisk && Math.random() < 0.3) return highRisk;
  }
  const best = options.filter((journal) => journal.fit === "best").sort((a, b) => b.prestige - a.prestige)[0];
  if (best) return best;
  const stretch = options.filter((journal) => journal.fit === "stretch").sort((a, b) => b.prestige - a.prestige)[0];
  if (stretch && Math.random() < 0.35) return stretch;
  const safe = options.filter((journal) => journal.fit === "safe").sort((a, b) => b.prestige - a.prestige)[0];
  if (safe) return safe;
  const overkill = options.filter((journal) => journal.fit === "overkill").sort((a, b) => b.prestige - a.prestige)[0];
  return overkill || options[0];
}

function resolveCongress(player, citations, vanityCount, friends, strategy) {
  const speakers = [...COLLEAGUE_SCORE_TIERS].sort(() => Math.random() - 0.5).slice(0, 5);
  let reputationDelta = 0;
  let newFriend = false;
  let fundingBoost = 0;
  let citationBoost = 0;

  if (strategy.congress === "question") {
    reputationDelta = Math.random() < 0.55 ? 1 : -1;
  } else if (strategy.congress === "chat") {
    const playerScore = careerScore(player, citations, vanityCount);
    const target = speakers.sort((a, b) => Math.abs(a - playerScore) - Math.abs(b - playerScore))[0];
    if (Math.random() < 0.45) {
      friends.add(target);
      newFriend = true;
    }
  }

  if (strategy.talk === "technical" && Math.random() < 0.55) citationBoost = 0.12;
  if (strategy.talk === "inspirational" && Math.random() < 0.55) fundingBoost = 0.04;

  return { reputationDelta, newFriend, fundingBoost, citationBoost };
}

function simulateCareer(strategy = STRATEGIES[0], trace = false) {
  const player = {
    reputation: 0,
    experience: 1,
    rank: "Assistant Professor",
  };
  const publications = [];
  const fitCounts = {};
  const acceptedPrestigeCounts = {};
  const publicationRankCounts = {};
  const citationProfileCounts = {};
  const reachedTiers = new Set();
  let citations = 0;
  let funds = 0;
  let vanityCount = 0;
  let accepted = 0;
  let rejected = 0;
  let revisions = 0;
  let researchEvents = 0;
  let revisionEvents = 0;
  let associateYear = null;
  let fullYear = null;
  let promotionFailureStreak = 0;
  let maxPromotionFailureStreak = 0;
  let successfulCollaborations = 0;
  let collaborationAttempts = 0;
  let friendCollaborations = 0;
  let congressFriends = 0;
  let fundingBoostYears = 0;
  let fundingBoost = 0;
  let citationBoostYears = 0;
  let citationBoost = 0;
  const friends = new Set();
  const yearly = [];

  for (let year = 1; year <= YEARS; year += 1) {
    if (
      player.rank === "Assistant Professor" &&
      player.reputation >= ASSOCIATE_REP_THRESHOLD
    ) {
      if (Math.random() < promotionChance(player, { rank: "Associate Professor", threshold: ASSOCIATE_REP_THRESHOLD }, citations, vanityCount)) {
        player.rank = "Associate Professor";
        associateYear = year;
        promotionFailureStreak = 0;
      } else {
        promotionFailureStreak += 1;
        maxPromotionFailureStreak = Math.max(maxPromotionFailureStreak, promotionFailureStreak);
      }
    }
    if (
      player.rank === "Associate Professor" &&
      player.reputation >= FULL_REP_THRESHOLD
    ) {
      if (Math.random() < promotionChance(player, { rank: "Full Professor", threshold: FULL_REP_THRESHOLD }, citations, vanityCount)) {
        player.rank = "Full Professor";
        fullYear = year;
        promotionFailureStreak = 0;
      } else {
        promotionFailureStreak += 1;
        maxPromotionFailureStreak = Math.max(maxPromotionFailureStreak, promotionFailureStreak);
      }
    }

    funds += chooseFunding(player.reputation, fundingBoostYears > 0 ? fundingBoost : 0);
    const allocation = chooseAllocations(funds, strategy, citations, vanityCount);
    funds = allocation.funds;
    const allocationBonus = allocation.bonus;
    const collaboration = collaborationBonus(player, citations, vanityCount, strategy, friends);
    if (collaboration.attempt) collaborationAttempts += 1;
    if (collaboration.accepted) successfulCollaborations += 1;
    if (collaboration.accepted && collaboration.friend) friendCollaborations += 1;
    if (collaboration.malus) player.reputation = Math.max(0, player.reputation - collaboration.malus);
    let quality =
      58 +
      experienceQualityBonus(player.experience) +
      24 * Math.random() +
      (Math.random() * 36 - 18) +
      rankQualityBonus(player.rank) +
      allocationBonus +
      collaboration.bonus;
    const research = runResearch(Math.round(quality));
    quality = research.quality;
    researchEvents += research.events;

    const journal = chooseJournal(quality, strategy);
    fitCounts[journal.fit] = (fitCounts[journal.fit] || 0) + 1;
    let result = review(journal.fit, false);
    if (result === "revision") {
      revisions += 1;
      let revisionBonus = 0;
      if (strategy.revision === "buyAll" && funds >= REVISION_SUPPORT_COST) {
        funds -= REVISION_SUPPORT_COST;
        revisionBonus = REVISION_SUPPORT_BONUS;
      }
      const revision = runRevision(quality, revisionBonus);
      quality = revision.quality;
      revisionEvents += revision.events;
      result = revision.result;
    }

    if (result === "accepted") {
      const reward = rewardProfile(journal.fit, journal.prestige);
      accepted += 1;
      acceptedPrestigeCounts[journal.prestige] = (acceptedPrestigeCounts[journal.prestige] || 0) + 1;
      publicationRankCounts[player.rank] = (publicationRankCounts[player.rank] || 0) + 1;
      reachedTiers.add(journal.prestige);
      player.experience += reward.experience;
      player.reputation += reward.reputation;
      const citationProfile = createCitationProfile(quality, journal, reward);
      citationProfileCounts[citationProfile.type] = (citationProfileCounts[citationProfile.type] || 0) + 1;
      publications.push({
        citationProfile,
        prestige: journal.prestige,
      });
    } else {
      rejected += 1;
      player.experience += 1;
      player.reputation = Math.max(0, player.reputation - 2);
    }

    for (const paper of publications) {
      const newCitations = annualCitations(paper);
      citations += citationBoostYears > 0 ? Math.round(newCitations * (1 + citationBoost)) : newCitations;
    }
    if (citationBoostYears > 0) citationBoostYears -= 1;
    if (fundingBoostYears > 0) fundingBoostYears -= 1;

    while (
      vanityCount < VANITY.length &&
      citations >= VANITY[vanityCount].citations &&
      funds >= VANITY[vanityCount].funds
    ) {
      funds -= VANITY[vanityCount].funds;
      vanityCount += 1;
    }

    if (year % 4 === 0 && strategy.congress && strategy.congress !== "none") {
      const congress = resolveCongress(player, citations, vanityCount, friends, strategy);
      player.reputation = Math.max(0, player.reputation + congress.reputationDelta);
      if (congress.newFriend) congressFriends += 1;
      if (congress.fundingBoost) {
        fundingBoost = congress.fundingBoost;
        fundingBoostYears = 4;
      }
      if (congress.citationBoost) {
        citationBoost = congress.citationBoost;
        citationBoostYears = 4;
      }
    }

    if (trace) {
      yearly.push({
        year,
        rank: player.rank,
        reputation: player.reputation,
        citations,
        funds: Math.round(funds),
        publications: accepted,
        vanity: vanityCount,
      });
    }
  }

  return {
    reputation: player.reputation,
    experience: player.experience,
    rank: player.rank,
    accepted,
    rejected,
    revisions,
    citations,
    funds,
    vanityCount,
    researchEvents,
    revisionEvents,
    associateYear,
    fullYear,
    fitCounts,
    acceptedPrestigeCounts,
    publicationRankCounts,
    citationProfileCounts,
    reachedTiers: [...reachedTiers],
    maxPromotionFailureStreak,
    successfulCollaborations,
    collaborationAttempts,
    friendCollaborations,
    congressFriends,
    yearly,
  };
}

function mergeCounts(results, key) {
  return results.reduce((counts, result) => {
    for (const [name, count] of Object.entries(result[key])) {
      counts[name] = (counts[name] || 0) + count;
    }
    return counts;
  }, {});
}

function reachedTierRate(results, tier) {
  return (100 * results.filter((result) => result.reachedTiers.some((prestige) => prestige >= tier)).length / results.length).toFixed(1);
}

function summarizeStrategy(strategy) {
  const results = Array.from({ length: RUNS }, () => simulateCareer(strategy));
  const rankCounts = results.reduce((counts, result) => {
    counts[result.rank] = (counts[result.rank] || 0) + 1;
    return counts;
  }, {});
  const associateYears = results.map((r) => r.associateYear).filter(Boolean);
  const fullYears = results.map((r) => r.fullYear).filter(Boolean);
  const allFitCounts = mergeCounts(results, "fitCounts");
  const allAcceptedPrestigeCounts = mergeCounts(results, "acceptedPrestigeCounts");
  const allPublicationRankCounts = mergeCounts(results, "publicationRankCounts");
  const allCitationProfileCounts = mergeCounts(results, "citationProfileCounts");
  const totalFit = Object.values(allFitCounts).reduce((sum, count) => sum + count, 0);
  const totalAccepted = Object.values(allAcceptedPrestigeCounts).reduce((sum, count) => sum + count, 0);
  const totalProfiles = Object.values(allCitationProfileCounts).reduce((sum, count) => sum + count, 0);

  console.log(`\nStrategy: ${strategy.label}`);
  console.log(`  Average accepted/rejected/revisions: ${mean(results.map((r) => r.accepted)).toFixed(2)} / ${mean(results.map((r) => r.rejected)).toFixed(2)} / ${mean(results.map((r) => r.revisions)).toFixed(2)}`);
  console.log(`  Average final reputation/citations/funds: ${mean(results.map((r) => r.reputation)).toFixed(2)} / ${mean(results.map((r) => r.citations)).toFixed(2)} / $${mean(results.map((r) => r.funds)).toFixed(2)}`);
  console.log(`  Citation percentiles: p50=${percentile(results.map((r) => r.citations), 50)}, p80=${percentile(results.map((r) => r.citations), 80)}, p95=${percentile(results.map((r) => r.citations), 95)}`);
  console.log(`  Average vanity items owned: ${mean(results.map((r) => r.vanityCount)).toFixed(2)}`);
  console.log(`  Promotion rates: Associate ${(100 * associateYears.length / RUNS).toFixed(1)}% (avg year ${mean(associateYears).toFixed(2)}), Full ${(100 * fullYears.length / RUNS).toFixed(1)}% (avg year ${mean(fullYears).toFixed(2)})`);
  console.log(`  Average max promotion failure streak: ${mean(results.map((r) => r.maxPromotionFailureStreak)).toFixed(2)}`);
  console.log(`  Chance of reaching journal tiers: tier 4+ ${reachedTierRate(results, 4)}%, tier 7+ ${reachedTierRate(results, 7)}%, tier 10 ${reachedTierRate(results, 10)}%`);
  console.log(`  Vanity threshold reach: third ${((100 * results.filter((r) => r.citations >= VANITY_THRESHOLDS.thirdHighest).length) / RUNS).toFixed(1)}%, second ${((100 * results.filter((r) => r.citations >= VANITY_THRESHOLDS.secondHighest).length) / RUNS).toFixed(1)}%, highest ${((100 * results.filter((r) => r.citations >= VANITY_THRESHOLDS.highest).length) / RUNS).toFixed(1)}%`);
  console.log("  Publications by rank:");
  for (const rank of ["Assistant Professor", "Associate Professor", "Full Professor"]) {
    console.log(`    ${rank}: ${((allPublicationRankCounts[rank] || 0) / RUNS).toFixed(2)}`);
  }
  console.log("  Submission fit distribution:");
  for (const fit of ["overkill", "safe", "best", "stretch", "highRisk"]) {
    console.log(`    ${fit}: ${(100 * (allFitCounts[fit] || 0) / Math.max(1, totalFit)).toFixed(1)}%`);
  }
  console.log("  Accepted papers by journal prestige:");
  for (let prestige = 1; prestige <= 10; prestige += 1) {
    console.log(`    ${prestige}: ${(100 * (allAcceptedPrestigeCounts[prestige] || 0) / Math.max(1, totalAccepted)).toFixed(1)}%`);
  }
  console.log("  Citation profile mix:");
  for (const profile of ["sporadic", "wave", "snowball"]) {
    console.log(`    ${profile}: ${(100 * (allCitationProfileCounts[profile] || 0) / Math.max(1, totalProfiles)).toFixed(1)}%`);
  }
  console.log("  Final ranks:");
  for (const rank of ["Assistant Professor", "Associate Professor", "Full Professor"]) {
    console.log(`    ${rank}: ${rankCounts[rank] || 0} (${(100 * (rankCounts[rank] || 0) / RUNS).toFixed(1)}%)`);
  }

  return results;
}

function summarizeInteractionStrategy(strategy, baseline) {
  const results = Array.from({ length: RUNS }, () => simulateCareer({
    ...STRATEGIES[0],
    ...strategy,
  }));
  const fullYears = results.map((r) => r.fullYear).filter(Boolean);
  const avgCitations = mean(results.map((r) => r.citations));
  const avgReputation = mean(results.map((r) => r.reputation));
  const fullRate = (100 * fullYears.length / RUNS);
  const tier7 = Number(reachedTierRate(results, 7));
  console.log(`\nInteraction strategy: ${strategy.label}`);
  console.log(`  Average final reputation/citations: ${avgReputation.toFixed(2)} / ${avgCitations.toFixed(2)}`);
  console.log(`  Full Professor rate/year: ${fullRate.toFixed(1)}% / ${mean(fullYears).toFixed(2)}`);
  console.log(`  Average accepted papers / vanity: ${mean(results.map((r) => r.accepted)).toFixed(2)} / ${mean(results.map((r) => r.vanityCount)).toFixed(2)}`);
  console.log(`  Tier 7+ journal reach: ${tier7.toFixed(1)}%`);
  console.log(`  Collaboration attempts/successes/friend successes: ${mean(results.map((r) => r.collaborationAttempts)).toFixed(2)} / ${mean(results.map((r) => r.successfulCollaborations)).toFixed(2)} / ${mean(results.map((r) => r.friendCollaborations)).toFixed(2)}`);
  console.log(`  Congress friends made: ${mean(results.map((r) => r.congressFriends)).toFixed(2)}`);
  if (baseline) {
    console.log(`  Edge vs quiet baseline: citations ${(avgCitations - baseline.avgCitations).toFixed(2)}, Full rate ${(fullRate - baseline.fullRate).toFixed(1)} pts, tier 7+ ${(tier7 - baseline.tier7).toFixed(1)} pts`);
  }
  return {
    avgCitations,
    fullRate,
    tier7,
  };
}

console.log("Sim Academia 3000 simulation");
console.log(`Runs per strategy: ${RUNS}`);
console.log(`Years per run: ${YEARS}`);
for (const strategy of STRATEGIES) summarizeStrategy(strategy);

console.log("\nCollaboration and congress assessment");
let quietBaseline = null;
for (const strategy of COLLAB_CONGRESS_STRATEGIES) {
  const summary = summarizeInteractionStrategy(strategy, quietBaseline);
  if (strategy.key === "quiet") quietBaseline = summary;
}

const typical = simulateCareer(STRATEGIES[0], true);
console.log("\nTypical run summary export: balanced sample");
console.log("year,rank,reputation,citations,funds,publications,vanity");
for (const row of typical.yearly) {
  console.log(`${row.year},${row.rank},${row.reputation},${row.citations},${row.funds},${row.publications},${row.vanity}`);
}
