const BUILD = "";
const SAVE_KEY = "sim-academia-3000-save";
const PLAYTEST_NOTE_KEY = "sim-academia-3000-playtest-note";
const LANGUAGE_KEY = "sim-academia-3000-language";
const FEEDBACK_URL =
  "https://github.com/Clementmoreau/sim-academia-3000/issues/new?title=Playtest%20feedback&body=Browser%3A%0AApproximate%20playtime%3A%0A%0AWas%20it%20fun%3F%0A%0ADid%20you%20understand%20what%20you%20were%20trying%20to%20do%3F%0A%0ADid%20the%20hidden%20numbers%20feel%20funny%20or%20frustrating%3F%0A%0ABest%20moment%3A%0A%0AMost%20confusing%20moment%3A%0A%0ADid%20you%20want%20to%20replay%3F%0A%0AAny%20UI%20pain%3F%0A";

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
  "Université Paris-Cité",
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

const FRENCH_INSTITUTIONS = [
  "Université Paris-Cité",
  "CNRS, UMR 7289",
  "École normale supérieure de Lyon",
  "Université Grenoble Alpes",
  "Université Paris-Saclay",
  "Institut Polytechnique de Paris",
  "Université de Strasbourg",
  "Université de Rennes",
  "Aix-Marseille Université",
  "Université de Montpellier",
  "Université Toulouse III - Paul Sabatier",
  "Université Claude Bernard Lyon 1",
  "Sorbonne Université",
  "Université de Lille",
  "INRIA Saclay",
  "Institut Curie",
  "Muséum national d'Histoire naturelle",
  "École des Ponts ParisTech",
  "Université Côte d'Azur",
  "Collège de France, chaire provisoire",
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
  { acronym: "DFLS", name: "Department Funds Last Scraps", minGrant: 80, maxGrant: 120, chance: 0.72 },
  { acronym: "LSM", name: "Local Symposium Microgrant", minGrant: 180, maxGrant: 320, chance: 0.48 },
  { acronym: "RKGC", name: "Regional Kickoff Grant Council", minGrant: 650, maxGrant: 1200, chance: 0.26 },
  { acronym: "SSID", name: "Society for Support of Incremental Discoveries", minGrant: 1800, maxGrant: 3200, chance: 0.16 },
  { acronym: "NICAR", name: "National Institute for Consolidating Avant-Garde Research", minGrant: 4500, maxGrant: 8000, chance: 0.09 },
  { acronym: "MCREA", name: "Mid-Career Research Endowment Agency", minGrant: 9000, maxGrant: 16000, chance: 0.055 },
  { acronym: "FTTR", name: "Foundation for Transformative and Transdisciplinary Research", minGrant: 18000, maxGrant: 32000, chance: 0.032 },
  { acronym: "RSEEE", name: "The Royal Society of Excellent Epistemic Endeavors", minGrant: 35000, maxGrant: 55000, chance: 0.018 },
  { acronym: "ICEC", name: "International Cutting Edge Council", minGrant: 65000, maxGrant: 85000, chance: 0.01 },
  { acronym: "WHFPAF", name: "World Human Frontier Prestige Advanced Fellowship", minGrant: 90000, maxGrant: 110000, chance: 0.004 },
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
    label: "Preprint visibility campaign",
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
    note: "Moderately expensive polish: clearer prose, fewer avoidable objections.",
  },
  {
    key: "corruption",
    label: "Discreet editorial consultancy",
    cost: 26000,
    bonus: 0.17,
    quality: 0,
    note: "Very expensive, ethically indistinct, and mechanically effective.",
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
  ["The analysis pipeline quietly misaligns one column.", -12, "bad"],
];

const REVISION_EVENTS = [
  ["A referee requests twelve additional robustness checks.", -7, "warn"],
  ["A friendly reviewer helps clarify your contribution.", 6, "good"],
  ["The editor asks for a shorter introduction.", 3, "good"],
  ["Your co-author becomes unavailable during revision week.", -5, "bad"],
  ["The new analysis is stronger than expected.", 9, "good"],
  ["You add a carefully framed limitation section.", 4, "good"],
  ["A robustness check weakens the headline claim.", -6, "warn"],
];

const JOURNAL_TEMPLATES = [
  ["Proceedings of the Provincial Society of {subdomain}", 1, 50],
  ["Letters in Preliminary {subdomain}", 2, 72],
  ["Regional Annals of Applied {subdomain}", 3, 94],
  ["Journal of Emerging {subdomain}", 4, 120],
  ["Transactions on {subdomain}", 5, 152],
  ["International Review of {subdomain}", 6, 192],
  ["Advanced Studies in {subdomain}", 7, 240],
  ["Frontiers of Theoretical {subdomain}", 8, 280],
  ["The Academy Proceedings: {subdomain}", 9, 330],
  ["Annals of The Universal Society of {subdomain}", 10, 390],
];

const JOURNAL_TEMPLATES_FR = [
  ["Bulletin Confidentiel de {subdomain}", 1, 50],
  ["Cahiers Préliminaires de {subdomain}", 2, 72],
  ["Annales Régionales de {subdomain} Appliquée", 3, 94],
  ["Revue des Directions Émergentes en {subdomain}", 4, 120],
  ["Transactions Sérieuses de {subdomain}", 5, 152],
  ["Revue Internationale des Méthodes en {subdomain}", 6, 192],
  ["Annales Avancées de {subdomain}", 7, 240],
  ["Frontières Théoriques de {subdomain}", 8, 280],
  ["Comptes Rendus de l'Académie en {subdomain}", 9, 330],
  ["Annales Universelles de {subdomain}", 10, 390],
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

const CONGRESS_DISHES = {
  "Vienna, Austria": "Wiener schnitzel",
  "Barcelona, Spain": "paella",
  "Kyoto, Japan": "kaiseki",
  "Boston, USA": "clam chowder",
  "Montréal, Canada": "poutine",
  Singapore: "chili crab",
  "Berlin, Germany": "currywurst",
  "Cape Town, South Africa": "bobotie",
  "Melbourne, Australia": "lamingtons",
  "Copenhagen, Denmark": "smørrebrød",
  "Seoul, South Korea": "bibimbap",
  "Lisbon, Portugal": "bacalhau",
  "Vancouver, Canada": "wild salmon",
  "Edinburgh, Scotland": "haggis",
  "São Paulo, Brazil": "feijoada",
};

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
  retirementWarningShown: false,
};

const app = document.getElementById("app");

const requestedLanguage = new URLSearchParams(location.search).get("lang");
let language = requestedLanguage || localStorage.getItem(LANGUAGE_KEY) || "en";
if (!["en", "fr"].includes(language)) language = "en";

const FR_TEXT_REPLACEMENTS = [
  ["Sim Academia 3000", "Sim Academia 3000"],
  ["Researcher Profile", "Profil de chercheur"],
  ["Set up the scholar who will brave grants, reviews, citations, and selective conferences.", "Créez le chercheur qui affrontera appels à projets, rapports d'expertise, citations et colloques sélectifs."],
  ["Name", "Nom"],
  ["Rank", "Grade"],
  ["Institution", "Établissement"],
  ["Field", "Domaine"],
  ["Domain", "Discipline"],
  ["Subdomain", "Spécialité"],
  ["Year", "Année"],
  ["Standing", "Notoriété"],
  ["Experience", "Métier"],
  ["Funds", "Crédits"],
  ["Citations", "Citations"],
  ["Random name", "Nom aléatoire"],
  ["Random institution", "Établissement aléatoire"],
  ["Start Career", "Commencer la carrière"],
  ["Feedback", "Retours"],
  ["Menu", "Menu"],
  ["See my CV", "Voir mon CV"],
  ["Departmental Notes", "Notes du département"],
  ["Informal record", "Main courante"],
  ["No departmental record yet.", "Rien à signaler pour l'instant."],
  ["Before you begin", "Avant de commencer"],
  ["Playtest build", "Version de test"],
  ["Please play one full academic career if you can. Do not try to optimize too hard on the first run; the game is meant to feel partly legible and partly unfair in the usual institutional way.", "Essayez de jouer une carrière complète si possible. Ne cherchez pas trop à optimiser dès la première partie: le jeu est censé rester à moitié lisible, à moitié injuste, comme une vraie procédure institutionnelle."],
  ["After playing, use the Feedback button to tell us where you felt delighted, confused, bored, cheated, or tempted to replay.", "Après la partie, utilisez le bouton Retours pour dire où vous avez été amusé, perdu, lassé, floué, ou tenté de relancer une carrière."],
  ["Feedback questions", "Questions de test"],
  ["Begin", "Commencer"],
  ["Playtester feedback", "Retour de test"],
  ["After one run", "Après une partie"],
  ["Was it fun?", "Est-ce que c'était amusant ?"],
  ["Did you understand what you were trying to do?", "Avez-vous compris ce que vous essayiez de faire ?"],
  ["Did the hidden numbers feel funny or frustrating?", "Les chiffres cachés vous ont-ils semblé drôles ou frustrants ?"],
  ["What was the best moment?", "Quel a été le meilleur moment ?"],
  ["What was the most confusing moment?", "Quel a été le moment le plus confus ?"],
  ["Did you want to replay?", "Avez-vous eu envie de rejouer ?"],
  ["Any UI pain?", "Un inconfort d'interface ?"],
  ["Leave feedback on GitHub", "Laisser un retour sur GitHub"],
  ["Close", "Fermer"],
  ["Game Menu", "Menu du jeu"],
  ["New game", "Nouvelle partie"],
  ["Save game", "Sauvegarder"],
  ["Load game", "Charger"],
  ["Save files are stored locally in this browser.", "Les sauvegardes restent dans ce navigateur."],
  ["Appointment", "Nomination"],
  ["Welcome to", "Bienvenue à"],
  ["You just got a position at", "Vous venez d'obtenir un poste à"],
  ["An exciting career awaits. Along the journey, you will try to publish papers in prestigious journals, apply for fancy grants, climb the academic ladder and reward yourself with vanity items that will make your colleagues jealous. For now, time to get to work in your office.", "Une carrière prometteuse vous attend. Au fil des années, vous tenterez de publier dans des revues prestigieuses, de décrocher des financements élégamment flous, de gravir les échelons académiques et de vous offrir des objets de vanité qui rendront vos collègues discrètement jaloux. Pour l'heure, il est temps de rejoindre votre bureau."],
  ["Get to work", "Au travail"],
  ["Funding Opportunities", "Appels à projets"],
  ["Funding", "Financement"],
  ["Apply until someone says yes, or skip and begin with whatever dignity remains.", "Candidatez jusqu'à ce que quelqu'un dise oui, ou passez votre tour avec la dignité disponible."],
  ["Skip funding", "Renoncer au financement"],
  ["Typical award:", "Type de financement :"],
  ["Apply", "Candidater"],
  ["Rejected", "Refusé"],
  ["Allocation", "Répartition"],
  ["Choose", "Choisir"],
  ["Cost", "Coût"],
  ["Lift", "Effet"],
  ["Proceed without collaboration", "Continuer sans collaboration"],
  ["Begin research", "Commencer la recherche"],
  ["Choose one colleague to contact.", "Choisissez un collègue à contacter."],
  ["Contact them", "Les contacter"],
  ["Contacted", "Contacté"],
  ["Research", "Recherche"],
  ["New Draft", "Nouveau manuscrit"],
  ["Current draft condition:", "État actuel du manuscrit :"],
  ["Continue research", "Continuer la recherche"],
  ["Finish research", "Terminer la recherche"],
  ["Research Log", "Carnet de recherche"],
  ["Draft condition:", "État du manuscrit :"],
  ["Research has not started yet.", "La recherche n'a pas encore commencé."],
  ["Research progress", "Progression de la recherche"],
  ["Submission", "Soumission"],
  ["Select a Journal", "Choisir une revue"],
  ["Journal", "Revue"],
  ["Fit", "Adéquation"],
  ["Submit", "Soumettre"],
  ["Overkill", "Trop bas"],
  ["Safe", "Prudent"],
  ["Best fit", "Bon ajustement"],
  ["Risky", "Risqué"],
  ["High risk", "Très risqué"],
  ["Very safe, but the career payoff will be tiny.", "Très sûr, mais le bénéfice de carrière sera minuscule."],
  ["Likely to work, with modest career payoff.", "Probable, avec un gain de carrière modeste."],
  ["Balanced risk and reward.", "Risque et bénéfice bien équilibrés."],
  ["Harder to publish, but valuable if it lands.", "Plus difficile, mais rentable si cela passe."],
  ["Unlikely, but potentially career-making.", "Peu probable, mais potentiellement décisif."],
  ["Revision", "Révision"],
  ["Revision Progress", "Progression de la révision"],
  ["Work on revision", "Travailler la révision"],
  ["Submit revision", "Soumettre la révision"],
  ["Accepted", "Accepté"],
  ["Rejected", "Refusé"],
  ["Decision on your grant application", "Décision concernant votre demande de financement"],
  ["Decision on your manuscript", "Décision concernant votre manuscrit"],
  ["Final decision on your revised manuscript", "Décision finale concernant votre manuscrit révisé"],
  ["Decision", "Décision"],
  ["End year", "Clore l'année"],
  ["Annual Report", "Rapport annuel"],
  ["Internal memorandum", "Note interne"],
  ["Office of Academic Affairs", "Direction des affaires académiques"],
  ["Project", "Projet"],
  ["Outcome:", "Résultat :"],
  ["Funding:", "Financement :"],
  ["New Citations", "Nouvelles citations"],
  ["Total citations:", "Citations totales :"],
  ["Dean's Note", "Mot de la direction"],
  ["Career momentum:", "Dynamique de carrière :"],
  ["Distinctions", "Distinctions"],
  ["Acquire", "Obtenir"],
  ["Owned", "Acquis"],
  ["Locked", "Verrouillé"],
  ["Next year", "Année suivante"],
  ["Finish career", "Terminer la carrière"],
  ["Five Years Remaining", "Encore cinq ans"],
  ["The final stretch begins", "La dernière ligne droite commence"],
  ["The department has quietly started using the word “legacy.” Five years remain before retirement, which is long enough to reshape a career and short enough for every decision to look intentional.", "Le département commence discrètement à employer le mot « héritage ». Il reste cinq ans avant la retraite: assez pour infléchir une carrière, trop peu pour faire semblant que les décisions sont innocentes."],
  ["Confidential note", "Note confidentielle"],
  ["Begin the final five years", "Entamer les cinq dernières années"],
  ["International Congress", "Congrès international"],
  ["Congress Season", "Saison des congrès"],
  ["The four-year cycle has turned. The field gathers, performs confidence, and asks questions disguised as comments.", "Le cycle quadriennal revient. Le champ se rassemble, affiche sa confiance, et pose des questions qui ressemblent beaucoup à des commentaires."],
  ["Start the conference", "Commencer le congrès"],
  ["Congress Talks", "Sessions du congrès"],
  ["Which talk will you go to?", "À quelles communications assister ?"],
  ["Choose two sessions. Professional consequences often begin as ordinary conversations.", "Choisissez deux sessions. Les conséquences professionnelles commencent souvent comme des conversations ordinaires."],
  ["Talks attended", "Communications suivies"],
  ["No talks attended yet.", "Aucune communication suivie pour l'instant."],
  ["talks attended.", "communications suivies."],
  ["Listen silently and take notes", "Écouter en silence et prendre des notes"],
  ["Ask a question", "Poser une question"],
  ["Go chat after the talk", "Aller discuter après la communication"],
  ["Your Presentation", "Votre communication"],
  ["Time for your presentation", "C'est à vous de présenter"],
  ["Give a technical but obscure talk", "Faire une présentation technique mais opaque"],
  ["Give an inspirational but vague talk", "Faire une présentation inspirante mais vague"],
  ["Present", "Présenter"],
  ["Congress Complete", "Congrès terminé"],
  ["Already the end of the congress", "Déjà la fin du congrès"],
  ["Go back home", "Rentrer au laboratoire"],
  ["Retirement", "Retraite"],
  ["The career reaches its final committee meeting", "La carrière atteint sa dernière commission"],
  ["Retire", "Prendre sa retraite"],
  ["Career Complete", "Carrière terminée"],
  ["Retirement Recap", "Bilan de retraite"],
  ["Publications", "Publications"],
  ["Final rank", "Grade final"],
  ["Global Colleague Ranking", "Classement global des collègues"],
  ["Capstone Achievements", "Dernières consécrations"],
  ["Career Timeline", "Chronologie de carrière"],
  ["Start a new career", "Commencer une nouvelle carrière"],
  ["Assistant Professor", "Maître de conférences"],
  ["Associate Professor", "Professeur associé"],
  ["Full Professor", "Professeur des universités"],
  ["Prof.", "Pr."],
  ["Dr.", "Dr"],
  ["microgrant", "micro-financement"],
  ["small grant", "petit financement"],
  ["major grant", "gros financement"],
  ["prestige grant", "financement de prestige"],
  ["transformative award", "grand programme transformant"],
  ["field-shaping", "structurant pour le champ"],
  ["widely visible", "très visible"],
  ["recognized", "reconnu"],
  ["emerging", "émergent"],
  ["locally noticed", "repéré localement"],
  ["precariously obscure", "précairement obscur"],
  ["battle-hardened", "rompu aux commissions"],
  ["seasoned", "aguerri"],
  ["confident", "à l'aise"],
  ["developing", "en rodage"],
  ["newbie", "tout juste recruté"],
  ["exceptionally polished", "exceptionnellement poli"],
  ["formidable", "formidable"],
  ["very strong", "très solide"],
  ["promising", "prometteur"],
  ["preliminary", "préliminaire"],
  ["shameful", "indéfendable"],
  ["transformative", "transformant"],
  ["major", "majeur"],
  ["strong", "solide"],
  ["useful", "utile"],
  ["modest", "modeste"],
  ["tiny", "minuscule"],
  ["none", "aucun"],
  ["Department Funds Last Scraps", "Reliquats du département"],
  ["Local Symposium Microgrant", "Micro-crédit de séminaire local"],
  ["Regional Kickoff Grant Council", "Conseil régional d'amorçage scientifique"],
  ["Society for Support of Incremental Discoveries", "Société de soutien aux découvertes incrémentales"],
  ["National Institute for Consolidating Avant-Garde Research", "Agence nationale pour la consolidation de l'avant-garde"],
  ["Mid-Career Research Endowment Agency", "Fondation pour carrières déjà bien installées"],
  ["Foundation for Transformative and Transdisciplinary Research", "Fondation pour la recherche transformative et transdisciplinaire"],
  ["The Royal Society of Excellent Epistemic Endeavors", "Société royale des excellentes entreprises épistémiques"],
  ["International Cutting Edge Council", "Conseil international du très haut niveau"],
  ["World Human Frontier Prestige Advanced Fellowship", "Bourse mondiale des frontières humaines et du prestige avancé"],
  ["DFLS", "RDL"],
  ["LSM", "MSL"],
  ["RKGC", "CRAS"],
  ["SSID", "SSDI"],
  ["NICAR", "ANCA"],
  ["MCREA", "FCDI"],
  ["FTTR", "FRTT"],
  ["RSEEE", "SREEE"],
  ["ICEC", "CITHN"],
  ["WHFPAF", "BMFP"],
  ["Mathematics", "Mathématiques"],
  ["Physics", "Physique"],
  ["Chemistry", "Chimie"],
  ["Control Theory", "Automatique"],
  ["Engineering", "Ingénierie"],
  ["Biology", "Biologie"],
  ["Computer Science", "Informatique"],
  ["Economics", "Économie"],
  ["Algebraic Geometry", "Géométrie algébrique"],
  ["Number Theory", "Théorie des nombres"],
  ["Dynamical Systems", "Systèmes dynamiques"],
  ["Probability Theory", "Probabilités"],
  ["Partial Differential Equations", "Équations aux dérivées partielles"],
  ["Topology", "Topologie"],
  ["Soft Matter Physics", "Physique de la matière molle"],
  ["Astrophysics", "Astrophysique"],
  ["Quantum Mechanics", "Mécanique quantique"],
  ["Condensed Matter Physics", "Physique de la matière condensée"],
  ["Particle Physics", "Physique des particules"],
  ["Statistical Mechanics", "Mécanique statistique"],
  ["Organic Synthesis", "Synthèse organique"],
  ["Physical Chemistry", "Chimie physique"],
  ["Materials Chemistry", "Chimie des matériaux"],
  ["Catalysis", "Catalyse"],
  ["Chemical Biology", "Biologie chimique"],
  ["Electrochemistry", "Électrochimie"],
  ["Robust Control", "Commande robuste"],
  ["Optimal Control", "Commande optimale"],
  ["Nonlinear Systems", "Systèmes non linéaires"],
  ["Lyapunov Functions", "Fonctions de Lyapunov"],
  ["Feedback Linearization", "Linéarisation par retour d'état"],
  ["Limit Cycles", "Cycles limites"],
  ["Observer Design", "Synthèse d'observateurs"],
  ["Networked Control", "Commande en réseau"],
  ["Stochastic Control", "Commande stochastique"],
  ["Model Predictive Control", "Commande prédictive"],
  ["Mechanical Engineering", "Génie mécanique"],
  ["Electrical Engineering", "Génie électrique"],
  ["Civil Engineering", "Génie civil"],
  ["Aerospace Engineering", "Aéronautique"],
  ["Biomedical Engineering", "Génie biomédical"],
  ["Robotics", "Robotique"],
  ["Molecular Biology", "Biologie moléculaire"],
  ["Gene Networks", "Réseaux de gènes"],
  ["Metabolic Flux", "Flux métaboliques"],
  ["Feedback Motifs", "Boucles de rétroaction"],
  ["Cellular Heterogeneity", "Hétérogénéité cellulaire"],
  ["Genetics", "Génétique"],
  ["Ecology", "Écologie"],
  ["Neuroscience", "Neurosciences"],
  ["Evolutionary Biology", "Biologie évolutive"],
  ["Systems Biology", "Biologie des systèmes"],
  ["AI", "IA"],
  ["HCI", "IHM"],
  ["User Experience", "Expérience utilisateur"],
  ["Tactile Feedback", "Retour tactile"],
  ["Interface Design", "Design d'interfaces"],
  ["Cognitive Load", "Charge cognitive"],
  ["Data Science", "Science des données"],
  ["Programming Languages", "Langages de programmation"],
  ["Distributed Systems", "Systèmes distribués"],
  ["Computer Vision", "Vision par ordinateur"],
  ["Cybersecurity", "Cybersécurité"],
  ["Behavioral Economics", "Économie comportementale"],
  ["Macroeconomics", "Macroéconomie"],
  ["Financial Economics", "Économie financière"],
  ["Industrial Organization", "Organisation industrielle"],
  ["Econometrics", "Économétrie"],
];

function isFrench() {
  return language === "fr";
}

function tx(en, fr) {
  return isFrench() ? fr : en;
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, language);
  renderCurrentState();
}

function localizeText(text) {
  if (!isFrench() || !text) return text;
  return FR_TEXT_REPLACEMENTS
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((current, [en, fr]) => current.split(en).join(fr), text);
}

function localizeDom(root) {
  if (!isFrench()) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = localizeText(node.nodeValue);
  });
}

function displayInstitutionPool() {
  return isFrench() ? FRENCH_INSTITUTIONS : INSTITUTIONS;
}

function feedbackUrl() {
  if (!isFrench()) return FEEDBACK_URL;
  return "https://github.com/Clementmoreau/sim-academia-3000/issues/new?title=Retour%20de%20test&body=Navigateur%20%3A%0ADur%C3%A9e%20approximative%20%3A%0A%0AEst-ce%20que%20c'%C3%A9tait%20amusant%20%3F%0A%0AAvez-vous%20compris%20ce%20que%20vous%20essayiez%20de%20faire%20%3F%0A%0ALes%20chiffres%20cach%C3%A9s%20vous%20ont-ils%20sembl%C3%A9%20dr%C3%B4les%20ou%20frustrants%20%3F%0A%0AMeilleur%20moment%20%3A%0A%0AMoment%20le%20plus%20confus%20%3A%0A%0AAvez-vous%20eu%20envie%20de%20rejouer%20%3F%0A%0AInconfort%20d'interface%20%3F%0A";
}

function icon(name) {
  const paths = {
    menu: `<path d="M4 6h16M4 12h16M4 18h16"/>`,
    cv: `<path d="M5 4h9l5 5v11H5z"/><path d="M14 4v5h5"/><path d="M8 13h8M8 16h6"/>`,
    feedback: `<path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-7a8 8 0 1 1 18-4Z"/><path d="M8 10h8M8 14h5"/>`,
    save: `<path d="M5 4h12l2 2v14H5z"/><path d="M8 4v6h8V4"/><path d="M8 16h8"/>`,
    load: `<path d="M12 4v10"/><path d="M8 10l4 4 4-4"/><path d="M5 18h14"/>`,
    new: `<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v6h-6"/>`,
    close: `<path d="M6 6l12 12M18 6 6 18"/>`,
  };
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name] || ""}</svg>`;
}

function buttonContent(iconName, label) {
  return `${icon(iconName)}<span>${label}</span>`;
}

function academicDisplayName(name, rank) {
  const cleanName = name.replace(/^(Dr\.|Prof\.)\s+/i, "");
  if (rank === "Full Professor") return `Prof. ${cleanName}`;
  if (/^(Dr\.|Prof\.)\s+/i.test(name)) return `Dr. ${cleanName}`;
  return name;
}

function promoteDisplayName(name) {
  const cleanName = name.replace(/^(Dr\.|Prof\.)\s+/i, "");
  return `Prof. ${cleanName}`;
}

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
  return "newbie";
}

function qualityLabel(quality = 0) {
  if (quality >= 300) return "exceptionally polished";
  if (quality >= 240) return "formidable";
  if (quality >= 180) return "very strong";
  if (quality >= 125) return "promising";
  if (quality >= 80) return "preliminary";
  return "shameful";
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
  if (journal.prestige >= 9) return "selective, ceremonial, and exacting";
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
  if (support.key === "corruption") return "substantial editorial pressure";
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
    const titleless = name.trim().replace(/^(Dr\.|Prof\.)\s+/i, "");
    const parts = titleless.split(/\s+/);
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
  const funderName = localizeText(funder.name);
  if (isFrench()) {
    if (accepted) {
      return oneOf([
        `Chère/Cher ${state.player.name},\n\nJ'ai le plaisir de vous informer que votre demande auprès de ${funderName} a été retenue. Le comité a apprécié la netteté apparente de la question scientifique et la façon très assurée dont vous annoncez des résultats livrables.\n\nLe montant attribué est de $${grant}. Merci d'en faire un usage qui puisse, au moins dans un rapport d'activité, être qualifié de structurant.\n\nBien cordialement,\nLe comité de sélection`,
        `Chère/Cher ${state.player.name},\n\nAprès examen de votre dossier, ${funderName} a décidé de soutenir votre projet. Les rapporteurs ont jugé l'ensemble ambitieux, lisible, et suffisamment risqué pour donner à la commission l'impression de financer l'avenir.\n\nL'aide accordée s'élève à $${grant}. Nous attendons avec intérêt l'article, le rapport, la conférence invitée ou la rumeur institutionnelle qui en résultera.\n\nBien à vous,\nLe secrétariat scientifique`,
        `Chère/Cher ${state.player.name},\n\nVotre projet a survécu à la discussion de panel, aux arbitrages budgétaires et à une objection méthodologique particulièrement longue. Nous sommes donc heureux de vous attribuer un financement de ${funderName}.\n\nLe montant total de l'aide est de $${grant}. Merci de mentionner le financeur dans toutes les productions issues du projet, surtout celles qui vieillissent bien.\n\nCordialement,\nLe bureau des appels à projets`,
      ]);
    }

    return oneOf([
      `Chère/Cher ${state.player.name},\n\nNous vous remercions pour votre candidature auprès de ${funderName}. Après examen attentif, nous avons le regret de vous informer que votre projet ne pourra pas être financé lors de cette campagne.\n\nLe comité a relevé l'intérêt de la proposition, sans toutefois la juger suffisamment prioritaire au regard de la concurrence actuelle. Nous vous encourageons à déposer à nouveau lorsque le moral sera revenu.\n\nBien cordialement,\nLe comité de sélection`,
      `Chère/Cher ${state.player.name},\n\nNous avons lu avec attention votre dossier soumis à ${funderName}. Malheureusement, la proposition n'a pas été retenue pour financement.\n\nLes rapporteurs soulignent une promesse intellectuelle réelle, tout en formulant des réserves familières : faisabilité, périmètre, impact, et une légère incertitude sur la définition du mot impact.\n\nCordialement,\nLe secrétariat scientifique`,
      `Chère/Cher ${state.player.name},\n\nLa commission a terminé l'évaluation de votre demande auprès de ${funderName}. Nous regrettons de ne pas pouvoir vous attribuer de crédits cette année.\n\nCette décision reflète principalement des moyens limités et un champ très encombré, et non nécessairement la valeur de long terme de votre idée.\n\nSincèrement,\nLe bureau des appels à projets`,
    ]);
  }

  if (accepted) {
    return oneOf([
      `Dear ${state.player.name},\n\nI am pleased to inform you that ${funder.name} has selected your proposal for funding. The panel appreciated the clarity of the research question and the unnerving confidence with which you promised deliverables.\n\nThe award amount is $${grant}. Please use it in ways that can plausibly be described as transformative.\n\nSincerely,\nThe Grants Committee`,
      `Dear ${state.player.name},\n\nCongratulations. After review, your application to ${funder.name} has been approved. The committee found the project ambitious, legible, and just risky enough to make us look visionary if it works.\n\nWe are awarding $${grant}. We look forward to the resulting paper, report, keynote, or institutional rumor.\n\nBest regards,\nProgram Administration`,
      `Dear ${state.player.name},\n\nYour proposal survived panel discussion, budget scrutiny, and one unusually long methodological objection. We are happy to offer support through ${funder.name}.\n\nThe total award is $${grant}. Please acknowledge the funder in all outputs, especially the ones that age well.\n\nSincerely,\nThe Funding Office`,
    ]);
  }

  return oneOf([
    `Dear ${state.player.name},\n\nThank you for applying to ${funder.name}. After careful review, we regret that we cannot offer support in this round.\n\nThe panel found the proposal interesting, but not sufficiently compelling relative to the current competition. We encourage you to apply again when morale has recovered.\n\nSincerely,\nThe Grants Committee`,
    `Dear ${state.player.name},\n\nWe appreciate the opportunity to review your application to ${funder.name}. Unfortunately, the proposal was not selected for funding.\n\nReviewers noted the intellectual promise of the project, while also raising familiar concerns: feasibility, scope, and impact.\n\nRegards,\nProgram Administration`,
    `Dear ${state.player.name},\n\nThe committee has completed its assessment of your submission to ${funder.name}. We regret to inform you that no award can be made at this time.\n\nThis decision reflects limited funds and a crowded field, not necessarily the long-term value of your idea.\n\nSincerely,\nThe Funding Office`,
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
    retirementWarningShown: false,
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
    retirementWarningShown: saved.retirementWarningShown || false,
  });
  if (state.player?.rank === "Full Professor") state.player.name = promoteDisplayName(state.player.name);
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
          <span class="email-label">${tx("From", "De")}</span>
          <strong>${from}</strong>
        </div>
        <div>
          <span class="email-label">${tx("Subject", "Objet")}</span>
          <h2 id="emailSubject">${localizeText(subject)}</h2>
        </div>
      </div>
      <div class="email-body">
        ${body.split("\n").map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="actions">
        ${secondary ? `<button id="secondaryEmail">${localizeText(secondary.label)}</button>` : ""}
        <button class="primary" id="continueEmail">${tx("Continue", "Continuer")}</button>
      </div>
    </section>
  `;
  app.appendChild(overlay);
  localizeDom(overlay);
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
  localizeDom(overlay);
  document.getElementById("closeCv").addEventListener("click", () => overlay.remove());
}

function showMenuPanel() {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="menu-modal" role="dialog" aria-modal="true">
      <h2>Game Menu</h2>
      <div class="menu-actions">
        <button id="newGameButton">${buttonContent("new", "New game")}</button>
        <button id="saveGameButton" ${state.player ? "" : "disabled"}>${buttonContent("save", "Save game")}</button>
        <button id="loadGameButton">${buttonContent("load", "Load game")}</button>
        <button id="closeMenuButton" class="primary">${buttonContent("close", "Close")}</button>
      </div>
      <p class="hint">Save files are stored locally in this browser.</p>
    </section>
  `;
  app.appendChild(overlay);
  localizeDom(overlay);
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

function showPlaytesterNote() {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="playtest-modal" role="dialog" aria-modal="true" aria-labelledby="playtestTitle">
      <p class="panel-kicker">Playtest build</p>
      <h2 id="playtestTitle">Before you begin</h2>
      <div class="email-body">
        <p>Please play one full academic career if you can. Do not try to optimize too hard on the first run; the game is meant to feel partly legible and partly unfair in the usual institutional way.</p>
        <p>After playing, use the Feedback button to tell us where you felt delighted, confused, bored, cheated, or tempted to replay.</p>
      </div>
      <div class="actions">
        <button id="openFeedbackFromNote">${buttonContent("feedback", "Feedback questions")}</button>
        <button class="primary" id="closePlaytestNote">Begin</button>
      </div>
    </section>
  `;
  app.appendChild(overlay);
  localizeDom(overlay);
  document.getElementById("closePlaytestNote").addEventListener("click", () => overlay.remove());
  document.getElementById("openFeedbackFromNote").addEventListener("click", () => {
    overlay.remove();
    showFeedbackModal();
  });
}

function maybeShowPlaytesterNote() {
  if (sessionStorage.getItem(PLAYTEST_NOTE_KEY)) return;
  sessionStorage.setItem(PLAYTEST_NOTE_KEY, "shown");
  window.setTimeout(showPlaytesterNote, 100);
}

function showFeedbackModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-backdrop";
  overlay.innerHTML = `
    <section class="feedback-modal" role="dialog" aria-modal="true" aria-labelledby="feedbackTitle">
      <p class="panel-kicker">Playtester feedback</p>
      <h2 id="feedbackTitle">After one run</h2>
      <ol class="feedback-questions">
        <li>Was it fun?</li>
        <li>Did you understand what you were trying to do?</li>
        <li>Did the hidden numbers feel funny or frustrating?</li>
        <li>What was the best moment?</li>
        <li>What was the most confusing moment?</li>
        <li>Did you want to replay?</li>
        <li>Any UI pain?</li>
      </ol>
      <div class="actions">
        <a class="button-link primary" href="${feedbackUrl()}" target="_blank" rel="noopener">Leave feedback on GitHub</a>
        <button id="closeFeedback">${buttonContent("close", "Close")}</button>
      </div>
    </section>
  `;
  app.appendChild(overlay);
  localizeDom(overlay);
  document.getElementById("closeFeedback").addEventListener("click", () => overlay.remove());
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
  if (isFrench()) {
    const fa = localizeText(a);
    const fb = localizeText(b);
    const field = localizeText(subdomain);
    return rand([
      `${fa} et ${fb}: contribution à une théorie raisonnablement générale`,
      `Sur le rôle de ${fa} en ${field}`,
      `Revisiter ${fa}: conséquences pour ${localizeText(rand(words))}`,
      `${fa} contre ${fb}: éléments d'un débat technique`,
      `Pourquoi ${fa} compte encore en ${field}`,
      `Méthodes computationnelles pour ${fa} en ${field}`,
      `La structure cachée de ${fa}`,
      `Quand ${fa} échoue: leçons tirées de ${fb}`,
      `Théorie minimale de ${fa} et ${fb}`,
      `De ${fa} à ${fb}: étude comparative`,
      `Mesurer ${fa} sans céder entièrement à l'enthousiasme`,
      `Résultats négatifs sur ${fa} et conséquences pour ${fb}`,
      `Petit guide de ${fa}, ${fb} et prudence savante`,
      `Lois d'échelle pour ${fa} sous hypothèses acceptables`,
      `Ce que ${fb} révèle de ${fa}`,
    ]);
  }
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
    `A Field Guide to ${a}, ${b}, and Scholarly Caution`,
    `Scaling Laws for ${a} Under Realistic Assumptions`,
    `What ${b} Reveals About ${a}`,
  ];
  return rand(patterns);
}

function journals() {
  const templates = isFrench() ? JOURNAL_TEMPLATES_FR : JOURNAL_TEMPLATES;
  return templates.map(([template, prestige, threshold]) => ({
    name: template.replace("{subdomain}", localizeText(state.player.subdomain)),
    prestige,
    threshold: threshold + Math.floor(Math.random() * 11) - 5,
    scope: journalScope(prestige, state.player.subdomain),
  }));
}

function journalScope(prestige, subdomain) {
  if (isFrench()) {
    const field = localizeText(subdomain);
    const scopes = {
      1: `Une revue assez conciliante pour premiers résultats en ${field}. Elle accepte les manuscrits compacts, les preuves préliminaires et les idées qui tiennent debout avec une main sur le mur.`,
      2: `Un support régional, discret mais réel, pour contributions modestes en ${field}. La rédaction demande surtout des affirmations lisibles, des méthodes reconnaissables et pas trop d'effets de manche statistiques.`,
      3: `Une revue pratique pour travaux incrémentaux, exemples propres et discussion compétente. En ${field}, mieux vaut résoudre une petite question correctement que promettre une révolution.`,
      4: `Une revue attentive aux directions émergentes en ${field}. Elle aime les angles neufs, le positionnement prudent et les papiers capables de survivre à un scepticisme ordinaire.`,
      5: `Une revue technique solide, avec comités sérieux et rapports parfois utiles. Le manuscrit doit avoir une méthode convaincante, assez de validation et quelque chose que les spécialistes peuvent réutiliser.`,
      6: `Une revue internationale sélective, lue au-delà du cercle immédiat. Le papier doit être poli, bien situé, et assez robuste pour que les rapporteurs discutent l'importance plutôt que la compétence.`,
      7: `Un lieu prestigieux pour contributions ambitieuses en ${field}. Il faut de la clarté conceptuelle, des preuves solides et un résultat qui modifie légèrement la façon dont le champ se raconte.`,
      8: `Une revue théorique à haute tension, où même les bons papiers arrivent un peu mal habillés. Il faut de l'élégance, de la profondeur technique et une thèse qui voyage au-delà de la sous-communauté.`,
      9: `Une revue de rang académique presque cérémoniel. Le manuscrit doit avoir l'air évident après publication et impossible avant.`,
      10: `Un débouché quasi mythologique pour contributions qui redessinent la carte, agacent des gens importants et génèrent des invitations pendant des années.`,
    };
    return scopes[prestige];
  }
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
      name: academicDisplayName(names[index % names.length], rank),
      institution: rand(displayInstitutionPool()),
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
      name: academicDisplayName(state.player.name, state.player.rank),
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
      name: academicDisplayName(state.player.name, state.player.rank),
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
        </div>
      </div>
      <div class="ranking-list">
        ${colleagues
          .map(
            (colleague, index) => `
              <div class="ranking-row ${colleague.player ? "player-row" : ""}">
                <strong>${index + 1}</strong>
                <div>
                  <h3>${academicDisplayName(colleague.name, colleague.rank)}${colleague.friend ? " · friend" : ""}</h3>
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
  localizeDom(overlay);
  document.getElementById("closeColleagues").addEventListener("click", () => overlay.remove());
}

function collaborationOffer(colleague) {
  const playerScore = careerScore();
  const gap = colleague.score - playerScore;
  const friendBonus = colleague.friend ? 0.35 : 0;
  const friendQuality = colleague.friend ? 3 : 0;

  if (gap < -60) {
    if (isFrench()) {
      return {
        kind: "lower",
        chance: clamp(0.9 + friendBonus, 0, 0.98),
        bonus: 5 + friendQuality,
        malus: 1,
        acceptedSubject: "Re: collaboration possible",
        acceptedBody: oneOf([
          `Chère/Cher ${state.player.name},\n\nMerci beaucoup pour votre message. Je serais très heureuse/heureux de contribuer au projet, et je peux préparer quelques notes dès cette semaine.\n\nJe vous remercie de m'avoir proposé cette collaboration. Je ferai de mon mieux pour qu'elle soit utile.\n\nBien cordialement,\n${colleague.name}`,
          `Chère/Cher ${state.player.name},\n\nC'est une excellente nouvelle. Je suis vos travaux récents avec intérêt et je serais ravi(e) de participer au cadrage, aux figures ou aux analyses complémentaires.\n\nEnvoyez-moi le manuscrit quand cela vous arrange.\n\nBien à vous,\n${colleague.name}`,
          `Chère/Cher ${state.player.name},\n\nJ'accepte volontiers. Le projet rejoint des questions que j'avais envie d'aborder depuis longtemps, et je peux dégager un peu de temps ce semestre.\n\nAvec tous mes remerciements,\n${colleague.name}`,
        ]),
        rejectedSubject: "Re: collaboration possible",
        rejectedBody: `Chère/Cher ${state.player.name},\n\nMerci beaucoup d'avoir pensé à moi. Je suis sincèrement flatté(e), mais je suis déjà trop engagé(e) cette année pour contribuer sérieusement.\n\nJ'espère que nous trouverons bientôt une autre occasion.\n\nBien cordialement,\n${colleague.name}`,
      };
    }
    return {
      kind: "lower",
      chance: clamp(0.9 + friendBonus, 0, 0.98),
      bonus: 5 + friendQuality,
      malus: 1,
      acceptedSubject: "Re: possible collaboration",
      acceptedBody: oneOf([
        `Dear ${state.player.name},\n\nThank you for the invitation. I would be very pleased to contribute to the project, and I can prepare a short set of notes this week.\n\nI am grateful to be considered and will do my best to make the collaboration useful.\n\nBest regards,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nThis is very welcome news. I have followed your recent work with interest and would be happy to help with the framing, figures, or supplementary analysis.\n\nPlease send the draft when convenient.\n\nBest,\n${colleague.name}`,
        `Dear ${state.player.name},\n\nI would be glad to collaborate. The project is well aligned with questions I have been hoping to pursue, and I can make time for it this semester.\n\nWith appreciation,\n${colleague.name}`,
      ]),
      rejectedSubject: "Re: possible collaboration",
      rejectedBody: `Dear ${state.player.name},\n\nThank you so much for thinking of me. I am genuinely flattered, but I am already overcommitted and would not be able to contribute properly this year.\n\nI hope we find another occasion soon.\n\nBest,\n${colleague.name}`,
    };
  }

  if (Math.abs(gap) <= 60) {
    if (isFrench()) {
      return {
        kind: "peer",
        chance: clamp(0.5 + friendBonus, 0, 0.95),
        bonus: 10 + friendQuality,
        malus: 0,
        acceptedSubject: "Re: collaboration possible",
        acceptedBody: oneOf([
          `Chère/Cher ${state.player.name},\n\nMerci pour votre message. J'ai lu vos travaux récents avec beaucoup d'intérêt, et nos approches me semblent pouvoir dialoguer proprement.\n\nEssayons une collaboration ciblée sur votre prochain article. Je peux contribuer au cadrage, à quelques idées techniques, et à cette forme de calme qui rend parfois les rapporteurs moins hostiles.\n\nBien à vous,\n${colleague.name}`,
          `Chère/Cher ${state.player.name},\n\nLe projet me paraît prometteur. Je tourne autour de questions proches, et un article commun serait peut-être la manière la plus nette d'avancer.\n\nCollaborons, à condition de garder un périmètre discipliné.\n\nBien cordialement,\n${colleague.name}`,
          `Chère/Cher ${state.player.name},\n\nMerci pour l'invitation. Le projet me semble être un bon ajustement intellectuel, et je pense pouvoir renforcer l'argument.\n\nVous pouvez compter sur moi.\n\nBien à vous,\n${colleague.name}`,
        ]),
        rejectedSubject: "Re: collaboration possible",
        rejectedBody: oneOf([
          `Chère/Cher ${state.player.name},\n\nMerci pour votre proposition. Le projet paraît solide, mais mon calendrier est exceptionnellement serré cette année, et je préfère refuser plutôt que devenir le coauteur absent dont tout le monde parle à demi-mot.\n\nBien cordialement,\n${colleague.name}`,
          `Chère/Cher ${state.player.name},\n\nMerci d'avoir pensé à moi. Je crains de ne pas pouvoir accepter une nouvelle collaboration sans la faire mal.\n\nJe vous souhaite pleine réussite pour l'article.\n\nBien à vous,\n${colleague.name}`,
        ]),
      };
    }
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
  if (isFrench()) {
    return {
      kind: veryHigh ? "veryHigh" : "higher",
      chance: clamp((veryHigh ? 0.1 : 0.3) + friendBonus, 0, 0.9),
      bonus: (veryHigh ? 18 : 14) + friendQuality,
      malus: 0,
      acceptedSubject: "Re: collaboration possible",
      acceptedBody: oneOf([
        `Chère/Cher ${state.player.name},\n\nJe comprends pourquoi vous m'avez écrit. Le projet n'est pas sans intérêt, et avec un encadrement attentif il pourrait devenir publiable dans une revue sérieuse.\n\nJe veux bien collaborer, à condition de maintenir un niveau d'exigence élevé.\n\nCordialement,\n${colleague.name}`,
        `Chère/Cher ${state.player.name},\n\nVotre proposition est encore rugueuse, mais elle contient quelque chose. Je suis prêt(e) à participer si nous renforçons nettement la thèse centrale et si nous évitons toute impression de provincialisme.\n\nAvançons prudemment.\n\nCordialement,\n${colleague.name}`,
        `Chère/Cher ${state.player.name},\n\nJe ne prends pas souvent des projets à ce stade, mais il y a une idée ici. Je peux contribuer si nous restons disciplinés et ambitieux sur la revue cible.\n\nCordialement,\n${colleague.name}`,
      ]),
      rejectedSubject: "Re: collaboration possible",
      rejectedBody: oneOf([
        `Chère/Cher ${state.player.name},\n\nMerci pour votre message. Je reçois beaucoup d'invitations de ce type, et je dois être sélectif/sélective quant aux projets qui prolongent réellement mon programme de recherche actuel.\n\nJe ne pense pas que ce manuscrit soit le bon cadre.\n\nCordialement,\n${colleague.name}`,
        `Chère/Cher ${state.player.name},\n\nJ'ai parcouru rapidement le plan. Il me semble mieux adapté à une autre collaboration, peut-être avec quelqu'un disposant de davantage de temps pour un travail exploratoire.\n\nBonne continuation,\n${colleague.name}`,
        `Chère/Cher ${state.player.name},\n\nÀ ce stade, je ne vois pas de raison suffisamment forte pour associer mon nom au projet. J'espère que vous trouverez un coauteur plus approprié.\n\nCordialement,\n${colleague.name}`,
      ]),
    };
  }
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
        ? isFrench()
          ? `Chère/Cher ${state.player.name},\n\nBien sûr. C'était vraiment agréable d'échanger au congrès, et je serais très heureux/heureuse de construire quelque chose avec vous cette année.\n\nEnvoyez-moi le manuscrit quand vous pouvez. Je le lirai avec l'attention qu'il mérite.\n\nTrès cordialement,\n${colleague.name}`
          : `Dear ${state.player.name},\n\nOf course. It was good to talk at the congress, and I would be very happy to build something together this year.\n\nSend me the draft when you can. I will read it with the attention it deserves.\n\nWarmly,\n${colleague.name}`
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
      ? isFrench()
        ? `Chère/Cher ${state.player.name},\n\nJe suis sincèrement désolé(e), mais ce semestre est devenu administrativement déraisonnable. Je ne peux pas rejoindre le projet sans devenir inutile pour vous.\n\nN'hésitez pas à me redemander une autre fois. J'aimerais que nous trouvions le bon moment.\n\nTrès cordialement,\n${colleague.name}`
        : `Dear ${state.player.name},\n\nI am genuinely sorry, but this semester has become administratively overcommitted. I cannot join the project without becoming useless to you.\n\nPlease do ask again another time. I would like us to find the right occasion.\n\nWarmly,\n${colleague.name}`
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
    body: isFrench()
      ? `Chère/Cher ${state.player.name},\n\nCette collaboration semble nettement déséquilibrée en votre défaveur symbolique. La personne acceptera très probablement et pourra améliorer l'article, mais l'association risque d'être lue comme un choix stratégique peu flatteur et de vous coûter un peu de crédit.\n\nContinuez si vous voulez le bonus de qualité. Réfléchissez encore si le prestige compte davantage cette année.`
      : `Dear ${state.player.name},\n\nThis collaborator looks substantially less established than you. They are very likely to accept and can still improve the paper, but the association may be read as strategically uneven and cost you reputation.\n\nProceed if you want the quality boost. Reconsider if prestige matters more this year.`,
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
            ${BUILD ? `<div class="build">${BUILD}</div>` : ""}
          </div>
        </div>
        <button id="menuButton" class="sidebar-action">${buttonContent("menu", "Menu")}</button>
        <button id="languageButton" class="sidebar-action">${isFrench() ? "English" : "Français"}</button>
        <button id="feedbackButton" class="sidebar-action">${buttonContent("feedback", "Feedback")}</button>
        ${stats.length ? `<div class="stat-list">
          ${stats.map(([k, v]) => `<div class="stat"><span>${k}</span><strong>${v}</strong></div>`).join("")}
        </div>` : ""}
        ${
          player
            ? `<button id="seeCv" class="sidebar-action">${buttonContent("cv", "See my CV")}</button>
              `
            : ""
        }
      </aside>
      <section class="workbench">${content}</section>
      <aside class="rightbar">
        <div class="panel notebook-panel">
          <p class="panel-kicker">Informal record</p>
          <h3>Departmental Notes</h3>
          <div class="log-list">
            ${
              state.log.length
                ? state.log.map((item) => `<div class="log-item ${item.tone}">${item.message}</div>`).join("")
                : `<p class="empty">No departmental record yet.</p>`
            }
          </div>
        </div>
      </aside>
    </div>
  `;

  localizeDom(app);
  const cvButton = document.getElementById("seeCv");
  if (cvButton) cvButton.addEventListener("click", showCvModal);
  const menuButton = document.getElementById("menuButton");
  if (menuButton) menuButton.addEventListener("click", showMenuPanel);
  const languageButton = document.getElementById("languageButton");
  if (languageButton) languageButton.addEventListener("click", () => setLanguage(isFrench() ? "en" : "fr"));
  const feedbackButton = document.getElementById("feedbackButton");
  if (feedbackButton) feedbackButton.addEventListener("click", showFeedbackModal);
}

function renderProfile() {
  const domainOptions = Object.keys(DOMAINS);
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Profile</span>
          <h2>Researcher Profile</h2>
          <p>Set up the scholar who will brave grants, reviews, citations, and selective conferences.</p>
        </div>
      </div>
      <div class="form-grid">
        <div class="form-field">
          <label>Name</label>
          <input id="name" value="${rand(ACADEMIC_NAMES)}" />
        </div>
        <div class="form-field">
          <label>Institution</label>
          <input id="institution" value="${rand(displayInstitutionPool())}" />
        </div>
        <div class="form-field">
          <label>Domain</label>
          <select id="domain">${domainOptions.map((d) => `<option value="${d}">${d}</option>`).join("")}</select>
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
    subdomain.innerHTML = DOMAINS[domain.value].map((d) => `<option value="${d}">${d}</option>`).join("");
    localizeDom(subdomain);
  };
  domain.addEventListener("change", syncSubdomains);
  syncSubdomains();
  document.getElementById("randomName").addEventListener("click", () => {
    document.getElementById("name").value = rand(ACADEMIC_NAMES);
  });
  document.getElementById("randomInstitution").addEventListener("click", () => {
    document.getElementById("institution").value = rand(displayInstitutionPool());
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
    state.phase = "Welcome";
    log(tx(`${state.player.name} begins at ${state.player.institution}.`, `${state.player.name} prend ses fonctions à ${state.player.institution}.`), "good");
    renderCareerWelcome();
  });
}

function renderCareerWelcome() {
  state.phase = "Welcome";
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Appointment</span>
          <h2>Welcome to ${state.player.institution}</h2>
          <p>You just got a position at ${state.player.institution}! An exciting career awaits. Along the journey, you will try to publish papers in prestigious journals, apply for fancy grants, climb the academic ladder and reward yourself with vanity items that will make your colleagues jealous. For now, time to get to work in your office.</p>
        </div>
      </div>
      <div class="actions centered-actions">
        <button id="getToWork" class="primary">Get to work</button>
      </div>
    </div>
  `);
  document.getElementById("getToWork").addEventListener("click", beginYear);
}

function renderFunding() {
  state.phase = "Funding";
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
              <div class="funder-heading">
                <strong>${funder.acronym}</strong>
                <span>${funder.name}</span>
              </div>
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
  state.phase = "Career Review";
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
        <p>The committee will review your publications, reputation, external recognition, and the intangible aura of scholarly inevitability.</p>
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
  const rankName = localizeText(promotion.rank);
  if (accepted) {
    state.player.rank = promotion.rank;
    if (promotion.rank === "Full Professor") state.player.name = promoteDisplayName(state.player.name);
    state.promotionHistory.push({ rank: promotion.rank, year: state.year });
    showEmailModal({
      from: "Faculty Promotions Committee <appointments@university.example>",
      subject: "Outcome of your promotion application",
      body: isFrench()
        ? `Chère/Cher ${state.player.name},\n\nLa commission a le plaisir de vous informer que votre demande de promotion au rang de ${rankName} a reçu un avis favorable.\n\nVotre dossier scientifique, votre visibilité extérieure et votre capacité manifeste à faire exister autour de vous une activité de recherche plus vaste ont été appréciés. La promotion prend effet immédiatement.\n\nBien cordialement,\nLa commission des carrières`
        : `Dear ${state.player.name},\n\nThe committee is pleased to inform you that your application for promotion to ${promotion.rank} has been successful.\n\nYour scholarly record, external visibility, and evident capacity to support a larger research group were viewed favorably. The promotion takes effect immediately.\n\nSincerely,\nThe Faculty Promotions Committee`,
      onContinue: renderFunding,
    });
  } else {
    showEmailModal({
      from: "Faculty Promotions Committee <appointments@university.example>",
      subject: "Outcome of your promotion application",
      body: isFrench()
        ? `Chère/Cher ${state.player.name},\n\nLa commission a examiné votre demande de promotion au rang de ${rankName}. Après délibération, nous avons le regret de vous informer que le dossier n'a pas été retenu cette année.\n\nLa commission vous invite à consolider votre trajectoire par de nouvelles publications, des financements obtenus et des signes plus explicites de reconnaissance extérieure avant une prochaine candidature.\n\nBien cordialement,\nLa commission des carrières`
        : `Dear ${state.player.name},\n\nThe committee has reviewed your application for promotion to ${promotion.rank}. After careful deliberation, we regret to inform you that the application was not successful this year.\n\nThe committee encourages you to strengthen the dossier through further publications, grants, and external recognition before reapplying.\n\nSincerely,\nThe Faculty Promotions Committee`,
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
          <p>Choose one colleague to contact.</p>
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
                  <h3>${academicDisplayName(colleague.name, colleague.rank)}</h3>
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
    body: isFrench()
      ? `Chère/Cher ${state.player.name},\n\nCette revue semble nettement en dessous du niveau de l'article. Elle acceptera probablement le manuscrit, mais le bénéfice professionnel restera très faible : peu de visibilité, peu d'expérience, peu de citations.\n\nSi vous voulez une ligne discrète sur le CV, continuez. Si vous voulez que l'article compte vraiment, il faudrait peut-être viser plus haut.\n\nAppréciation actuelle : ${localizeText(fit.label)}.`
      : `Dear ${state.player.name},\n\nThis journal looks substantially below the level of the paper. It is likely to accept the manuscript, but the professional payoff will be very small: little reputation, little experience, and few citations.\n\nIf you want a quiet line on the CV, proceed. If you want the paper to matter, consider aiming higher.\n\nCurrent assessment: ${fit.label}.`,
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
  localizeDom(overlay);
  document.getElementById("closeJournalInfo").addEventListener("click", () => overlay.remove());
}

function journalEmail(result, final = false) {
  const greeting = `Dear ${state.player.name},`;
  const paper = `Manuscript: "${state.currentPaper.title}"`;
  if (isFrench()) {
    const frenchGreeting = `Chère/Cher ${state.player.name},`;
    const frenchPaper = `Manuscrit : « ${state.currentPaper.title} »`;
    const journalName = state.selectedJournal.name;
    if (result === "revision") {
      return oneOf([
        `${frenchGreeting}\n\nNous vous remercions d'avoir soumis votre manuscrit à ${journalName}.\n\n${frenchPaper}\n\nAprès consultation des rapporteurs, j'ai le plaisir de vous informer que le texte demeure en cours d'examen. Des révisions substantielles sont toutefois nécessaires avant qu'une décision finale puisse être prise. Merci de répondre avec précision aux remarques et de soumettre une version révisée.\n\nBien cordialement,\nLa rédaction`,
        `${frenchGreeting}\n\nNous avons reçu les rapports concernant votre soumission à ${journalName}.\n\n${frenchPaper}\n\nLes rapporteurs voient une promesse réelle dans le manuscrit, mais demandent également des clarifications, des analyses complémentaires et une justification plus ferme de la raison d'être de l'article. Nous vous invitons donc à soumettre une version révisée.\n\nCordialement,\nLe rédacteur en charge`,
        `${frenchGreeting}\n\nVotre manuscrit a terminé son premier tour d'évaluation à ${journalName}.\n\n${frenchPaper}\n\nLa décision est : révisions majeures. L'article n'est pas encore publiable en l'état, mais les rapports suggèrent qu'une réponse soigneuse pourrait le faire entrer dans la zone acceptable.\n\nBien à vous,\nLe secrétariat de rédaction`,
      ]);
    }
    if (result === "accepted") {
      return oneOf([
        `${frenchGreeting}\n\nJ'ai le plaisir de vous informer que votre manuscrit ${final ? "révisé " : ""}est accepté pour publication dans ${journalName}.\n\n${frenchPaper}\n\nLes rapporteurs ont jugé la contribution convaincante, et la rédaction se réjouit de voir ce travail rejoindre la littérature scientifique.\n\nBien cordialement,\nLa rédaction`,
        `${frenchGreeting}\n\nNous sommes heureux d'accepter votre soumission ${final ? "révisée " : ""}à ${journalName}.\n\n${frenchPaper}\n\nLe manuscrit est devenu une contribution claire et publiable. Vous recevrez prochainement les épreuves, les questions de production et les formulaires habituels qui rappellent que la victoire administrative n'est jamais complète.\n\nBien à vous,\nLe rédacteur en charge`,
        `${frenchGreeting}\n\nFélicitations. Votre manuscrit ${final ? "révisé " : ""}a été accepté par ${journalName}.\n\n${frenchPaper}\n\nL'équipe éditoriale estime que l'article intéressera nos lecteurs et retiendra l'attention des spécialistes du domaine.\n\nCordialement,\nLa rédaction`,
      ]);
    }
    return oneOf([
      `${frenchGreeting}\n\nNous vous remercions d'avoir soumis votre manuscrit ${final ? "révisé " : ""}à ${journalName}.\n\n${frenchPaper}\n\nAprès examen attentif, nous avons le regret de vous informer que nous ne pouvons pas accepter le manuscrit pour publication. Les rapporteurs soulèvent des réserves qui ne semblent pas pouvoir être levées dans le cadre de cette soumission.\n\nBien cordialement,\nLa rédaction`,
      `${frenchGreeting}\n\nL'évaluation de votre manuscrit ${final ? "révisé " : ""}à ${journalName} est maintenant terminée.\n\n${frenchPaper}\n\nMalheureusement, les rapports ne soutiennent pas une publication. Les rapporteurs ne sont pas convaincus que la contribution soit suffisamment robuste pour la revue.\n\nCordialement,\nLe secrétariat de rédaction`,
      `${frenchGreeting}\n\nMerci d'avoir donné à ${journalName} l'occasion d'examiner votre travail.\n\n${frenchPaper}\n\nJe suis au regret de vous informer que nous devons refuser le manuscrit. La décision n'a pas été prise à la légère, même si l'un des rapports était inhabituellement catégorique.\n\nBien cordialement,\nLa rédaction`,
    ]);
  }
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
      `${greeting}\n\nI am pleased to accept your ${final ? "revised " : ""}submission to ${state.selectedJournal.name}.\n\n${paper}\n\nThe manuscript has improved into a clear and publishable contribution. Please expect production queries, proofs, and the usual copyright forms.\n\nBest regards,\nThe Handling Editor`,
      `${greeting}\n\nCongratulations. Your ${final ? "revised " : ""}manuscript has been accepted by ${state.selectedJournal.name}.\n\n${paper}\n\nThe editorial team believes the paper will interest our readers and draw attention from specialists in the field.\n\nSincerely,\nThe Editor`,
    ]);
  }
  return oneOf([
    `${greeting}\n\nThank you for submitting your ${final ? "revised " : ""}manuscript to ${state.selectedJournal.name}.\n\n${paper}\n\nAfter careful consideration, I regret to inform you that we are unable to accept the manuscript for publication. The reviewers raised concerns that cannot be resolved within the scope of the current submission.\n\nSincerely,\nThe Editor`,
    `${greeting}\n\nWe have completed evaluation of your ${final ? "revised " : ""}manuscript at ${state.selectedJournal.name}.\n\n${paper}\n\nUnfortunately, the reports do not support publication. The reviewers were not convinced that the contribution is sufficiently robust for the journal.\n\nRegards,\nThe Editorial Office`,
    `${greeting}\n\nThank you for giving ${state.selectedJournal.name} the opportunity to consider your work.\n\n${paper}\n\nI am sorry to say that we must decline the manuscript. The decision was not made lightly, though one report was unusually emphatic.\n\nSincerely,\nThe Editor`,
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
          <p>${result === "accepted" ? "A happy year! Science has advanced today." : "The manuscript returns to the drawer, and you return to work."}</p>
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
  return "You are the face of the department's latest photo op.";
}

function careerMomentum(score) {
  const recentCitations = state.citationHistory.slice(-3).reduce((sum, item) => sum + item.citations, 0);
  const momentum = score + Math.min(6, Math.floor(recentCitations / 60)) + (state.player.rank === "Full Professor" ? 2 : 0);
  if (momentum >= 9) return "local star";
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
    <div class="screen annual-report">
      <div class="memo-heading">
        <span>Internal memorandum</span>
        <strong>Office of Academic Affairs</strong>
      </div>
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
      <p class="hint">Distinctions unlock in order once your citations are high enough.</p>
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
  if (state.year === state.yearLimit - 5 && !state.retirementWarningShown) {
    renderRetirementWarning();
    return;
  }
  if (state.year % 4 === 0) {
    renderCongressInvitation();
    return;
  }
  nextYear();
}

function renderRetirementWarning() {
  state.phase = "Retirement Warning";
  state.retirementWarningShown = true;
  shell(`
    <div class="screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Five Years Remaining</span>
          <h2>The final stretch begins</h2>
          <p>The department has quietly started using the word “legacy.” Five years remain before retirement, which is long enough to reshape a career and short enough for every decision to look intentional.</p>
        </div>
      </div>
      <section class="summary-card">
        <h3>Confidential note</h3>
        <p>Prestige now matters more visibly. Citations will keep accumulating, late collaborations can still change the ending, and one well-placed paper may become the story everyone remembers.</p>
      </section>
      <div class="actions centered-actions">
        <button id="continueFinalStretch" class="primary">Begin the final five years</button>
      </div>
    </div>
  `);
  document.getElementById("continueFinalStretch").addEventListener("click", nextYear);
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
    name: academicDisplayName(speaker.name, speaker.rank),
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

function conferenceDish(location) {
  return CONGRESS_DISHES[location] || "an ambitious local specialty";
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
          <p>This year, the Congress is held in ${program.location}. Researchers arrive with poster tubes, jet lag, and extremely specific complaints about session scheduling.</p>
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
  if (!state.congressSummary || !Array.isArray(state.congressSummary.talks)) {
    state.congressSummary = { talks: [], presentation: "", speakers: [], actions: [] };
  }
  const attendedIds = new Set(state.congressSummary.talks.map((talk) => talk.id));
  const talkCount = state.congressSummary.talks.length;
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Congress Talks</span>
          <h2>Which talk will you go to?</h2>
          <p>Choose two sessions. Professional consequences often begin as ordinary conversations.</p>
        </div>
      </div>
      <section class="summary-card">
        <h3>Talks attended</h3>
        ${
          state.congressSummary.talks.length
            ? `<ul>${state.congressSummary.talks.map((talk) => `<li>${talk.summary}</li>`).join("")}</ul>`
            : `<p class="hint">No talks attended yet.</p>`
        }
        <p class="hint">${talkCount} / 2 talks attended.</p>
      </section>
      <div class="program-list">
        ${program.speakers
          .map(
            (speaker) => `
              <article class="program-item">
                <h3>${speaker.name}</h3>
                <p>${speaker.label}</p>
                <strong>${speaker.title}</strong>
                <div class="actions">
                  <button data-talk-action="notes" data-speaker="${speaker.id}" ${attendedIds.has(speaker.id) ? "disabled" : ""}>Listen silently and take notes</button>
                  <button data-talk-action="question" data-speaker="${speaker.id}" ${attendedIds.has(speaker.id) ? "disabled" : ""}>Ask a question</button>
                  <button data-talk-action="chat" data-speaker="${speaker.id}" ${attendedIds.has(speaker.id) ? "disabled" : ""}>Go chat after the talk</button>
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

  if (!state.congressSummary || !Array.isArray(state.congressSummary.talks)) {
    state.congressSummary = { talks: [], presentation: "", speakers: [], actions: [] };
  }
  state.congressSummary.talks.push({ id: speaker.id, speaker: speaker.name, action, summary });
  state.congressSummary.speakers = state.congressSummary.talks.map((talk) => talk.speaker);
  state.congressSummary.actions = state.congressSummary.talks.map((talk) => talk.action);
  state.congressSummary.speaker = state.congressSummary.speakers.join("; ");
  state.congressSummary.action = state.congressSummary.actions.join("; ");
  state.congressSummary.talk = state.congressSummary.talks.map((talk) => talk.summary).join(" ");
  if (state.congressSummary.talks.length < 2) {
    renderCongressTalkChoice();
    return;
  }
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
  const dinnerDish = conferenceDish(state.congressProgram?.location);
  shell(`
    <div class="screen congress-screen">
      <div class="screen-head">
        <div>
          <span class="phase-chip">Congress Complete</span>
          <h2>Already the end of the congress</h2>
          ${
            state.congressSummary?.talks?.length
              ? `<ul>${state.congressSummary.talks.map((talk) => `<li>${talk.summary}</li>`).join("")}</ul>`
              : `<p>${state.congressSummary?.talk || ""}</p>`
          }
          <p>${state.congressSummary?.presentation || ""}</p>
          <p>The conference dinner was truly magnificent this year. They even served ${dinnerDish}. You made a joke about the registration fee being so high because of the dinner, and it made everyone laugh at your table. Now it is time to go home and get back to work.</p>
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
        speaker: state.congressSummary.speaker || state.congressSummary.speakers?.join("; "),
        action: state.congressSummary.action || state.congressSummary.actions?.join("; "),
        talk: state.congressSummary.talk || state.congressSummary.talks?.map((talk) => talk.summary).join(" "),
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

function finalColleagueRanking() {
  const playerScore = careerScore();
  const ranking = [
    ...yearlyColleagues(),
    {
      id: "player",
      name: academicDisplayName(state.player.name, state.player.rank),
      institution: state.player.institution,
      rank: state.player.rank,
      score: playerScore,
      label: retirementTitle(),
      player: true,
    },
  ]
    .map((colleague) => ({
      ...colleague,
      score: colleague.player ? playerScore : colleague.score || colleagueScore(colleague),
    }))
    .sort((a, b) => b.score - a.score);

  return {
    ranking,
    playerPosition: ranking.findIndex((colleague) => colleague.player) + 1,
  };
}

function renderCareerEnd() {
  state.phase = "Career End";
  const h = hIndex();
  const achievements = capstoneAchievements();
  const timeline = careerTimeline();
  const finalRanking = finalColleagueRanking();
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
        <h3>Global Colleague Ranking</h3>
        <p>You retire at position <strong>#${finalRanking.playerPosition}</strong> out of ${finalRanking.ranking.length} visible colleagues.</p>
        <div class="ranking-list final-ranking">
          ${finalRanking.ranking
            .map(
              (colleague, index) => `
                <div class="ranking-row ${colleague.player ? "player-row" : ""}">
                  <strong>${index + 1}</strong>
                  <div>
                    <h3>${academicDisplayName(colleague.name, colleague.rank)}${colleague.friend ? " · friend" : ""}</h3>
                    <p>${colleague.rank}, ${colleague.institution}</p>
                  </div>
                  <span>${colleague.player ? "You" : colleague.label}</span>
                  <em>${colleague.player ? retirementTitle() : "Colleague"}</em>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
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
  if (state.phase === "Welcome") {
    renderCareerWelcome();
    return;
  }
  if (state.phase === "Career Review" && state.pendingPromotion) {
    renderPromotionOffer(state.pendingPromotion);
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
  if (state.phase === "Retirement Warning") {
    renderRetirementWarning();
    return;
  }
  if (state.phase === "Retirement") {
    renderRetirementInvitation();
    return;
  }
  renderYearSummary();
}

renderProfile();
maybeShowPlaytesterNote();
