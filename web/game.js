const BUILD = "ui review 2026-05-27";
const SAVE_KEY = "sim-academia-3000-save";

const DOMAINS = {
  Mathematics: ["Algebraic Geometry", "Number Theory", "Dynamical Systems", "Probability Theory", "Partial Differential Equations", "Topology"],
  Physics: ["Soft Matter Physics", "Astrophysics", "Quantum Mechanics", "Condensed Matter Physics", "Particle Physics", "Statistical Mechanics"],
  Chemistry: ["Organic Synthesis", "Physical Chemistry", "Materials Chemistry", "Catalysis", "Chemical Biology", "Electrochemistry"],
  "Control Theory": ["Robust Control", "Optimal Control", "Nonlinear Systems", "Networked Control", "Stochastic Control", "Model Predictive Control"],
  Engineering: ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Aerospace Engineering", "Biomedical Engineering", "Robotics"],
  Biology: ["Molecular Biology", "Genetics", "Ecology", "Neuroscience", "Evolutionary Biology", "Systems Biology"],
  "Computer Science": ["AI", "HCI", "Data Science", "Programming Languages", "Distributed Systems", "Computer Vision", "Cybersecurity"],
  Economics: ["Behavioral Economics", "Macroeconomics", "Financial Economics", "Industrial Organization", "Econometrics"],
};

const INSTITUTIONS = [
  "Université de Paris-Cité",
  "Sorbonne Nouvelle Institute",
  "École Normale de Lyon",
  "Institut Polytechnique de Grenoble",
  "Université Côte d'Azur",
  "Collège de Montpellier",
  "Cambridge St. Edmund's College",
  "Oxford Institute for Advanced Studies",
  "Heidelberg Technical University",
  "Leiden Institute of Science",
  "ETH Lausanne",
  "Imperial Northbridge College",
  "Stanford Westlake University",
  "Berkeley Institute of Technology",
  "Tokyo Metropolitan Science University",
  "Kyoto Institute for Fundamental Research",
  "National University of Singapore Sciences",
  "São Paulo Federal Institute of Research",
  "Cape Town Institute of Technology",
  "Toronto Centre for Advanced Studies",
];

const ACADEMIC_NAMES = [
  "Dr. Claire Moreau",
  "Dr. Julien Lefèvre",
  "Dr. Amina Benali",
  "Dr. Sofia Ricci",
  "Dr. Elena Kovács",
  "Dr. Ingrid Sørensen",
  "Dr. Marta Zielińska",
  "Dr. Noura Haddad",
  "Dr. Samir El-Khoury",
  "Dr. Priya Raman",
  "Dr. Ananya Mukherjee",
  "Dr. Mei-Ling Chen",
  "Dr. Haruto Nakamura",
  "Dr. Min-Jae Park",
  "Dr. Thabo Mbeki",
  "Dr. Amahle Dlamini",
  "Dr. Lucía Herrera",
  "Dr. Mateo Álvarez",
  "Dr. Daniel Okafor",
  "Dr. Sarah Whitfield",
  "Dr. Omar Al-Hassan",
  "Dr. Leïla Haddouche",
  "Dr. Camille Bernard",
  "Dr. Hugo Martin",
  "Dr. Élise Fournier",
  "Dr. Noémie Laurent",
  "Dr. Antoine Dubois",
  "Dr. Célia Marchand",
  "Dr. Amara Ndiaye",
  "Dr. Fatou Diop",
  "Dr. Kofi Mensah",
  "Dr. Zanele Ndlovu",
  "Dr. Aisha Khan",
  "Dr. Rohan Mehta",
  "Dr. Kavya Iyer",
  "Dr. Farah Rahman",
  "Dr. Lian Zhao",
  "Dr. Yuki Tanaka",
  "Dr. Sora Kim",
  "Dr. Jae-Hyun Choi",
  "Dr. Linh Nguyen",
  "Dr. Narin Sato",
  "Dr. Valentina Petrova",
  "Dr. Anika Weber",
  "Dr. Lukas Schneider",
  "Dr. Chiara Bianchi",
  "Dr. Marco Conti",
  "Dr. Beatriz Costa",
  "Dr. Inés Romero",
  "Dr. Diego Morales",
  "Dr. Helena Silva",
  "Dr. Rafael Ortega",
  "Dr. Miriam Cohen",
  "Dr. Yael Ben-David",
  "Dr. Nadia Mansour",
  "Dr. Karim El-Sayed",
  "Dr. Layla Barakat",
  "Dr. Noor Al-Farsi",
  "Dr. Emily Carter",
  "Dr. James Whitaker",
  "Dr. Hannah Brooks",
  "Dr. Thomas Reed",
  "Dr. Olivia Bennett",
  "Dr. Nathaniel Price",
  "Dr. Grace Morgan",
  "Dr. Victor Hale",
  "Dr. Isabella Stone",
  "Dr. Theo Laurent",
  "Dr. Maeve O'Connell",
  "Dr. Sigrid Holm",
];

const FUNDERS = [
  { name: "Departmental Coffee-Ring Seed Fund", minGrant: 80, maxGrant: 120, chance: 0.72 },
  { name: "Local Symposium Microgrant", minGrant: 180, maxGrant: 320, chance: 0.48 },
  { name: "Campus Interdisciplinary Initiative", minGrant: 650, maxGrant: 1200, chance: 0.26 },
  { name: "Society for Incremental Discoveries", minGrant: 1800, maxGrant: 3200, chance: 0.16 },
  { name: "Institute for Avant-Garde Research", minGrant: 4500, maxGrant: 8000, chance: 0.09 },
  { name: "Mysterious Reviewer #2 Endowment", minGrant: 9000, maxGrant: 16000, chance: 0.055 },
  { name: "Bureau of Scholarly Ventures", minGrant: 18000, maxGrant: 32000, chance: 0.032 },
  { name: "The Royal Society of Epistemic Endeavors", minGrant: 35000, maxGrant: 55000, chance: 0.018 },
  { name: "The Oracular Board of Impactful Grants", minGrant: 65000, maxGrant: 85000, chance: 0.01 },
  { name: "Infinite Revisions Moonshot Fellowship", minGrant: 90000, maxGrant: 110000, chance: 0.004 },
];

const ALLOCATIONS = [
  {
    category: "Travel",
    options: [
      ["Nothing", 0, 0],
      ["Discount bus tickets", 80, 2],
      ["Economy flights", 420, 5],
      ["Fieldwork travel package", 1800, 12],
      ["International keynote circuit", 9500, 26],
    ],
  },
  {
    category: "Student Stipends",
    options: [
      ["Nothing", 0, 0],
      ["Hire one distracted intern", 150, 4],
      ["Graduate assistant for a semester", 1400, 11],
      ["PhD researcher for a year", 12000, 28],
      ["Elite postdoc strike team", 65000, 70],
    ],
  },
  {
    category: "Lab Equipment",
    options: [
      ["Nothing", 0, 0],
      ["Basic instruments", 250, 4],
      ["Reliable lab setup", 2800, 14],
      ["Advanced machinery", 22000, 42],
      ["State-of-the-art facility access", 95000, 85],
    ],
  },
  {
    category: "Conference Attendance",
    options: [
      ["Nothing", 0, 0],
      ["Local symposium", 120, 2],
      ["National conference", 900, 7],
      ["International conference", 3500, 16],
      ["Prestige keynote tour", 18000, 34],
    ],
  },
  {
    category: "Outsourced Data Analysis",
    options: [
      ["Nothing", 0, 0],
      ["Undergraduate spreadsheet wrangler", 100, 2],
      ["Freelance statistician", 1200, 10],
      ["Professional data scientist", 8500, 28],
      ["Renowned analytics firm", 48000, 65],
    ],
  },
];

const ASSOCIATE_REP_THRESHOLD = 7;
const FULL_REP_THRESHOLD = 28;
const ROUTINE_RESEARCH_PROBABILITY = 0.66;
const BASE_REVISION_ACCEPTANCE = 0.5;

const REVISION_SUPPORTS = [
  {
    key: "preprint",
    label: "Preprint brag on social media",
    cost: 180,
    bonus: 0.04,
    quality: 1,
    note: "A cheap visibility nudge. It might make the editor feel the paper already exists.",
  },
  {
    key: "proofreading",
    label: "Professional proofreading",
    cost: 950,
    bonus: 0.09,
    quality: 4,
    note: "Moderately expensive polish: clearer prose, fewer reviewer irritants.",
  },
  {
    key: "corruption",
    label: "Corrupt editorial board",
    cost: 26000,
    bonus: 0.17,
    quality: 0,
    note: "Very expensive, very questionable, and mechanically effective.",
  },
];

const ROUTINE_RESEARCH_EVENTS = [
  "You clean up the bibliography and make quiet progress.",
  "A routine week of reading, coding, and careful notes moves the paper forward.",
  "You rewrite a section that nobody will notice but everyone will benefit from.",
  "The dataset gets labeled, checked, backed up, and generally tamed.",
  "A normal week passes: no drama, just scholarly accumulation.",
  "You answer co-author comments and make the draft less embarrassing.",
];

const RESEARCH_EVENTS = [
  ["Experiments are not going well.", -10, "bad"],
  ["A great collaborator meeting sharpens the argument.", 8, "good"],
  ["A crucial dataset turns out to be flawed.", -18, "bad"],
  ["A breakthrough in your model changes everything.", 20, "good"],
  ["A rival group publishes similar results.", -15, "warn"],
  ["A conference conversation gives you a missing citation.", 7, "good"],
  ["You lose a week to a mysterious bug.", -8, "warn"],
  ["A replication check comes out beautifully.", 13, "good"],
  ["Your central assumption collapses under scrutiny.", -22, "bad"],
  ["A surprisingly elegant theorem falls into place.", 18, "good"],
  ["A messy negative result forces a better framing.", 5, "good"],
  ["The analysis pipeline quietly corrupts one column.", -12, "bad"],
];

const REVISION_EVENTS = [
  ["Reviewer 2 wants twelve more robustness checks.", -7, "warn"],
  ["A friendly reviewer helps clarify your contribution.", 6, "good"],
  ["The editor asks for a shorter introduction.", 3, "good"],
  ["Your co-author vanishes during revision week.", -5, "bad"],
  ["The new analysis is stronger than expected.", 9, "good"],
  ["You add a carefully framed limitation section.", 4, "good"],
  ["A robustness check weakens the headline claim.", -6, "warn"],
];

const JOURNAL_TEMPLATES = [
  ["Proceedings of Preliminary {subdomain}", 1, 50],
  ["Regional Letters in {subdomain}", 2, 72],
  ["Annals of Applied {subdomain}", 3, 94],
  ["Journal of Emerging {subdomain}", 4, 120],
  ["Transactions on {subdomain}", 5, 152],
  ["International Review of {subdomain}", 6, 192],
  ["Advanced Studies in {subdomain}", 7, 240],
  ["Frontiers of Theoretical {subdomain}", 8, 280],
  ["Nature Reviews in {subdomain}", 9, 330],
  ["Annals of Transformative {subdomain}", 10, 390],
];

const KEYWORDS = {
  "Algebraic Geometry": ["Moduli Spaces", "Derived Categories", "Sheaves", "Birational Maps"],
  "Number Theory": ["Automorphic Forms", "Prime Gaps", "Galois Representations", "L-functions"],
  "Dynamical Systems": ["Ergodicity", "Attractors", "Bifurcations", "Chaotic Flows"],
  "Probability Theory": ["Martingales", "Random Walks", "Concentration Bounds", "Stochastic Processes"],
  "Partial Differential Equations": ["Weak Solutions", "Regularity", "Boundary Layers", "Dispersive Estimates"],
  Topology: ["Cobordism", "Homotopy", "Manifolds", "Knot Invariants"],
  "Soft Matter Physics": ["Colloids", "Viscosity", "Jamming", "Foams"],
  Astrophysics: ["Dark Matter", "Black Holes", "Exoplanets", "Gravitational Waves"],
  "Quantum Mechanics": ["Wavefunctions", "Entanglement", "Superposition", "Quantum Computing"],
  "Condensed Matter Physics": ["Topological Phases", "Spin Liquids", "Superconductivity", "Quasiparticles"],
  "Particle Physics": ["Neutrinos", "Collider Events", "Symmetry Breaking", "Hadron Jets"],
  "Statistical Mechanics": ["Phase Transitions", "Criticality", "Partition Functions", "Fluctuations"],
  "Organic Synthesis": ["C-H Activation", "Asymmetric Catalysis", "Reaction Cascades", "Total Synthesis"],
  "Physical Chemistry": ["Spectroscopy", "Reaction Dynamics", "Solvation", "Energy Landscapes"],
  "Materials Chemistry": ["Perovskites", "Nanoporous Frameworks", "Thin Films", "Self-Assembly"],
  Catalysis: ["Active Sites", "Turnover Frequency", "Ligand Effects", "Reaction Pathways"],
  "Chemical Biology": ["Protein Labeling", "Molecular Probes", "Enzyme Engineering", "Cellular Assays"],
  Electrochemistry: ["Ion Transport", "Redox Cycling", "Battery Interfaces", "Electrocatalysis"],
  "Robust Control": ["H-infinity Control", "Uncertainty Sets", "Stability Margins", "Loop Shaping"],
  "Optimal Control": ["Hamilton-Jacobi Equations", "Pontryagin Principles", "Trajectory Optimization", "Policy Gradients"],
  "Nonlinear Systems": ["Lyapunov Functions", "Feedback Linearization", "Limit Cycles", "Observer Design"],
  "Networked Control": ["Consensus", "Packet Drops", "Distributed Estimation", "Multi-Agent Systems"],
  "Stochastic Control": ["Kalman Filtering", "Partially Observed Systems", "Risk-Sensitive Control", "Controlled Diffusions"],
  "Model Predictive Control": ["Receding Horizons", "Constraint Handling", "Economic MPC", "Tube MPC"],
  "Mechanical Engineering": ["Turbulence", "Fracture Mechanics", "Heat Transfer", "Biomechanics"],
  "Electrical Engineering": ["Power Electronics", "Signal Processing", "Photonic Circuits", "RF Systems"],
  "Civil Engineering": ["Structural Reliability", "Urban Resilience", "Seismic Response", "Smart Infrastructure"],
  "Aerospace Engineering": ["Boundary Layers", "Flight Control", "Propulsion", "Orbital Transfer"],
  "Biomedical Engineering": ["Tissue Scaffolds", "Neural Interfaces", "Medical Imaging", "Biomechanical Models"],
  Robotics: ["Motion Planning", "Grasping", "SLAM", "Human-Robot Collaboration"],
  "Molecular Biology": ["DNA Replication", "Protein Folding", "Gene Expression", "Epigenetics"],
  Genetics: ["CRISPR", "Mutation Rates", "Genome Editing", "Mendelian Traits"],
  Ecology: ["Biodiversity", "Food Webs", "Habitat Fragmentation", "Invasive Species"],
  Neuroscience: ["Synaptic Plasticity", "Neural Coding", "Decision Circuits", "Cortical Dynamics"],
  "Evolutionary Biology": ["Selection Gradients", "Speciation", "Phylogenetics", "Adaptive Landscapes"],
  "Systems Biology": ["Gene Networks", "Metabolic Flux", "Feedback Motifs", "Cellular Heterogeneity"],
  AI: ["Neural Networks", "Bayesian Inference", "Reinforcement Learning", "Generative Models"],
  HCI: ["User Experience", "Tactile Feedback", "Interface Design", "Cognitive Load"],
  "Data Science": ["Feature Engineering", "Causal Inference", "Clustering", "Prediction Pipelines"],
  "Programming Languages": ["Type Systems", "Program Verification", "Compilers", "Semantic Models"],
  "Distributed Systems": ["Consensus Protocols", "Fault Tolerance", "Replication", "Latency Tails"],
  "Computer Vision": ["Scene Understanding", "Object Detection", "Visual Transformers", "3D Reconstruction"],
  Cybersecurity: ["Side Channels", "Formal Security", "Intrusion Detection", "Cryptographic Protocols"],
  "Behavioral Economics": ["Prospect Theory", "Cognitive Biases", "Game Theory", "Herd Behavior"],
  Macroeconomics: ["Inflation", "Fiscal Multipliers", "Business Cycles", "Central Banking"],
  "Financial Economics": ["Asset Pricing", "Market Microstructure", "Risk Premiums", "Portfolio Choice"],
  "Industrial Organization": ["Market Power", "Auctions", "Platform Competition", "Regulatory Design"],
  Econometrics: ["Instrumental Variables", "Panel Models", "Treatment Effects", "Identification"],
};

const VANITY = [
  { item: "Department mug with your name", citations: 15, funds: 40 },
  { item: "Personalized office door plaque", citations: 35, funds: 180 },
  { item: "Framed conference badge collection", citations: 60, funds: 500 },
  { item: "Membership in a prestigious society", citations: 100, funds: 1200 },
  { item: "Named graduate reading group", citations: 180, funds: 3200 },
  { item: "Minor editorial board seat", citations: 300, funds: 7600 },
  { item: "Endowed seminar series named after you", citations: 650, funds: 16000 },
  { item: "Lecture hall named after you", citations: 1200, funds: 32000 },
  { item: "National academy fellowship", citations: 2200, funds: 65000 },
  { item: "Bronze statue outside the library", citations: 2800, funds: 110000 },
  { item: "International prize with confusing acronym", citations: 3600, funds: 170000 },
  { item: "Lifetime chair of everything", citations: 5000, funds: 250000 },
];

const COLLEAGUE_SCORE_TIERS = [55, 90, 130, 180, 240, 310, 390, 500, 650, 820, 1040, 1320, 1660, 2050, 2500];

const CONGRESS_LOCATIONS = [
  "Vienna, Austria",
  "Barcelona, Spain",
  "Kyoto, Japan",
  "Boston, USA",
  "Montréal, Canada",
  "Singapore",
  "Berlin, Germany",
  "Cape Town, South Africa",
  "Melbourne, Australia",
  "Copenhagen, Denmark",
  "Seoul, South Korea",
  "Lisbon, Portugal",
  "Vancouver, Canada",
  "Edinburgh, Scotland",
  "São Paulo, Brazil",
];

const state = {
  screen: "profile",
  phase: "Profile",
  player: null,
  year: 1,
  yearLimit: 30,
  funds: 0,
  allocationBonus: 0,
  allocationIndex: 0,
  currentPaper: null,
  researchQueue: [],
  revisionQueue: [],
  selectedJournal: null,
  publications: [],
  citations: 0,
  citationHistory: [],
  vanity: [],
  usedFunders: new Set(),
  log: [],
  yearSummary: null,
  pendingPromotion: null,
  collaborationBonus: 0,
  collaborationCandidates: [],
  collaborationAttempts: new Set(),
  revisionProgress: 0,
  revisionAcceptanceBonus: 0,
  revisionSupports: new Set(),
  fundingBoostYears: 0,
  fundingBoost: 0,
  citationBoostYears: 0,
  citationBoost: 0,
  congressProgram: null,
  congressSummary: null,
  congressHistory: [],
  promotionHistory: [],
  rejectionHistory: [],
  collaborationName: null,
};

const app = document.getElementById("app");

function rand(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function oneOf(items) {
  return rand(items);
}

function shuffled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function log(message, tone = "") {
  state.log.unshift({ message, tone });
  state.log = state.log.slice(0, 80);
}

function startYearSummary() {
  state.yearSummary = {
    paper: null,
    outcome: "No paper submitted",
    journal: null,
    researchEvents: [],
    revisionEvents: [],
    citationEvents: [],
    funding: null,
    allocations: [],
  };
}

function reputationAdjustedChance(baseChance) {
  const reputation = state.player ? state.player.reputation : 0;
  const midpoint = 25;
  const steepness = 0.11;
  const reputationBoost = 1 / (1 + Math.exp(-steepness * (reputation - midpoint)));
  const congressBoost = state.fundingBoostYears > 0 ? state.fundingBoost : 0;
  return clamp(baseChance + 0.25 * reputationBoost + congressBoost, 0.05, 0.95);
}

function rankQualityBonus() {
  if (!state.player) return 0;
  if (state.player.rank === "Full Professor") return 30;
  if (state.player.rank === "Associate Professor") return 12;
  return 0;
}

function experienceQualityBonus() {
  if (!state.player) return 0;
  return Math.round(18 * Math.log1p(state.player.experience));
}

function eligiblePromotion() {
  if (!state.player) return null;
  if (state.player.rank === "Assistant Professor" && state.player.reputation >= ASSOCIATE_REP_THRESHOLD) {
    return { rank: "Associate Professor", threshold: ASSOCIATE_REP_THRESHOLD, bonus: 12 };
  }
  if (state.player.rank === "Associate Professor" && state.player.reputation >= FULL_REP_THRESHOLD) {
    return { rank: "Full Professor", threshold: FULL_REP_THRESHOLD, bonus: 30 };
  }
  return null;
}

function randomGrant(funder) {
  return Math.round(funder.minGrant + Math.random() * (funder.maxGrant - funder.minGrant));
}

function rankScoreBonus(rank) {
  if (rank === "Full Professor") return 180;
  if (rank === "Associate Professor") return 90;
  return 25;
}

function hIndex(publications = state.publications) {
  const citationCounts = publications.map((paper) => paper.citations).sort((a, b) => b - a);
  let index = 0;
  while (index < citationCounts.length && citationCounts[index] >= index + 1) index += 1;
  return index;
}

function standingLabel(reputation = state.player?.reputation || 0) {
  if (reputation >= 55) return "field-shaping";
  if (reputation >= 36) return "widely visible";
  if (reputation >= 22) return "recognized";
  if (reputation >= 10) return "emerging";
  if (reputation >= 4) return "locally noticed";
  return "precariously obscure";
}

function experienceLabel(experience = state.player?.experience || 0) {
  if (experience >= 75) return "battle-hardened";
  if (experience >= 45) return "seasoned";
  if (experience >= 25) return "confident";
  if (experience >= 12) return "developing";
  return "newly caffeinated";
}

function qualityLabel(quality = 0) {
  if (quality >= 300) return "terrifyingly polished";
  if (quality >= 240) return "formidable";
  if (quality >= 180) return "very strong";
  if (quality >= 125) return "promising";
  if (quality >= 80) return "fragile but alive";
  return "academically flammable";
}

function investmentLabel(value = 0) {
  if (value >= 55) return "transformative";
  if (value >= 30) return "major";
  if (value >= 15) return "strong";
  if (value >= 7) return "useful";
  if (value >= 3) return "modest";
  if (value > 0) return "tiny";
  return "none";
}

function journalTemperament(journal) {
  if (journal.prestige >= 9) return "selective, ceremonial, faintly terrifying";
  if (journal.prestige >= 7) return "ambitious and status-conscious";
  if (journal.prestige >= 5) return "serious, technical, and moderately picky";
  if (journal.prestige >= 3) return "specialist-friendly and pragmatic";
  return "forgiving toward early scholarly life";
}

function eventImpactLabel(change = 0) {
  if (change >= 15) return "major lift";
  if (change >= 6) return "helpful lift";
  if (change > 0) return "small lift";
  if (change <= -15) return "major setback";
  if (change <= -6) return "setback";
  if (change < 0) return "minor setback";
  return "";
}

function supportImpactLabel(support) {
  if (support.key === "corruption") return "dramatic editorial pressure";
  if (support.key === "proofreading") return "strong polish";
  if (support.key === "preprint") return "modest visibility";
  return "quiet help";
}

function careerScore(person = state.player, citations = state.citations, vanityCount = state.vanity.length) {
  return Math.round(
    person.reputation * 8 +
      person.experience * 5 +
      rankScoreBonus(person.rank) +
      citations / 8 +
      vanityCount * 20
  );
}

function promotionChance(promotion) {
  if (!state.player) return 0;
  const baselineRank = promotion.rank === "Full Professor" ? "Associate Professor" : "Assistant Professor";
  const baseline = promotion.threshold * 8 + state.player.experience * 5 + rankScoreBonus(baselineRank);
  const surplus = Math.max(0, careerScore() - baseline);
  return clamp(0.25 + 0.35 * (1 - Math.exp(-surplus / 900)), 0.25, 0.6);
}

function colleagueScore(colleague) {
  return Math.round(
    colleague.reputation * 8 +
      colleague.experience * 5 +
      rankScoreBonus(colleague.rank) +
      colleague.citations / 8 +
      colleague.vanityCount * 20
  );
}

function grantBand(funder) {
  if (funder.maxGrant <= 500) return "microgrant";
  if (funder.maxGrant <= 5000) return "small grant";
  if (funder.maxGrant <= 25000) return "major grant";
  if (funder.maxGrant <= 60000) return "prestige grant";
  return "transformative award";
}

function formatAuthors(authors = []) {
  const cleanAuthors = authors.filter(Boolean);
  if (!cleanAuthors.length) return "Unknown author";
  return cleanAuthors.map((name) => {
    const parts = name.trim().split(/\s+/);
    const family = parts.pop() || name;
    const initials = parts.map((part) => `${part[0]}.`).join(" ");
    return initials ? `${family}, ${initials}` : family;
  }).join(", ");
}

function apaCitation(paper) {
  const volume = paper.volume || Math.max(1, paper.year + (paper.journalPrestige || 1) * 3);
  const issue = paper.issue || Math.max(1, ((paper.year + (paper.journalPrestige || 1)) % 4) + 1);
  const pages = paper.pages || `${100 + paper.year * 7}-${112 + paper.year * 7}`;
  return `${formatAuthors(paper.authors)} (${2000 + paper.year}). ${paper.title}. <em>${paper.journal}</em>, ${volume}(${issue}), ${pages}.`;
}

function paperAuthors(collaboratorName = null) {
  const authors = [state.player.name];
  if (collaboratorName) authors.push(collaboratorName);
  if (!collaboratorName && Math.random() < 0.22) authors.push(rand(ACADEMIC_NAMES));
  return authors;
}

function publicationMetadata(journalPrestige) {
  const volume = Math.max(1, 12 + state.year + journalPrestige * 4 + Math.floor(Math.random() * 9));
  const issue = 1 + Math.floor(Math.random() * 4);
  const firstPage = Math.max(1, 37 + Math.floor(Math.random() * 420));
  const length = 8 + Math.floor(Math.random() * 19);
  return { volume, issue, pages: `${firstPage}-${firstPage + length}` };
}

function fundingEmail(funder, grant, accepted) {
  if (accepted) {
    return oneOf([
      `Dear ${state.player.name},\n\nI am pleased to inform you that ${funder.name} has selected your proposal for funding. The panel appreciated the clarity of the research question and the unnerving confidence with which you promised deliverables.\n\nThe award amount is $${grant}. Please use it in ways that can plausibly be described as transformative.\n\nSincerely,\nThe Grants Committee`,
      `Dear ${state.player.name},\n\nCongratulations. After review, your application to ${funder.name} has been approved. The committee found the project ambitious, legible, and just risky enough to make us look visionary if it works.\n\nWe are awarding $${grant}. We look forward to the resulting paper, report, keynote, or institutional rumor.\n\nBest regards,\nProgram Administration`,
      `Dear ${state.player.name},\n\nYour proposal survived panel discussion, budget scrutiny, and one unusually long methodological objection. We are happy to offer support through ${funder.name}.\n\nThe total award is $${grant}. Please acknowledge the funder in all outputs, especially the ones that age well.\n\nSincerely,\nThe Funding Office`,
    ]);
  }

  return oneOf([
    `Dear ${state.player.name},\n\nThank you for applying to ${funder.name}. After careful review, we regret that we cannot offer support in this round.\n\nThe panel found the proposal interesting, but not sufficiently compelling relative to the current competition. We encourage you to apply again when morale has recovered.\n\nSincerely,\nThe Grants Committee`,
    `Dear ${state.player.name},\n\nWe appreciate the opportunity to review your application to ${funder.name}. Unfortunately, the proposal was not selected for funding.\n\nReviewers noted the intellectual promise of the project, while also expressing concerns using the traditional vocabulary of doom: feasibility, scope, and impact.\n\nRegards,\nProgram Administration`,
    `Dear ${state.player.name},\n\nThe committee has completed its assessment of your submission to ${funder.name}. We regret to inform you that no award can be made at this time.\n\nThis decision reflects limited funds and a crowded field, not necessarily the cosmic value of your idea.\n\nSincerely,\nThe Funding Office`,
  ]);
}

function serializeState() {
  return {
    ...state,
    usedFunders: [...state.usedFunders],
    collaborationAttempts: [...state.collaborationAttempts],
    revisionSupports: [...state.revisionSupports],
  };
}

function restoreState(saved) {
  Object.assign(state, {
    screen: "profile",
    phase: "Profile",
    player: null,
    year: 1,
    yearLimit: 30,
    funds: 0,
    allocationBonus: 0,
    allocationIndex: 0,
    currentPaper: null,
    researchQueue: [],
    revisionQueue: [],
    selectedJournal: null,
    publications: [],
    citations: 0,
    citationHistory: [],
    vanity: [],
    usedFunders: new Set(),
    log: [],
    yearSummary: null,
    pendingPromotion: null,
    collaborationBonus: 0,
    collaborationCandidates: [],
    collaborationAttempts: new Set(),
    revisionProgress: 0,
    revisionAcceptanceBonus: 0,
    revisionSupports: new Set(),
    fundingBoostYears: 0,
    fundingBoost: 0,
    citationBoostYears: 0,
    citationBoost: 0,
    congressProgram: null,
    congressSummary: null,
    congressHistory: [],
    promotionHistory: [],
    rejectionHistory: [],
    collaborationName: null,
  }, saved, {
    usedFunders: new Set(saved.usedFunders || []),
    collaborationAttempts: new Set(saved.collaborationAttempts || []),
    revisionSupports: new Set(saved.revisionSupports || []),
    collaborationCandidates: saved.collaborationCandidates || [],
    publications: saved.publications || [],
    citationHistory: saved.citationHistory || [],
    vanity: saved.vanity || [],
    log: saved.log || [],
    yearLimit: saved.yearLimit || 30,
    fundingBoostYears: saved.fundingBoostYears || 0,
    fundingBoost: saved.fundingBoost || 0,
    citationBoostYears: saved.citationBoostYears || 0,
    citationBoost: saved.citationBoost || 0,
    congressProgram: saved.congressProgram || null,
    congressSummary: saved.congressSummary || null,
    congressHistory: saved.congressHistory || [],
    promotionHistory: saved.promotionHistory || [],
    rejectionHistory: saved.rejectionHistory || [],
    collaborationName: saved.collaborationName || null,
  });
}

function saveGame() {
  if (!state.player) {
    log("No active career to save.", "warn");
    renderProfile();
    return;
  }
  localStorage.setItem(SAVE_KEY, JSON.stringify(serializeState()));
  log("Game saved locally in this browser.", "good");
  renderCurrentState();
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) {
    log("No saved game found in this browser.", "warn");
    renderCurrentState();
    return;
  }
  try {
    restoreState(JSON.parse(raw));
    log("Saved game loaded.", "good");
    renderCurrentState();
  } catch (error) {
    log("Saved game could not be loaded.", "bad");
    renderCurrentState();
  }
}

function newGame() {
  localStorage.removeItem(SAVE_KEY);
  location.reload();
}

function showEmailModal({ from, subject, body, onContinue, secondary }) {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="email-modal" role="dialog" aria-modal="true" aria-labelledby="emailSubject">
      <div class="email-header">
        <div>
          <span class="email-label">From</span>
          <strong>${from}</strong>
        </div>
        <div>
          <span class="email-label">Subject</span>
          <h2 id="emailSubject">${subject}</h2>
        </div>
      </div>
      <div class="email-body">
        ${body.split("\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="actions">
        ${secondary ? `<button id="secondaryEmail">${secondary.label}</button>` : ""}
        <button class="primary" id="continueEmail">Continue</button>
      </div>
    </section>
  `;
  app.appendChild(overlay);
  document.getElementById("continueEmail").addEventListener("click", () => {
    overlay.remove();
    onContinue();
  });
  const secondaryButton = document.getElementById("secondaryEmail");
  if (secondaryButton) {
    secondaryButton.addEventListener("click", () => {
      overlay.remove();
      secondary.onClick();
    });
  }
}

function showCvModal() {
  const yearlyCitations = state.citationHistory.length
    ? state.citationHistory
    : Array.from({ length: Math.max(state.year - 1, 1) }, (_, index) => ({ year: index + 1, citations: 0 }));
  const maxYearlyCitations = Math.max(1, ...yearlyCitations.map((item) => item.citations));
  const histogram = yearlyCitations
    .map(
      (item) => `
        <div class="citation-bar" title="Year ${item.year}: ${item.citations} citations">
          <div class="citation-bar-fill" style="height: ${Math.max(4, (item.citations / maxYearlyCitations) * 100)}%"></div>
          <span>${item.year}</span>
        </div>
      `
    )
    .join("");
  const publications = state.publications.length
    ? state.publications
        .map(
          (paper) => `
            <li>
              <span>${apaCitation(paper)}</span>
              <span class="cv-citations">${paper.citations} citations.</span>
            </li>
          `
        )
        .join("")
    : `<li>No publications.</li>`;

  const distinctions = state.vanity.length
    ? state.vanity.map((item) => `<li>${item}</li>`).join("")
    : `<li>No prizes or distinctions.</li>`;

  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="cv-modal" role="dialog" aria-modal="true">
      <div class="cv-document">
        <header class="cv-header">
          <h2>${state.player.name}</h2>
          <p>${state.player.institution}</p>
          <p>${state.player.rank}</p>
          <p>${state.player.domain} - ${state.player.subdomain}</p>
        </header>
        <section>
          <h3>Appointments</h3>
          <p>${state.player.rank} of ${state.player.subdomain}, ${state.player.institution}</p>
        </section>
        <section>
          <h3>Citation Dashboard</h3>
          <div class="scholar-metrics">
            <div><strong>${state.citations}</strong><span>Citations</span></div>
            <div><strong>${hIndex()}</strong><span>h-index</span></div>
            <div><strong>${state.publications.length}</strong><span>Publications</span></div>
          </div>
          <div class="citation-histogram">${histogram}</div>
        </section>
        <section>
          <h3>Publications</h3>
          <ol>${publications}</ol>
        </section>
        <section>
          <h3>Prizes and Distinctions</h3>
          <ul>${distinctions}</ul>
        </section>
        <section>
          <h3>Profile</h3>
          <p>Academic standing: ${standingLabel()}. Career texture: ${experienceLabel()}.</p>
        </section>
      </div>
      <div class="actions"><button class="primary" id="closeCv">Close CV</button></div>
    </section>
  `;
  app.appendChild(overlay);
  document.getElementById("closeCv").addEventListener("click", () => overlay.remove());
}

function showMenuPanel() {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="menu-modal" role="dialog" aria-modal="true">
      <h2>Game Menu</h2>
      <div class="menu-actions">
        <button id="newGameButton">New game</button>
        <button id="saveGameButton" ${state.player ? "" : "disabled"}>Save game</button>
        <button id="loadGameButton">Load game</button>
        <button id="closeMenuButton" class="primary">Close</button>
      </div>
      <p class="hint">Save files are stored locally in this browser.</p>
    </section>
  `;
  app.appendChild(overlay);
  document.getElementById("closeMenuButton").addEventListener("click", () => overlay.remove());
  document.getElementById("newGameButton").addEventListener("click", () => {
    if (confirm("Start a new game? Unsaved progress will be lost.")) newGame();
  });
  document.getElementById("saveGameButton").addEventListener("click", () => {
    overlay.remove();
    saveGame();
  });
  document.getElementById("loadGameButton").addEventListener("click", () => {
    overlay.remove();
    loadGame();
  });
}

function generateTitle(subdomain) {
  const words = KEYWORDS[subdomain] || ["Models", "Frameworks", "Evidence", "Systems"];
  const a = rand(words);
  let b = rand(words);
  if (words.length > 1) {
    while (b === a) b = rand(words);
  }
  const method = rand(["Bayesian", "Geometric", "Experimental", "Computational", "Asymptotic", "Network", "Multiscale", "Causal"]);
  const object = rand(["Evidence", "Models", "Mechanisms", "Constraints", "Fluctuations", "Interfaces", "Dynamics", "Benchmarks"]);
  const claim = rand(["Hidden Regularities", "Unexpected Failures", "Robust Signatures", "Sharp Bounds", "Emergent Structure", "Fragile Universality"]);
  const patterns = [
    `${a} and ${b}: A Novel Approach to ${rand(words)}`,
    `On the Role of ${a} in ${rand(words)}`,
    `Revisiting ${a}: Implications for ${rand(words)}`,
    `${a} vs. ${b}: A Theoretical Battle`,
    `Why ${a} Matters in ${subdomain}`,
    `${method} ${object} for ${a} in ${subdomain}`,
    `The ${claim} of ${a}`,
    `When ${a} Fails: Lessons from ${b}`,
    `A Minimal Theory of ${a} and ${b}`,
    `From ${a} to ${b}: A Comparative Study`,
    `Measuring ${a} Without Believing the Hype`,
    `The Unreasonable Effectiveness of ${a} in ${subdomain}`,
    `Negative Results for ${a} with Consequences for ${b}`,
    `A Field Guide to ${a}, ${b}, and Reviewer Anxiety`,
    `Scaling Laws for ${a} Under Realistic Assumptions`,
    `What ${b} Reveals About ${a}`,
  ];
  return rand(patterns);
}

function journals() {
  return JOURNAL_TEMPLATES.map(([template, prestige, threshold]) => ({
    name: template.replace("{subdomain}", state.player.subdomain),
    prestige,
    threshold: threshold + Math.floor(Math.random() * 11) - 5,
    scope: journalScope(prestige, state.player.subdomain),
  }));
}

function journalScope(prestige, subdomain) {
  const scopes = {
    1: `A forgiving venue for early reports in ${subdomain}. The journal welcomes compact manuscripts, preliminary evidence, and ideas that are still learning how to stand upright.`,
    2: `A regional specialist outlet for modest but coherent contributions to ${subdomain}. The editors mainly want readable claims, recognizable methods, and no statistical pyrotechnics.`,
    3: `A practical journal for incremental work with clear examples and a competent discussion. Submissions in ${subdomain} should solve a small problem cleanly rather than announce a revolution.`,
    4: `A lively venue for emerging directions in ${subdomain}. The journal likes new angles, careful positioning, and papers that can survive ordinary skepticism without collapsing theatrically.`,
    5: `A solid transactions-style journal for mature technical work. Manuscripts need a convincing method, enough validation to calm the referees, and a contribution that specialists can reuse.`,
    6: `A selective international journal with a broad ${subdomain} readership. The paper must be polished, well contextualized, and strong enough that reviewers argue about importance rather than competence.`,
    7: `A prestigious forum for ambitious papers in ${subdomain}. It expects conceptual clarity, serious evidence, and a result that changes how a careful reader thinks about the field.`,
    8: `A high-stakes theoretical venue where even good papers look slightly underdressed. Successful submissions need elegance, technical depth, and a claim that travels beyond a narrow subcommunity.`,
    9: `An elite review-facing journal for work that looks inevitable after publication and impossible before it. The manuscript must feel field-defining, unusually complete, and broadly legible.`,
    10: `A nearly mythical outlet for landmark contributions to ${subdomain}. The journal is interested only in papers that redraw the map, annoy powerful people, and generate invited talks for years.`,
  };
  return scopes[prestige];
}

function journalFit(paper, journal) {
  const delta = paper.quality - journal.threshold;
  if (delta >= 35) {
    return {
      key: "overkill",
      label: "Overkill",
      hint: "Very safe, but the career payoff will be tiny.",
    };
  }
  if (delta >= 15) {
    return {
      key: "safe",
      label: "Safe",
      hint: "Likely to work, with modest career payoff.",
    };
  }
  if (delta >= -5) {
    return {
      key: "best",
      label: "Best fit",
      hint: "Balanced risk and reward.",
    };
  }
  if (delta >= -25) {
    return {
      key: "stretch",
      label: "Risky",
      hint: "Harder to publish, but valuable if it lands.",
    };
  }
  return {
    key: "highRisk",
    label: "High risk",
    hint: "Unlikely, but potentially career-making.",
  };
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

function review(paper, journal, final = false) {
  if (final) {
    return Math.random() < clamp(BASE_REVISION_ACCEPTANCE + state.revisionAcceptanceBonus, 0.05, 0.95)
      ? "accepted"
      : "rejected";
  }
  const fit = journalFit(paper, journal).key;
  const probabilities = {
    overkill: [["accepted", 0.9], ["revision", 0.05], ["rejected", 0.05]],
    safe: [["accepted", 0.72], ["revision", 0.18], ["rejected", 0.1]],
    best: [["accepted", 0.5], ["revision", 0.25], ["rejected", 0.25]],
    stretch: [["accepted", 0.2], ["revision", 0.3], ["rejected", 0.5]],
    highRisk: [["accepted", 0.04], ["revision", 0.13], ["rejected", 0.83]],
  };
  return weightedOutcome(probabilities[fit]);
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

function researchProgressIncrement(impactful) {
  return impactful ? Math.floor(9 + Math.random() * 9) : Math.floor(1 + Math.random() * 6);
}

function revisionProgressIncrement() {
  return Math.floor(16 + Math.random() * 9);
}

function nextResearchEvent() {
  const impactful = Math.random() >= ROUTINE_RESEARCH_PROBABILITY;
  if (!impactful) {
    return {
      text: rand(ROUTINE_RESEARCH_EVENTS),
      change: 0,
      progress: researchProgressIncrement(false),
      tone: "",
    };
  }
  const [text, change, tone] = rand(RESEARCH_EVENTS);
  return {
    text,
    change,
    progress: researchProgressIncrement(true),
    tone,
  };
}

function reputationFromScore(score) {
  return Math.max(0, Math.round(score / 10 + Math.random() * 8 - 4));
}

function citationsFromScore(score) {
  return Math.max(0, Math.round(score * (2.2 + Math.random() * 1.8)));
}

function colleagueRankFromScore(score) {
  if (score >= 850) return "Full Professor";
  if (score >= 260) return "Associate Professor";
  return "Assistant Professor";
}

function colleagueLabel(score) {
  if (score >= 2100) return oneOf(["unapproachable superstar", "field-shaping legend", "citation aristocrat"]);
  if (score >= 1500) return oneOf(["global authority", "conference royalty", "agenda-setting giant"]);
  if (score >= 1000) return oneOf(["big name", "elite keynote regular", "high-prestige operator"]);
  if (score >= 650) return oneOf(["cutting-edge", "fast-rising star", "very visible"]);
  if (score >= 390) return oneOf(["well connected", "solid specialist", "reliable senior voice"]);
  if (score >= 220) return oneOf(["promising", "up-and-coming", "ambitious networker"]);
  if (score >= 120) return oneOf(["quiet niche expert", "early-career hopeful", "under-cited technician"]);
  return oneOf(["unknown quantity", "fringe but energetic", "unproven collaborator"]);
}

function generateColleagues(includePlayer = false) {
  const playerScore = careerScore();
  const names = shuffled(ACADEMIC_NAMES);
  const colleagues = COLLEAGUE_SCORE_TIERS.map((target, index) => {
    const score = Math.max(20, Math.round(target + Math.random() * 40 - 20));
    const rank = colleagueRankFromScore(score);
    const reputation = reputationFromScore(score);
    const citations = citationsFromScore(score);
    return {
      id: `colleague-${index}-${score}`,
      name: names[index % names.length],
      institution: rand(INSTITUTIONS),
      field: `${rand(Object.keys(DOMAINS))}`,
      rank,
      reputation,
      experience: Math.max(1, Math.round(score / 42 + Math.random() * 5)),
      citations,
      vanityCount: Math.max(0, Math.min(VANITY.length, Math.round(score / 240))),
      score,
      label: colleagueLabel(score),
      friend: false,
      relationship: null,
    };
  });

  if (includePlayer) {
    colleagues.push({
      id: "player",
      name: state.player.name,
      institution: state.player.institution,
      field: state.player.domain,
      rank: state.player.rank,
      reputation: state.player.reputation,
      experience: state.player.experience,
      citations: state.citations,
      vanityCount: state.vanity.length,
      player: true,
    });
  }

  return colleagues
    .map((colleague) => ({
      ...colleague,
      score: colleague.player ? playerScore : colleague.score || colleagueScore(colleague),
    }))
    .sort((a, b) => b.score - a.score);
}

function yearlyColleagues() {
  if (!state.collaborationCandidates.length) {
    state.collaborationCandidates = generateColleagues(false);
  }
  return state.collaborationCandidates;
}

function showColleaguesModal() {
  const playerScore = careerScore();
  const colleagues = [
    ...yearlyColleagues(),
    {
      id: "player",
      name: state.player.name,
      institution: state.player.institution,
      field: state.player.domain,
      rank: state.player.rank,
      reputation: state.player.reputation,
      experience: state.player.experience,
      citations: state.citations,
      vanityCount: state.vanity.length,
      score: playerScore,
      player: true,
    },
  ].sort((a, b) => b.score - a.score);
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="colleague-modal" role="dialog" aria-modal="true">
      <div class="screen-head">
        <div>
          <h2>Colleague Comparison</h2>
          <p>The ordering reflects a hidden mix of visibility, experience, position, citations, and distinctions. Your own standing is not disclosed.</p>
        </div>
      </div>
      <div class="ranking-list">
        ${colleagues
          .map(
            (colleague, index) => `
              <div class="ranking-row ${colleague.player ? "player-row" : ""}">
                <strong>${index + 1}</strong>
                <div>
                  <h3>${colleague.name}${colleague.friend ? " · friend" : ""}</h3>
                  <p>${colleague.rank}, ${colleague.institution}</p>
                </div>
                <span>${colleague.player ? "Hidden" : colleague.label}</span>
                <em>${colleague.player ? "You" : "Colleague"}</em>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="actions"><button class="primary" id="closeColleagues">Close</button></div>
    </section>
  `;
  app.appendChild(overlay);
  document.getElementById("closeColleagues").addEventListener("click", () => overlay.remove());
}

function collaborationOffer(colleague) {
  const playerScore = careerScore();
  const gap = colleague.score - playerScore;
  const friendBonus = colleague.friend ? 0.35 : 0;
  const friendQuality = colleague.friend ? 3 : 0;

  if (gap < -60) {
    return {
      kind: "lower",
      chance: clamp(0.9 + friendBonus, 0, 0.98),
      bonus: 5 + friendQuality,
      malus: 1,
      acceptedSubject: "YES YES YES collaboration!",
      acceptedBody: oneOf([
        `Dear ${state.player.name},\n\nThis is incredible. I have already made a shared folder, a fourteen-tab spreadsheet, and a preliminary title with three colons. I told my department chair we are basically a lab now.\n\nI am so honored. I will send you many thoughts very soon.\n\nWith overwhelming enthusiasm,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nYes, absolutely yes. I have admired your work from what I would describe as a respectful distance. I can contribute notes, figures, and possibly a manifesto-style introduction.\n\nThis is going to be huge for us.\n\nExcitedly,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nI cannot believe you asked. I am available immediately and have already cancelled two meetings that probably mattered less.\n\nPlease send everything. I will over-comment with gratitude.\n\nWarmly,\n${colleague.name}`,
      ]),
      rejectedSubject: "Re: possible collaboration",
      rejectedBody: `Dear ${state.player.name},\n\nThank you so much for thinking of me. I am genuinely flattered, but I am already overcommitted and would not be able to contribute properly this year.\n\nI hope we find another occasion soon.\n\nBest,\n${colleague.name}`,
    };
  }

  if (Math.abs(gap) <= 60) {
    return {
      kind: "peer",
      chance: clamp(0.5 + friendBonus, 0, 0.95),
      bonus: 10 + friendQuality,
      malus: 0,
      acceptedSubject: "Re: possible collaboration",
      acceptedBody: oneOf([
        `Dear ${state.player.name},\n\nThank you for reaching out. I read your recent work with real interest, and I think our approaches could fit together nicely.\n\nLet us try a focused collaboration on your next paper. I can contribute a sharper framing, a few technical ideas, and the sort of calm confidence that makes reviewers briefly less hostile.\n\nBest,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nThis sounds promising. I have been circling similar questions, and a joint paper might be the cleanest way to make progress.\n\nLet us collaborate and keep the scope disciplined.\n\nBest,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nThanks for the invitation. The project looks like a good intellectual fit, and I think I can help strengthen the argument.\n\nCount me in.\n\nBest,\n${colleague.name}`,
      ]),
      rejectedSubject: "Re: possible collaboration",
      rejectedBody: oneOf([
        `Dear ${state.player.name},\n\nThank you for the invitation. The project sounds worthwhile, but my schedule is unusually tight this year, and I would rather decline than become the absent co-author everyone silently resents.\n\nBest,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nI appreciate you thinking of me. I am afraid I cannot take on another collaboration right now without doing it badly.\n\nI hope the paper goes well.\n\nBest,\n${colleague.name}`,
      ]),
    };
  }

  const veryHigh = gap > 220;
  return {
    kind: veryHigh ? "veryHigh" : "higher",
    chance: clamp((veryHigh ? 0.1 : 0.3) + friendBonus, 0, 0.9),
    bonus: (veryHigh ? 18 : 14) + friendQuality,
    malus: 0,
    acceptedSubject: "Re: possible collaboration",
    acceptedBody: oneOf([
      `Dear ${state.player.name},\n\nI can see why you thought of me. The project is not without promise, and with some careful guidance it may become publishable in a more serious venue.\n\nI am willing to collaborate, provided we keep the standards appropriately high.\n\nRegards,\n${colleague.name}`,
      `Dear ${state.player.name},\n\nYour proposal is rough, but interesting. I am willing to join if we substantially sharpen the central claim and avoid anything that looks provincial.\n\nLet us proceed carefully.\n\nRegards,\n${colleague.name}`,
      `Dear ${state.player.name},\n\nI do not usually take on projects at this stage, but there is something here. I can contribute if we are disciplined and ambitious about the target journal.\n\nRegards,\n${colleague.name}`,
    ]),
    rejectedSubject: "Re: possible collaboration",
    rejectedBody: oneOf([
      `Dear ${state.player.name},\n\nThank you for your message. I receive many such invitations, and I have to be selective about projects that substantially advance my current research program.\n\nI do not think this manuscript is the right fit.\n\nRegards,\n${colleague.name}`,
      `Dear ${state.player.name},\n\nI looked briefly at the outline. It seems better suited to a different collaborator, perhaps someone with more time for exploratory work.\n\nBest of luck,\n${colleague.name}`,
      `Dear ${state.player.name},\n\nAt this stage I cannot see a strong reason to attach my name to the project. I hope you find a suitable co-author.\n\nRegards,\n${colleague.name}`,
    ]),
  };
}

function contactCollaborationCandidate(colleague) {
  state.collaborationAttempts.add(colleague.id);
  const offer = collaborationOffer(colleague);
  const accepted = Math.random() < offer.chance;

  if (accepted) {
    state.collaborationBonus += offer.bonus;
    state.collaborationName = colleague.name;
    colleague.relationship = colleague.friend ? "friend" : "current collaborator";
    if (offer.malus) {
      state.player.reputation = Math.max(0, state.player.reputation - offer.malus);
    }
    state.yearSummary.allocations.push({
      category: "Collaboration",
      label: colleague.name,
      cost: 0,
      quality: offer.bonus,
    });
    showEmailModal({
      from: `${colleague.name} <collaboration@university.example>`,
      subject: colleague.friend ? "Of course, let us do this" : offer.acceptedSubject,
      body: colleague.friend
        ? `Dear ${state.player.name},\n\nOf course. It was good to talk at the congress, and I would be very happy to build something together this year.\n\nSend me the draft when you can. I will read it properly, not the ceremonial kind of properly.\n\nWarmly,\n${colleague.name}`
        : offer.acceptedBody,
      onContinue: () => {
        log(`${colleague.name} joins the project. The draft suddenly has better posture.`, "good");
        renderResearchStart();
      },
    });
    return;
  }

  colleague.relationship = offer.kind === "higher" || offer.kind === "veryHigh"
    ? "Previously declined coldly."
    : "Ignored your email once.";

  showEmailModal({
    from: `${colleague.name} <collaboration@university.example>`,
    subject: colleague.friend ? "Re: collaboration this year" : offer.rejectedSubject,
    body: colleague.friend
      ? `Dear ${state.player.name},\n\nI am genuinely sorry, but this semester has become administratively haunted. I cannot join the project without becoming useless to you.\n\nPlease do ask again another time. I would like us to find the right occasion.\n\nWarmly,\n${colleague.name}`
      : offer.rejectedBody,
    onContinue: () => {
      log(`${colleague.name} declines the collaboration.`, "warn");
      renderCollaboration();
    },
  });
}

function warnOverenthusiasticCollaborator(colleague) {
  showEmailModal({
    from: "Your Inner Career Strategist <do-not-ignore@self.example>",
    subject: "Are you sure about this collaborator?",
    body: `Dear ${state.player.name},\n\nThis collaborator looks substantially less established than you. They are very likely to accept and can still improve the paper, but the association may look a little desperate and cost you reputation.\n\nProceed if you want the quality boost. Reconsider if prestige matters more this year.`,
    onContinue: () => contactCollaborationCandidate(colleague),
    secondary: {
      label: "Reconsider",
      onClick: renderCollaboration,
    },
  });
}

function renderEventList(events, emptyText = "No entries yet.") {
  if (!events.length) return `<p class="empty">${emptyText}</p>`;
  return `
    <div class="central-log">
      ${[...events]
        .reverse()
        .map(
          (event) => `
            <div class="central-log-item ${event.tone || ""}">
              <span>${event.text}</span>
              <strong>
                ${event.progress ? `+${event.progress}%` : ""}
                ${event.change === 0 ? "" : eventImpactLabel(event.change)}
              </strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function shell(content) {
  const player = state.player;
  const stats = player
    ? [
        ["Name", player.name],
        ["Rank", player.rank],
        ["Institution", player.institution],
        ["Field", `${player.domain} / ${player.subdomain}`],
        ["Year", `${state.year} / ${state.yearLimit}`],
        ["Standing", standingLabel()],
        ["Experience", experienceLabel()],
        ["Funds", `$${state.funds}`],
        ["Citations", state.citations],
      ]
    : [];

  app.innerHTML = `
    <div class="game-layout">
      <aside class="sidebar">
        <div class="brand">
          <svg class="crest" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 5 56 16v17c0 14-9 23-24 26C17 56 8 47 8 33V16L32 5Z" fill="#2f6f73"/>
            <path d="M20 25h24v5H20zM24 34h16v5H24z" fill="#fff"/>
            <circle cx="32" cy="18" r="4" fill="#f5d56e"/>
          </svg>
          <div>
            <h1>Sim Academia 3000</h1>
            <div class="build">${BUILD}</div>
          </div>
        </div>
        <button id="menuButton" class="sidebar-action">Menu</button>
        ${stats.length ? `<div class="stat-list">
          ${stats.map(([k, v]) => `<div class="stat"><span>${k}</span><strong>${v}</strong></div>`).join("")}
        </div>` : ""}
        ${
          player
            ? `<button id="seeCv" class="sidebar-action">See my CV</button>
              `
            : ""
        }
      </aside>
      <section class="workbench">${content}</section>
      <aside class="rightbar">
        <div class="panel">
          <h3>Dashboard Notes</h3>
          <div class="log-list">
            ${
              state.log.length
                ? state.log.map((item) => `<div class="log-item ${item.tone}">${item.message}</div>`).join("")
                : `<p class="empty">No academic disasters yet.</p>`
            }
          </div>
        </div>
      </aside>
    </div>
  `;

  const cvButton = document.getElementById("seeCv");
  if (cvButton) cvButton.addEventListener("click", showCvModal);
  const menuButton = document.getElementById("menuButton");
  if (menuButton) menuButton.addEventListener("click", showMenuPanel);
}

function renderProfile() {
  const domainOptions = Object.keys(DOMAINS);
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Profile</span>
          <h2>Researcher Profile</h2>
          <p>Set up the scholar who will brave grants, reviews, citations, and suspiciously expensive conferences.</p>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-field">
          <label>Name</label>
          <input id="name" value="${rand(ACADEMIC_NAMES)}" />
        </div>
        <div class="form-field">
          <label>Institution</label>
          <input id="institution" value="${rand(INSTITUTIONS)}" />
        </div>
        <div class="form-field">
          <label>Domain</label>
          <select id="domain">${domainOptions.map((d) => `<option>${d}</option>`).join("")}</select>
        </div>
        <div class="form-field">
          <label>Subdomain</label>
          <select id="subdomain"></select>
        </div>
      </div>
      <div class="actions">
        <button id="randomName">Random name</button>
        <button id="randomInstitution">Random institution</button>
        <button id="startCareer" class="primary">Start Career</button>
      </div>
    </div>
  `);

  const domain = document.getElementById("domain");
  const subdomain = document.getElementById("subdomain");
  const syncSubdomains = () => {
    subdomain.innerHTML = DOMAINS[domain.value].map((d) => `<option>${d}</option>`).join("");
  };
  domain.addEventListener("change", syncSubdomains);
  syncSubdomains();
  document.getElementById("randomName").addEventListener("click", () => {
    document.getElementById("name").value = rand(ACADEMIC_NAMES);
  });
  document.getElementById("randomInstitution").addEventListener("click", () => {
    document.getElementById("institution").value = rand(INSTITUTIONS);
  });
  document.getElementById("startCareer").addEventListener("click", () => {
    state.player = {
      name: document.getElementById("name").value.trim() || "Dr. Unknown",
      institution: document.getElementById("institution").value.trim() || "Generic University",
      domain: domain.value,
      subdomain: subdomain.value,
      reputation: 0,
      experience: 1,
      rank: "Assistant Professor",
    };
    state.collaborationCandidates = generateColleagues(false);
    startYearSummary();
    state.phase = "Funding";
    log(`${state.player.name} begins at ${state.player.institution}.`, "good");
    beginYear();
  });
}

function renderFunding() {
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Funding</span>
          <h2>Funding Opportunities</h2>
          <p>Apply until someone says yes, or skip and begin with whatever dignity remains.</p>
        </div>
        <button id="skipFunding">Skip funding</button>
      </div>
      <div class="grid">
        ${FUNDERS.map((funder, index) => {
          const used = state.usedFunders.has(index);
          return `
            <article class="choice">
              <h3>${funder.name}</h3>
              <div class="choice-meta"><span>Typical award: ${grantBand(funder)}</span></div>
              <button data-funder="${index}" ${used ? "disabled" : ""}>${used ? "Rejected" : "Apply"}</button>
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `);

  document.getElementById("skipFunding").addEventListener("click", () => {
    log("You skip funding and proceed to allocation.", "warn");
    startAllocation();
  });

  document.querySelectorAll("[data-funder]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.funder);
      const funder = FUNDERS[index];
      const chance = reputationAdjustedChance(funder.chance);
      const accepted = Math.random() < chance;
      if (accepted) {
        const grant = randomGrant(funder);
        state.funds += grant;
        state.yearSummary.funding = {
          funder: funder.name,
          amount: grant,
          outcome: "accepted",
        };
        showEmailModal({
          from: `${funder.name} <decisions@funding-board.example>`,
          subject: "Decision on your grant application",
          body: fundingEmail(funder, grant, true),
          onContinue: startAllocation,
        });
      } else {
        state.usedFunders.add(index);
        state.yearSummary.funding = {
          funder: funder.name,
          amount: 0,
          outcome: "rejected",
        };
        showEmailModal({
          from: `${funder.name} <decisions@funding-board.example>`,
          subject: "Decision on your grant application",
          body: fundingEmail(funder, 0, false),
          onContinue: renderFunding,
        });
      }
    });
  });
}

function beginYear() {
  const promotion = eligiblePromotion();
  if (promotion) {
    renderPromotionOffer(promotion);
  } else {
    renderFunding();
  }
}

function renderPromotionOffer(promotion) {
  state.pendingPromotion = promotion;
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Career Review</span>
          <h2>Promotion Eligibility</h2>
          <p>Your file has crossed the invisible threshold at which administrators begin using your name in future-tense sentences. You may apply for promotion to ${promotion.rank}.</p>
        </div>
      </div>
      <div class="panel">
        <h3>Promotion dossier</h3>
        <p>The committee will review your publications, reputation, external recognition, and the intangible aura of scholarly inevitability. The odds are not disclosed.</p>
      </div>
      <div class="actions">
        <button id="applyPromotion" class="primary">Apply for ${promotion.rank}</button>
        <button id="skipPromotion">Not this year</button>
      </div>
    </div>
  `);
  document.getElementById("applyPromotion").addEventListener("click", applyForPromotion);
  document.getElementById("skipPromotion").addEventListener("click", renderFunding);
}

function applyForPromotion() {
  const promotion = state.pendingPromotion;
  const accepted = Math.random() < promotionChance(promotion);
  if (accepted) {
    state.player.rank = promotion.rank;
    state.promotionHistory.push({ rank: promotion.rank, year: state.year });
    showEmailModal({
      from: "Faculty Promotions Committee <appointments@university.example>",
      subject: "Outcome of your promotion application",
      body: `Dear ${state.player.name},\n\nThe committee is pleased to inform you that your application for promotion to ${promotion.rank} has been successful.\n\nYour scholarly record, external visibility, and evident capacity to keep graduate students productively anxious were viewed favorably. The promotion takes effect immediately.\n\nSincerely,\nThe Faculty Promotions Committee`,
      onContinue: renderFunding,
    });
  } else {
    showEmailModal({
      from: "Faculty Promotions Committee <appointments@university.example>",
      subject: "Outcome of your promotion application",
      body: `Dear ${state.player.name},\n\nThe committee has reviewed your application for promotion to ${promotion.rank}. After careful deliberation, we regret to inform you that the application was not successful this year.\n\nThe committee encourages you to strengthen the dossier through further publications, grants, and external recognition before reapplying.\n\nSincerely,\nThe Faculty Promotions Committee`,
      onContinue: renderFunding,
    });
  }
}

function startAllocation() {
  state.phase = "Allocation";
  state.allocationIndex = 0;
  state.allocationBonus = 0;
  state.collaborationBonus = 0;
  state.collaborationAttempts = new Set();
  renderAllocation();
}

function renderAllocation() {
  const item = ALLOCATIONS[state.allocationIndex];
  if (!item) {
    log(`Allocation complete. Research support feels ${investmentLabel(state.allocationBonus)}.`, "good");
    renderCollaboration();
    return;
  }

  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Allocation</span>
          <h2>${item.category}</h2>
          <p>Available funds: $${state.funds}. Choose one option for this category.</p>
        </div>
      </div>
      <div class="table-wrap">
      <table class="allocation-table">
        <thead><tr><th>Option</th><th>Cost</th><th>Research lift</th><th></th></tr></thead>
        <tbody>
          ${item.options
            .map(
              ([label, cost, quality], index) => `
                <tr>
                  <td>${label}</td><td>$${cost}</td><td>${investmentLabel(quality)}</td>
                  <td><button data-option="${index}" ${cost > state.funds ? "disabled" : ""}>Choose</button></td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      </div>
    </div>
  `);

  document.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const [label, cost, quality] = item.options[Number(button.dataset.option)];
      state.funds -= cost;
      state.allocationBonus += quality;
      state.allocationIndex += 1;
      state.yearSummary.allocations.push({
        category: item.category,
        label,
        cost,
        quality,
      });
      log(`${item.category}: ${label}. ${cost ? `Funds -$${cost}.` : "No funds spent."} Research lift: ${investmentLabel(quality)}.`);
      renderAllocation();
    });
  });
}

function renderCollaboration() {
  state.phase = "Collaboration";
  const colleagues = yearlyColleagues();
  const allContacted = colleagues.every((colleague) => state.collaborationAttempts.has(colleague.id));
  const relationshipLabel = (colleague) => {
    if (colleague.friend) return "friend";
    return colleague.relationship || "no prior drama";
  };

  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Allocation</span>
          <h2>Collaboration</h2>
          <p>Choose one colleague to contact. You can see their academic aura, but your own standing remains obscure.</p>
        </div>
        <button id="skipCollaboration">${allContacted ? "Begin research" : "Proceed without collaboration"}</button>
      </div>
      <div class="ranking-list">
        ${colleagues
          .map(
            (colleague, index) => `
              <div class="ranking-row">
                <strong>${index + 1}</strong>
                <div>
                  <h3>${colleague.name}</h3>
                  <p>${colleague.rank}, ${colleague.institution}</p>
                  <p class="relationship-note">${relationshipLabel(colleague)}</p>
                </div>
                <span>${colleague.label}</span>
                <button data-collaboration="${colleague.id}" ${
                  state.collaborationAttempts.has(colleague.id) ? "disabled" : ""
                }>${state.collaborationAttempts.has(colleague.id) ? "Contacted" : "Contact them"}</button>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `);

  document.getElementById("skipCollaboration").addEventListener("click", () => {
    state.yearSummary.allocations.push({
      category: "Collaboration",
      label: "No collaboration",
      cost: 0,
      quality: 0,
    });
    renderResearchStart();
  });

  document.querySelectorAll("[data-collaboration]").forEach((button) => {
    button.addEventListener("click", () => {
      const colleague = colleagues.find((item) => item.id === button.dataset.collaboration);
      if (!colleague) return;
      if (collaborationOffer(colleague).kind === "lower") {
        warnOverenthusiasticCollaborator(colleague);
        return;
      }
      contactCollaborationCandidate(colleague);
    });
  });
}

function renderResearchStart() {
  state.phase = "Research";
  const novelty = Math.random();
  const volatility = Math.random() * 36 - 18;
  const collaborationBonus = state.collaborationBonus;
  const collaborationName = state.collaborationName;
  state.collaborationBonus = 0;
  state.collaborationName = null;
  const baseQuality =
    58 + experienceQualityBonus() + 24 * novelty + volatility + rankQualityBonus() + collaborationBonus;
  state.currentPaper = {
    title: generateTitle(state.player.subdomain),
    quality: Math.round(baseQuality + state.allocationBonus),
    progress: 0,
    year: state.year,
    citations: 0,
    journal: null,
    fit: null,
    collaborationBonus,
    collaborator: collaborationName,
  };
  state.yearSummary.paper = state.currentPaper;
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Research</span>
          <h2>New Draft</h2>
          <p class="paper-title">${state.currentPaper.title}</p>
          <p>Current draft condition: ${qualityLabel(state.currentPaper.quality)}${
            collaborationName ? `, strengthened by ${collaborationName}` : ""
          }.</p>
        </div>
        <button id="continueResearch" class="primary research-action">Continue research</button>
      </div>
      ${renderProgressBar(state.currentPaper.progress)}
      ${renderEventList(state.yearSummary.researchEvents, "Research has not started yet.")}
    </div>
  `);
  document.getElementById("continueResearch").addEventListener("click", continueResearch);
}

function continueResearch() {
  if (state.currentPaper.progress >= 100) {
    renderSubmit();
    return;
  }

  const event = nextResearchEvent();
  const remaining = 100 - state.currentPaper.progress;
  event.progress = Math.min(event.progress, remaining);
  state.currentPaper.progress += event.progress;
  state.currentPaper.quality = Math.max(0, state.currentPaper.quality + event.change);
  state.yearSummary.researchEvents.push(event);
  renderResearchProgress();
}

function renderProgressBar(progress, label = "Research progress") {
  return `
    <div class="research-meter" aria-label="${label}">
      <div class="research-meter-label"><span>${label}</span><strong>${progress}%</strong></div>
      <div class="research-meter-track"><div class="research-meter-fill" style="width: ${progress}%"></div></div>
    </div>
  `;
}

function renderResearchProgress() {
  const complete = state.currentPaper.progress >= 100;
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Research</span>
          <h2>Research Log</h2>
          <p class="paper-title">${state.currentPaper.title}</p>
          <p>Draft condition: ${qualityLabel(state.currentPaper.quality)}. Events so far: ${state.yearSummary.researchEvents.length}.</p>
        </div>
        <button id="continueResearch" class="primary research-action">${complete ? "Finish research" : "Continue research"}</button>
      </div>
      ${renderProgressBar(state.currentPaper.progress)}
      ${renderEventList(state.yearSummary.researchEvents)}
    </div>
  `);
  document.getElementById("continueResearch").addEventListener("click", continueResearch);
}

function renderSubmit() {
  state.phase = "Submit";
  const list = journals();
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Submission</span>
          <h2>Select a Journal</h2>
          <p class="paper-title">${state.currentPaper.title}</p>
          <p>Draft condition: ${qualityLabel(state.currentPaper.quality)}.</p>
        </div>
      </div>
      <div class="table-wrap">
      <table class="journal-table">
        <thead><tr><th>Journal</th><th>Fit</th><th></th></tr></thead>
        <tbody>
          ${list
            .map((journal, index) => {
              const fit = journalFit(state.currentPaper, journal);
              return `<tr>
                <td><button class="link-button" data-journal-info="${index}">${journal.name}</button></td>
                <td><span class="fit fit-${fit.key}">${fit.label}</span><div class="fit-hint">${fit.hint}</div></td>
                <td><button data-journal="${index}">Submit</button></td>
              </tr>`;
            })
            .join("")}
        </tbody>
      </table>
      </div>
    </div>
  `);

  document.querySelectorAll("[data-journal-info]").forEach((button) => {
    button.addEventListener("click", () => {
      const journal = list[Number(button.dataset.journalInfo)];
      showJournalInfo(journal);
    });
  });

  document.querySelectorAll("[data-journal]").forEach((button) => {
    button.addEventListener("click", () => {
      const journal = list[Number(button.dataset.journal)];
      const fit = journalFit(state.currentPaper, journal);
      state.selectedJournal = journal;
      state.currentPaper.fit = fit.key;
      if (fit.key === "overkill") {
        showLowAimWarning(fit, () => decideSubmission(false));
        return;
      }
      decideSubmission(false);
    });
  });
}

function showLowAimWarning(fit, onContinue) {
  showEmailModal({
    from: "Your Inner Career Strategist <do-not-ignore@self.example>",
    subject: "Are you sure about this journal choice?",
    body: `Dear ${state.player.name},\n\nThis journal looks substantially below the level of the paper. It is likely to accept the manuscript, but the professional payoff will be very small: little reputation, little experience, and few citations.\n\nIf you want a quiet line on the CV, proceed. If you want the paper to matter, consider aiming higher.\n\nCurrent assessment: ${fit.label}.`,
    onContinue,
    secondary: {
      label: "Choose another journal",
      onClick: renderSubmit,
    },
  });
}

function showJournalInfo(journal) {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="journal-modal" role="dialog" aria-modal="true">
      <h2>${journal.name}</h2>
      <div class="journal-meta">${journalTemperament(journal)}</div>
      <h3>Aims and Scope</h3>
      <p>${journal.scope}</p>
      <div class="actions"><button class="primary" id="closeJournalInfo">Close</button></div>
    </section>
  `;
  app.appendChild(overlay);
  document.getElementById("closeJournalInfo").addEventListener("click", () => overlay.remove());
}

function journalEmail(result, final = false) {
  const greeting = `Dear ${state.player.name},`;
  const paper = `Manuscript: "${state.currentPaper.title}"`;
  if (result === "revision") {
    return oneOf([
      `${greeting}\n\nThank you for submitting your manuscript to ${state.selectedJournal.name}.\n\n${paper}\n\nAfter consultation with the reviewers, I am pleased to report that the manuscript remains under active consideration. However, substantial revisions are required before a final decision can be made. Please address the reviewers' concerns carefully and submit a revised version.\n\nSincerely,\nThe Editor`,
      `${greeting}\n\nWe have now received the referee reports for your submission to ${state.selectedJournal.name}.\n\n${paper}\n\nThe reviewers see promise in the manuscript, but they also request clarification, additional analysis, and a more confident account of why the paper exists. I invite you to submit a revised version.\n\nSincerely,\nThe Handling Editor`,
      `${greeting}\n\nYour manuscript has completed its first round of review at ${state.selectedJournal.name}.\n\n${paper}\n\nThe decision is major revision. The paper is not yet publishable, but the reports suggest that a careful response could move it into acceptable territory.\n\nRegards,\nThe Editorial Office`,
    ]);
  }
  if (result === "accepted") {
    return oneOf([
      `${greeting}\n\nI am delighted to inform you that your ${final ? "revised " : ""}manuscript has been accepted for publication in ${state.selectedJournal.name}.\n\n${paper}\n\nThe reviewers found the contribution persuasive, and the editorial office looks forward to seeing the work enter the scholarly record.\n\nSincerely,\nThe Editor`,
      `${greeting}\n\nI am pleased to accept your ${final ? "revised " : ""}submission to ${state.selectedJournal.name}.\n\n${paper}\n\nThe manuscript has improved into a clear and publishable contribution. Please expect production queries, proofs, and a suspiciously urgent copyright form.\n\nBest regards,\nThe Handling Editor`,
      `${greeting}\n\nCongratulations. Your ${final ? "revised " : ""}manuscript has been accepted by ${state.selectedJournal.name}.\n\n${paper}\n\nThe editorial team believes the paper will interest our readers and gently irritate your competitors.\n\nSincerely,\nThe Editor`,
    ]);
  }
  return oneOf([
    `${greeting}\n\nThank you for submitting your ${final ? "revised " : ""}manuscript to ${state.selectedJournal.name}.\n\n${paper}\n\nAfter careful consideration, I regret to inform you that we are unable to accept the manuscript for publication. The reviewers raised concerns that cannot be resolved within the scope of the current submission.\n\nSincerely,\nThe Editor`,
    `${greeting}\n\nWe have completed evaluation of your ${final ? "revised " : ""}manuscript at ${state.selectedJournal.name}.\n\n${paper}\n\nUnfortunately, the reports do not support publication. The reviewers were not convinced that the contribution is sufficiently robust for the journal.\n\nRegards,\nThe Editorial Office`,
    `${greeting}\n\nThank you for giving ${state.selectedJournal.name} the opportunity to consider your work.\n\n${paper}\n\nI am sorry to say that we must decline the manuscript. The decision was not made lightly, though reviewer three appears to have enjoyed making it loudly.\n\nSincerely,\nThe Editor`,
  ]);
}

function decideSubmission(final) {
  const fit = state.currentPaper.fit || journalFit(state.currentPaper, state.selectedJournal).key;
  state.currentPaper.fit = fit;
  const result = review(state.currentPaper, state.selectedJournal, final);
  if (result === "revision") {
    state.revisionProgress = 0;
    state.revisionAcceptanceBonus = 0;
    state.revisionSupports = new Set();
    state.yearSummary.journal = state.selectedJournal.name;
    state.yearSummary.outcome = "Major revision requested";
    showEmailModal({
      from: `${state.selectedJournal.name} <editorial-office@journal.example>`,
      subject: "Decision on your manuscript",
      body: journalEmail(result, final),
      onContinue: renderRevision,
    });
    return;
  }

  if (result === "accepted") {
    const reward = rewardProfile(fit, state.selectedJournal.prestige);
    publishPaper();
    state.player.experience += reward.experience;
    state.player.reputation += reward.reputation;
    state.yearSummary.outcome = "Accepted";
  } else {
    state.player.experience += 1;
    state.player.reputation = Math.max(0, state.player.reputation - 2);
    state.yearSummary.outcome = "Rejected";
    state.rejectionHistory.push({
      year: state.year,
      title: state.currentPaper.title,
      journal: state.selectedJournal.name,
      prestige: state.selectedJournal.prestige,
      final,
    });
  }
  state.yearSummary.journal = state.selectedJournal.name;
  showEmailModal({
    from: `${state.selectedJournal.name} <editorial-office@journal.example>`,
    subject: final ? "Final decision on your revised manuscript" : "Decision on your manuscript",
    body: journalEmail(result, final),
    onContinue: () => renderDecision(result),
  });
}

function renderRevision() {
  state.phase = "Revision";
  const complete = state.revisionProgress >= 100;
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Revision</span>
          <h2>Major Revision</h2>
          <p class="paper-title">${state.currentPaper.title}</p>
          <p>Draft condition: ${qualityLabel(state.currentPaper.quality)}. Editorial confidence is ${state.revisionAcceptanceBonus > 0.2 ? "notably improved" : state.revisionAcceptanceBonus > 0 ? "slightly improved" : "uncomfortably dependent on prose"}.</p>
        </div>
        <button id="continueRevision" class="primary research-action">${complete ? "Submit revision" : "Work on revision"}</button>
      </div>
      ${renderProgressBar(state.revisionProgress, "Revision progress")}
      <div class="revision-supports">
        ${REVISION_SUPPORTS.map((support) => {
          const used = state.revisionSupports.has(support.key);
          return `<article class="choice">
            <h3>${support.label}</h3>
            <p>${support.note}</p>
            <div class="choice-meta"><span>$${support.cost}</span><span>${supportImpactLabel(support)}</span></div>
            <button data-revision-support="${support.key}" ${used || state.funds < support.cost ? "disabled" : ""}>${
              used ? "Paid" : "Pay"
            }</button>
          </article>`;
        }).join("")}
      </div>
      ${renderEventList(state.yearSummary.revisionEvents, "Revision work has not started yet.")}
    </div>
  `);
  document.getElementById("continueRevision").addEventListener("click", continueRevision);
  document.querySelectorAll("[data-revision-support]").forEach((button) => {
    button.addEventListener("click", () => {
      const support = REVISION_SUPPORTS.find((item) => item.key === button.dataset.revisionSupport);
      if (!support || state.revisionSupports.has(support.key) || state.funds < support.cost) return;
      state.funds -= support.cost;
      state.revisionSupports.add(support.key);
      state.revisionAcceptanceBonus += support.bonus;
      state.currentPaper.quality = Math.max(0, state.currentPaper.quality + support.quality);
      log(`${support.label}: funds -$${support.cost}. Revision odds improve.`, "good");
      renderRevision();
    });
  });
}

function continueRevision() {
  if (state.revisionProgress >= 100) {
    decideSubmission(true);
    return;
  }

  const [text, change, tone] = rand(REVISION_EVENTS);
  const progress = Math.min(revisionProgressIncrement(), 100 - state.revisionProgress);
  state.revisionProgress += progress;
  state.currentPaper.quality = Math.max(0, state.currentPaper.quality + change);
  state.yearSummary.revisionEvents.push({ text, change, progress, tone });
  renderRevision();
}

function createCitationProfile(paper, journal, reward) {
  const prestigeLift = 0.75 + journal.prestige * 0.12;
  const qualityLift = Math.max(0.4, paper.quality / 120);
  const baseImpact = Math.max(1, (4 + journal.prestige * 1.8 + qualityLift * 4) * reward.citationMultiplier * prestigeLift);
  const roll = Math.random();

  if (roll < 0.04) {
    return {
      type: "snowball",
      age: 0,
      base: Math.max(1, Math.round(baseImpact * (0.45 + Math.random() * 0.35))),
      growth: 1.08 + Math.random() * 0.08,
      volatility: 0.55,
    };
  }

  if (roll < 0.22) {
    return {
      type: "sporadic",
      age: 0,
      base: Math.max(1, Math.round(baseImpact * (0.15 + Math.random() * 0.25))),
      chance: clamp(0.2 + journal.prestige * 0.045, 0.2, 0.72),
      burst: Math.max(1, Math.round(journal.prestige / 2)),
      volatility: 1.1,
    };
  }

  return {
    type: "wave",
    age: 0,
    base: Math.max(1, Math.round(baseImpact * (0.45 + Math.random() * 0.35))),
    peakYear: 5 + Math.floor(Math.random() * 6),
    decay: 4 + Math.random() * 5 + journal.prestige * 0.25,
    volatility: 0.7,
  };
}

function volatileRound(value, volatility) {
  const jitter = 1 - volatility / 2 + Math.random() * volatility;
  return Math.max(0, Math.round(value * jitter));
}

function annualCitations(paper) {
  const profile = paper.citationProfile;
  if (!profile) return 0;
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

function publishPaper() {
  const paper = state.currentPaper;
  const reward = rewardProfile(paper.fit || "best", state.selectedJournal.prestige);
  const metadata = publicationMetadata(state.selectedJournal.prestige);
  paper.journal = state.selectedJournal.name;
  paper.journalPrestige = state.selectedJournal.prestige;
  paper.authors = paperAuthors(paper.collaborator);
  paper.volume = metadata.volume;
  paper.issue = metadata.issue;
  paper.pages = metadata.pages;
  paper.citationProfile = createCitationProfile(paper, state.selectedJournal, reward);
  state.publications.push(paper);
}

function renderDecision(result) {
  state.phase = "Decision";
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Decision</span>
          <h2>${result === "accepted" ? "Accepted" : "Rejected"}</h2>
          <p class="paper-title">${state.currentPaper.title}</p>
          <p>${result === "accepted" ? "The CV grows heavier." : "The manuscript returns to haunt your desk drawer."}</p>
        </div>
      </div>
      <div class="actions">
        <button id="yearEnd" class="primary">End year</button>
      </div>
    </div>
  `);
  document.getElementById("yearEnd").addEventListener("click", endYear);
}

function endYear() {
  state.yearSummary.citationEvents = [];
  let yearlyCitations = 0;
  for (const paper of state.publications) {
    const newCitations = annualCitations(paper);
    if (newCitations > 0) {
      const boostedCitations = state.citationBoostYears > 0 ? Math.round(newCitations * (1 + state.citationBoost)) : newCitations;
      paper.citations += boostedCitations;
      state.citations += boostedCitations;
      yearlyCitations += boostedCitations;
      state.yearSummary.citationEvents.push({
        title: paper.title,
        citations: boostedCitations,
      });
    }
  }
  if (state.citationBoostYears > 0) state.citationBoostYears -= 1;
  if (state.fundingBoostYears > 0) state.fundingBoostYears -= 1;
  state.citationHistory.push({ year: state.year, citations: yearlyCitations });
  renderYearSummary();
}

function yearPerformanceScore(summary) {
  const citationTotal = summary.citationEvents.reduce((sum, item) => sum + item.citations, 0);
  let score = 0;
  if (summary.outcome === "Accepted") score += 4;
  if (summary.outcome === "Major revision requested") score += 1;
  if (summary.outcome === "Rejected") score -= 2;
  if (summary.funding?.outcome === "Accepted") score += summary.funding.amount > 10000 ? 3 : 1;
  if (citationTotal >= 120) score += 4;
  else if (citationTotal >= 40) score += 2;
  else if (citationTotal >= 8) score += 1;
  if (state.promotionHistory.some((item) => item.year === state.year)) score += 4;
  return score;
}

function deansComment(score) {
  if (score <= 0) return "The department appreciates your continued presence.";
  if (score <= 4) return "The chair mentions your paper twice in a meeting.";
  return "You are suddenly invited to too many panels.";
}

function careerMomentum(score) {
  const recentCitations = state.citationHistory.slice(-3).reduce((sum, item) => sum + item.citations, 0);
  const momentum = score + Math.min(6, Math.floor(recentCitations / 60)) + (state.player.rank === "Full Professor" ? 2 : 0);
  if (momentum >= 9) return "dangerously visible";
  if (momentum >= 5) return "visible";
  if (momentum >= 2) return "building";
  return "stagnant";
}

function renderYearSummary() {
  state.phase = "Annual Summary";
  const summary = state.yearSummary;
  const paper = summary.paper;
  const performanceScore = yearPerformanceScore(summary);
  const fundingText = summary.funding
    ? `${summary.funding.funder}: ${summary.funding.outcome}${summary.funding.amount ? `, $${summary.funding.amount}` : ""}`
    : "No grant awarded";
  const citations = summary.citationEvents.length
    ? summary.citationEvents
        .map((item) => `<li><em>${item.title}</em>: +${item.citations} citations</li>`)
        .join("")
    : `<li>No new citations this year.</li>`;

  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.year}: Annual Summary</span>
          <h2>Annual Report</h2>
        </div>
        <button id="nextYear">${state.year >= state.yearLimit ? "Finish career" : "Next year"}</button>
      </div>
      <div class="summary-grid">
        <section class="summary-card">
          <h3>Project</h3>
          <p class="paper-title">${paper ? paper.title : "No paper"}</p>
          <p><strong>Outcome:</strong> ${summary.outcome}</p>
          <p><strong>Journal:</strong> ${summary.journal || "None"}</p>
          <p><strong>Funding:</strong> ${fundingText}</p>
        </section>
        <section class="summary-card new-citations-card">
          <h3>New Citations</h3>
          <ul>${citations}</ul>
          <p><strong>Total citations:</strong> ${state.citations}</p>
        </section>
        <section class="summary-card">
          <h3>Dean's Note</h3>
          <p>${deansComment(performanceScore)}</p>
          <p><strong>Career momentum:</strong> ${careerMomentum(performanceScore)}</p>
        </section>
      </div>
      <h3>Distinctions</h3>
      <p class="hint">Distinctions unlock in order once your citations are high enough. They cost funds, but citations are never spent.</p>
      <div class="grid">
        ${VANITY.map((vanity, index) => {
          const owned = state.vanity.includes(vanity.item);
          const previousOwned = index === 0 || state.vanity.includes(VANITY[index - 1].item);
          const eligible = previousOwned && state.citations >= vanity.citations && state.funds >= vanity.funds;
          const label = owned ? "Owned" : previousOwned ? "Acquire" : "Locked";
          return `<article class="choice">
            <h3>${vanity.item}</h3>
            <div class="choice-meta"><span>${vanity.citations} citations</span><span>$${vanity.funds}</span></div>
            <button data-vanity="${index}" ${owned || !eligible ? "disabled" : ""}>${label}</button>
          </article>`;
        }).join("")}
      </div>
    </div>
  `);
  document.getElementById("nextYear").addEventListener("click", continueAfterAnnualReport);
  document.querySelectorAll("[data-vanity]").forEach((button) => {
    button.addEventListener("click", () => {
      const vanity = VANITY[Number(button.dataset.vanity)];
      state.funds -= vanity.funds;
      state.vanity.push(vanity.item);
      log(`Acquired distinction: ${vanity.item}. Funds -$${vanity.funds}.`, "good");
      renderYearSummary();
    });
  });
}

function continueAfterAnnualReport() {
  if (state.year >= state.yearLimit) {
    renderRetirementInvitation();
    return;
  }
  if (state.year % 4 === 0) {
    renderCongressInvitation();
    return;
  }
  nextYear();
}

function ordinal(number) {
  const mod10 = number % 10;
  const mod100 = number % 100;
  if (mod10 === 1 && mod100 !== 11) return `${number}st`;
  if (mod10 === 2 && mod100 !== 12) return `${number}nd`;
  if (mod10 === 3 && mod100 !== 13) return `${number}rd`;
  return `${number}th`;
}

function renderCongressInvitation() {
  state.phase = "Congress Invitation";
  const congressNumber = state.year / 4;
  state.congressSummary = null;
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">International Congress</span>
          <h2>Congress Season</h2>
          <p>The four-year cycle has turned. The field gathers, performs confidence, and asks questions disguised as comments.</p>
        </div>
      </div>
      <div class="actions centered-actions">
        <button id="goCongress" class="primary">Go to International Congress of ${state.player.subdomain}</button>
      </div>
    </div>
  `);
  document.getElementById("goCongress").addEventListener("click", () => renderCongressProgram(congressNumber));
}

function congressSpeakerPool() {
  return shuffled(yearlyColleagues()).slice(0, 5).map((speaker) => ({
    id: speaker.id,
    name: speaker.name,
    label: speaker.label,
    rank: speaker.rank,
    institution: speaker.institution,
    title: generateTitle(state.player.subdomain),
  }));
}

function ensureCongressProgram(congressNumber) {
  if (!state.congressProgram || state.congressProgram.number !== congressNumber) {
    state.congressProgram = {
      number: congressNumber,
      location: rand(CONGRESS_LOCATIONS),
      speakers: congressSpeakerPool(),
      playerTitle: "TBA",
    };
  }
  return state.congressProgram;
}

function renderCongressProgram(congressNumber) {
  state.phase = "Congress";
  const program = ensureCongressProgram(congressNumber);
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">${ordinal(congressNumber)} Congress</span>
          <h2>${ordinal(congressNumber)} International Congress of ${state.player.subdomain}</h2>
          <p>${program.location}. Researchers arrive with poster tubes, jet lag, and extremely specific complaints about session scheduling.</p>
        </div>
      </div>
      <div class="program-list">
        ${program.speakers
          .map(
            (speaker) => `
              <article class="program-item">
                <h3>${speaker.name}</h3>
                <p>${speaker.label} · ${speaker.institution}</p>
                <strong>${speaker.title}</strong>
              </article>
            `
          )
          .join("")}
        <article class="program-item player-row">
          <h3>${state.player.name}</h3>
          <p>${state.player.rank} · ${state.player.institution}</p>
          <strong>TBA</strong>
        </article>
      </div>
      <div class="actions centered-actions">
        <button id="startCongress" class="primary">Start the conference</button>
      </div>
    </div>
  `);
  document.getElementById("startCongress").addEventListener("click", renderCongressTalkChoice);
}

function renderCongressTalkChoice() {
  state.phase = "Congress Talks";
  const program = ensureCongressProgram(state.year / 4);
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Congress Talks</span>
          <h2>Which talk will you go to?</h2>
          <p>Choose one session. Academic fate, as usual, hides in the coffee breaks.</p>
        </div>
      </div>
      <div class="program-list">
        ${program.speakers
          .map(
            (speaker) => `
              <article class="program-item">
                <h3>${speaker.name}</h3>
                <p>${speaker.label}</p>
                <strong>${speaker.title}</strong>
                <div class="actions">
                  <button data-talk-action="notes" data-speaker="${speaker.id}">Listen silently and take notes</button>
                  <button data-talk-action="question" data-speaker="${speaker.id}">Ask a question</button>
                  <button data-talk-action="chat" data-speaker="${speaker.id}">Go chat after the talk</button>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `);

  document.querySelectorAll("[data-talk-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const speaker = program.speakers.find((item) => item.id === button.dataset.speaker);
      resolveTalkInteraction(speaker, button.dataset.talkAction);
    });
  });
}

function resolveTalkInteraction(speaker, action) {
  let summary = "";
  const colleague = state.collaborationCandidates.find((item) => item.id === speaker.id);
  if (colleague && !colleague.friend) colleague.relationship = "met at congress";
  if (action === "notes") {
    summary = `You listened silently to ${speaker.name}, took careful notes, and avoided creating any new enemies.`;
  } else if (action === "question") {
    if (Math.random() < 0.55) {
      state.player.reputation += 1;
      summary = `Your question after ${speaker.name}'s talk was sharp enough to be remembered. Your academic aura improves slightly.`;
    } else {
      state.player.reputation = Math.max(0, state.player.reputation - 1);
      summary = `Your question after ${speaker.name}'s talk became more of a comment, then less of a good idea. Your academic aura suffers slightly.`;
    }
  } else if (Math.random() < 0.45) {
    if (colleague) {
      colleague.friend = true;
      colleague.relationship = "friend";
    }
    summary = `${speaker.name} warmed up during the hallway chat and now counts as a friend. Future collaboration odds improve.`;
  } else {
    summary = `${speaker.name} was polite after the talk, but kept glancing toward someone more famous. Nothing much came of it.`;
  }

  state.congressSummary = { talk: summary, presentation: "", speaker: speaker.name, action };
  renderPlayerPresentation();
}

function renderPlayerPresentation() {
  state.phase = "Congress Presentation";
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Your Presentation</span>
          <h2>Time for your presentation</h2>
          <p>The room is full enough to be flattering and empty enough to be plausible.</p>
        </div>
      </div>
      <div class="grid">
        <article class="choice">
          <h3>Give a technical but obscure talk</h3>
          <p>Risk losing the back row, but impress the three people who understand slide 27.</p>
          <button data-presentation="technical">Present</button>
        </article>
        <article class="choice">
          <h3>Give an inspirational but vague talk</h3>
          <p>Risk saying very little beautifully, but make funders feel the future has arrived.</p>
          <button data-presentation="inspirational">Present</button>
        </article>
      </div>
    </div>
  `);
  document.querySelectorAll("[data-presentation]").forEach((button) => {
    button.addEventListener("click", () => resolvePresentation(button.dataset.presentation));
  });
}

function resolvePresentation(style) {
  if (style === "technical") {
    if (Math.random() < 0.55) {
      state.citationBoost = 0.12;
      state.citationBoostYears = 4;
      state.congressSummary.presentation = "Your technical talk confused many attendees but impressed the right specialists. Citation boost for 4 years.";
    } else {
      state.congressSummary.presentation = "Your technical talk was admired in principle and understood by almost nobody. No lasting effect.";
    }
  } else if (Math.random() < 0.55) {
    state.fundingBoost = 0.04;
    state.fundingBoostYears = 4;
    state.congressSummary.presentation = "Your inspirational talk made the project sound fundable. Funding odds improve for 4 years.";
  } else {
    state.congressSummary.presentation = "Your inspirational talk sounded important but evaporated during the coffee break. No lasting effect.";
  }
  renderCongressEnding();
}

function renderCongressEnding() {
  state.phase = "Congress Ending";
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Congress Complete</span>
          <h2>Already the end of the congress</h2>
          <p>${state.congressSummary?.talk || ""}</p>
          <p>${state.congressSummary?.presentation || ""}</p>
          <p>After partying with your colleagues at a truly memorable conference dinner, it is time to go home and go back to work.</p>
        </div>
      </div>
      <div class="actions centered-actions">
        <button id="goBackHome" class="primary">Go back home</button>
      </div>
    </div>
  `);
  document.getElementById("goBackHome").addEventListener("click", () => {
    if (state.congressProgram && state.congressSummary) {
      state.congressHistory.push({
        year: state.year,
        number: state.congressProgram.number,
        location: state.congressProgram.location,
        speaker: state.congressSummary.speaker,
        action: state.congressSummary.action,
        talk: state.congressSummary.talk,
        presentation: state.congressSummary.presentation,
      });
    }
    state.congressProgram = null;
    nextYear();
  });
}

function nextYear() {
  if (state.year >= state.yearLimit) {
    renderRetirementInvitation();
    return;
  }
  state.year += 1;
  state.allocationBonus = 0;
  state.usedFunders = new Set();
  state.collaborationAttempts = new Set();
  startYearSummary();
  log(`Year ${state.year} begins.`, "");
  beginYear();
}

function retirementTitle() {
  const score = careerScore();
  if (score >= 1800) return "Immortal citation machine";
  if (score >= 1150) return "Field-defining figure";
  if (score >= 720) return "Internationally recognized scholar";
  if (score >= 360) return "Respected departmental pillar";
  return "Forgotten but tenured";
}

function capstoneAchievements() {
  const score = careerScore();
  const achievements = [];
  if (state.player.rank === "Full Professor" && score >= 650) achievements.push("Emeritus status");
  if (score >= 900) achievements.push("Retirement conference");
  if (hIndex() >= 12 || state.citations >= 2200) achievements.push("Named lecture");
  if (state.publications.length >= 18 && state.citations >= 1400) achievements.push("Festschrift");
  if (score >= 1350 || state.publications.some((paper) => paper.citations >= 900)) {
    achievements.push("Bitter blog post written about your influence");
  }
  return achievements.length ? achievements : ["A sincere card signed by most of the department"];
}

function careerTimeline() {
  const bestPaper = [...state.publications].sort((a, b) => (b.journalPrestige || 0) - (a.journalPrestige || 0))[0];
  const mostCitedPaper = [...state.publications].sort((a, b) => b.citations - a.citations)[0];
  const biggestRejection = [...state.rejectionHistory].sort((a, b) => b.prestige - a.prestige)[0];
  const bestCongress = [...state.congressHistory].sort((a, b) => {
    const aScore = (a.talk.includes("friend") ? 3 : 0) + (a.presentation.includes("boost") ? 2 : 0);
    const bScore = (b.talk.includes("friend") ? 3 : 0) + (b.presentation.includes("boost") ? 2 : 0);
    return bScore - aScore || b.number - a.number;
  })[0];

  const promotionLine = state.promotionHistory.length
    ? state.promotionHistory.map((item) => `${item.rank}, year ${item.year}`).join("; ")
    : "No promotion recorded";

  return [
    ["Year promoted", promotionLine],
    ["Best paper", bestPaper ? `${bestPaper.title}, ${bestPaper.journal}` : "No publication reached print"],
    ["Most cited paper", mostCitedPaper ? `${mostCitedPaper.title} (${mostCitedPaper.citations} citations)` : "No citation magnet emerged"],
    ["Biggest rejection", biggestRejection ? `${biggestRejection.title}, ${biggestRejection.journal}` : "No rejection became legendary"],
    ["Best congress", bestCongress ? `${ordinal(bestCongress.number)} congress in ${bestCongress.location}` : "No congress memory survived peer review"],
  ];
}

function renderCareerEnd() {
  state.phase = "Career End";
  const h = hIndex();
  const achievements = capstoneAchievements();
  const timeline = careerTimeline();
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Career Complete</span>
          <h2>Retirement Recap</h2>
          <p>${retirementTitle()}</p>
        </div>
      </div>
      <div class="grid">
        <div class="choice"><h3>Publications</h3><p>${state.publications.length}</p></div>
        <div class="choice"><h3>Standing</h3><p>${standingLabel()}</p></div>
        <div class="choice"><h3>Citations</h3><p>${state.citations}</p></div>
        <div class="choice"><h3>h-index</h3><p>${h}</p></div>
        <div class="choice"><h3>Final rank</h3><p>${state.player.rank}</p></div>
        <div class="choice"><h3>Distinctions</h3><p>${state.vanity.length}</p></div>
      </div>
      <section class="summary-card">
        <h3>Capstone Achievements</h3>
        <ul>${achievements.map((item) => `<li>${item}</li>`).join("")}</ul>
      </section>
      <section class="summary-card">
        <h3>Career Timeline</h3>
        <ul>${timeline.map(([label, value]) => `<li><strong>${label}:</strong> ${value}</li>`).join("")}</ul>
      </section>
      <div class="actions"><button class="primary" id="restart">Start a new career</button></div>
    </div>
  `);
  document.getElementById("restart").addEventListener("click", () => location.reload());
}

function renderRetirementInvitation() {
  state.phase = "Retirement";
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Year ${state.yearLimit}: Retirement</span>
          <h2>The career reaches its final committee meeting</h2>
          <p>Thirty years of grants, reviews, conferences, citations, and carefully managed academic dignity have led here.</p>
        </div>
      </div>
      <div class="actions centered-actions"><button id="retire" class="primary">Retire</button></div>
    </div>
  `);
  document.getElementById("retire").addEventListener("click", renderCareerEnd);
}

function renderCurrentState() {
  if (!state.player || state.phase === "Profile") {
    renderProfile();
    return;
  }
  if (state.phase === "Funding") {
    renderFunding();
    return;
  }
  if (state.phase === "Allocation") {
    renderAllocation();
    return;
  }
  if (state.phase === "Collaboration") {
    renderCollaboration();
    return;
  }
  if (state.phase === "Research") {
    renderResearchProgress();
    return;
  }
  if (state.phase === "Submit") {
    renderSubmit();
    return;
  }
  if (state.phase === "Revision") {
    renderRevision();
    return;
  }
  if (state.phase === "Decision") {
    renderDecision(state.yearSummary.outcome === "Accepted" ? "accepted" : "rejected");
    return;
  }
  if (state.phase === "Congress Invitation") {
    renderCongressInvitation();
    return;
  }
  if (state.phase === "Congress") {
    renderCongressProgram(Math.max(1, Math.floor(state.year / 4)));
    return;
  }
  if (state.phase === "Congress Talks") {
    renderCongressTalkChoice();
    return;
  }
  if (state.phase === "Congress Presentation") {
    renderPlayerPresentation();
    return;
  }
  if (state.phase === "Congress Ending") {
    renderCongressEnding();
    return;
  }
  if (state.phase === "Retirement") {
    renderRetirementInvitation();
    return;
  }
  renderYearSummary();
}

renderProfile();
