DOMAINS = {
    "Physics": ["Soft Matter Physics", "Astrophysics", "Quantum Mechanics"],
    "Biology": ["Molecular Biology", "Genetics", "Ecology"],
    "Computer Science": ["AI", "HCI", "Data Science"],
    "Economics": ["Behavioral Economics", "Macroeconomics", "Financial Economics"]
}

INSTITUTIONS = [
    "Calamity College",
    "Beacon University",
    "Galactic Institute of Tech",
    "Solstice State",
    "Royal Academy of Mysteries"
]

FUNDING_BODIES = [
    {"name": "The Royal Society of Epistemic Endeavors", "grant": 500, "accept_prob": 0.4},
    {"name": "Institute for Avant-Garde Research", "grant": 300, "accept_prob": 0.5},
    {"name": "Bureau of Scholarly Ventures", "grant": 700, "accept_prob": 0.3},
    {"name": "Academia’s Aegis Foundation", "grant": 400, "accept_prob": 0.6},
    {"name": "The Peer Review Consortium", "grant": 200, "accept_prob": 0.7},
    {"name": "Mysterious Reviewer #2 Endowment", "grant": 450, "accept_prob": 0.45},
    {"name": "The Oracular Board of Impactful Grants", "grant": 900, "accept_prob": 0.25},
    {"name": "Society for Incremental Discoveries", "grant": 250, "accept_prob": 0.8},
    {"name": "Eureka Moments Anonymous", "grant": 650, "accept_prob": 0.4},
    {"name": "Infinite Revisions Fellowship", "grant": 1000, "accept_prob": 0.2}
]

ALLOC_CATEGORIES = [
    (
        "Travel",
        [
            {"option": "Nothing - Stare longingly at travel brochures", "cost": 0, "quality": 0},
            {"option": "Discount Bus Tickets - The budget scholar's ride", "cost": 50, "quality": 1},
            {"option": "Economy Flights - Standard fare for the diligent", "cost": 150, "quality": 2},
            {"option": "Business Class - Where legroom meets ambition", "cost": 350, "quality": 4},
            {"option": "First Class & Lounge Access - Because your ideas deserve the red carpet", "cost": 600, "quality": 6}
        ]
    ),
    (
        "Student Stipends",
        [
            {"option": "Nothing - Solo research is the pinnacle of genius", "cost": 0, "quality": 0},
            {"option": "Hire Interns - Fresh minds (and free coffee)", "cost": 75, "quality": 1},
            {"option": "Graduate Assistants - Adept, yet affordably mediocre", "cost": 200, "quality": 3},
            {"option": "PhD Candidates - Competent and slightly overpaid", "cost": 400, "quality": 5},
            {"option": "Top-Tier Postdocs - The crème de la crème (at a premium)", "cost": 700, "quality": 7}
        ]
    ),
    (
        "Lab Equipment",
        [
            {"option": "Nothing - A true academic makes do with pipettes", "cost": 0, "quality": 0},
            {"option": "Basic Instruments - You get by, barely", "cost": 100, "quality": 1},
            {"option": "Upgraded Tools - Decent precision for serious work", "cost": 300, "quality": 3},
            {"option": "Advanced Machinery - A leap into modernity", "cost": 600, "quality": 5},
            {"option": "State-of-the-Art Facilities - Because groundbreaking research demands opulence", "cost": 1000, "quality": 8}
        ]
    ),
    (
        "Conference Attendance",
        [
            {"option": "Nothing - Skip the small talk and get back to work", "cost": 0, "quality": 0},
            {"option": "Local Symposium - Minimal networking, minimal cost", "cost": 50, "quality": 1},
            {"option": "National Conference - Moderate exposure and moderate expense", "cost": 200, "quality": 3},
            {"option": "International Conference - Where you'll hobnob with luminaries", "cost": 500, "quality": 5},
            {"option": "Keynote Invitation - Command the stage and the spotlight", "cost": 800, "quality": 7}
        ]
    ),
    (
        "Outsourced Data Analysis",
        [
            {"option": "Nothing - Crunch the numbers yourself, like a true academic", "cost": 0, "quality": 0},
            {"option": "Undergraduate Assistant - Cheap, but error-prone", "cost": 75, "quality": 1},
            {"option": "Freelance Statistician - Reliable, if a bit generic", "cost": 250, "quality": 3},
            {"option": "Professional Data Scientist - High-quality insights at a cost", "cost": 500, "quality": 5},
            {"option": "Renowned Analytics Firm - The best in the business (if you can afford it)", "cost": 900, "quality": 8}
        ]
    )
]

VANITY_ITEMS = [
    {"name": "Monogrammed Lab Coat", "cost": 20},
    {"name": "Department Mug with Your Name", "cost": 40},
    {"name": "Membership in Prestigious Society", "cost": 80},
    {"name": "Unlimited Conference Lanyard", "cost": 120},
    {"name": "Editorial Board Seat", "cost": 180},
    {"name": "Honorary Degree from Obscure U.", "cost": 250},
    {"name": "Lifetime Achievement Award", "cost": 400},
    {"name": "Lecture Hall Named After You", "cost": 600},
    {"name": "National Academy Fellowship", "cost": 900},
    {"name": "Genius-Emperor-of-Scholarship Emblem", "cost": 1500}
]

COLOR_PALETTE = {
    "main": "#FFFACD",       # LemonChiffon
    "funding": "#D9EAD3",    # light greenish
    "allocation": "#FCE5CD", # light peach
    "journals": "#CFE2F3",   # light bluish
    "vanity": "#FFE6FE",     # light pink-lavender
    "popup": "#FFFEF0"       # for small message popups, etc.
}

FUNDING_CATEGORIES = dict(ALLOC_CATEGORIES)

JOURNAL_TEMPLATES = [
        {"template": "The Sketchy Bulletin of {subdomain}", "prestige": 1, "threshold": 20},
        {"template": "Quarterly Journal of Questionable {subdomain}", "prestige": 2, "threshold": 30},
        {"template": "Annals of Amateur {subdomain}", "prestige": 3, "threshold": 40},
        {"template": "Journal of Emerging {subdomain} Insights", "prestige": 4, "threshold": 50},
        {"template": "National Digest of {subdomain} Studies", "prestige": 5, "threshold": 60},
        {"template": "International Review of {subdomain} Research", "prestige": 6, "threshold": 70},
        {"template": "Prestigious {subdomain} Reports", "prestige": 7, "threshold": 80},
        {"template": "Elite Forum of {subdomain} Scholarship", "prestige": 8, "threshold": 90},
        {"template": "Smug Review of {subdomain} Masterpieces", "prestige": 9, "threshold": 100},
        {"template": "The Overlord's Journal of {subdomain} Excellence", "prestige": 10, "threshold": 110},
    ]

# Keep your original messages from apply_for_funding()
ACCEPT_MESSAGES = [
        "Your proposal has been deemed sufficiently groundbreaking by our panel of overcaffeinated experts.",
        "After rigorous deliberation (and one too many espressos), we find your ideas revolutionary enough to fund.",
        "Bravo! Your submission has passed our labyrinthine review process with flying colors.",
        "Your research vision aligns impeccably with our insatiable appetite for novelty. Funding approved."
    ]

REJECT_MESSAGES = [
        "Regrettably, your proposal fails to meet our painfully high standards—please revisit your hypothesis.",
        "Our committee found your submission somewhat pedestrian. Consider a radical rewrite of your methodology.",
        "Alas, your application did not elicit the requisite awe among our experts. We must decline.",
        "Your pitch appears to be missing that ineffable spark of genius. We suggest a thorough reconsideration."
    ]
    
TITLE_PATTERNS = [
    "{key_term} and {key_term2}: A {adj} Approach to {concept}",
    "On the Role of {key_term} in {concept}",
    "Revisiting {key_term}: Implications for {concept}",
    "The {adj} Side of {key_term}: Exploring {concept}",
    "{key_term} vs. {key_term2}: A Theoretical Battle",
    "Why {key_term} Matters: {concept} in {subdomain}",
    "{key_term} Under Stress: {concept} in Extreme Conditions",
    "Do {key_term}s Dream of {key_term2}? A {adj} Perspective on {concept}",
]

KEYWORDS = {
    "Soft Matter Physics": ["Colloids", "Viscosity", "Nonlinear Elasticity", "Fluid Instability", "Jamming", "Foams"],
    "Astrophysics": ["Dark Matter", "Black Holes", "Cosmic Inflation", "Exoplanets", "Gravitational Waves"],
    "Quantum Mechanics": ["Wavefunctions", "Entanglement", "Superposition", "Quantum Computing"],
    "Molecular Biology": ["DNA Replication", "Protein Folding", "Gene Expression", "Epigenetics"],
    "Genetics": ["CRISPR", "Mutation Rates", "Genome Editing", "Mendelian Traits"],
    "Ecology": ["Biodiversity", "Food Webs", "Habitat Fragmentation", "Invasive Species"],
    "AI": ["Neural Networks", "Bayesian Inference", "Reinforcement Learning", "Generative Models"],
    "HCI": ["User Experience", "Tactile Feedback", "Interface Design", "Cognitive Load"],
    "Data Science": ["Feature Engineering", "Causal Inference", "Clustering", "Prediction Pipelines"],
    "Behavioral Economics": ["Prospect Theory", "Cognitive Biases", "Game Theory", "Herd Behavior"],
    "Macroeconomics": ["Inflation", "Fiscal Multipliers", "Business Cycles", "Central Banking"],
    "Financial Economics": ["Asset Pricing", "Market Microstructure", "Risk Premiums", "Portfolio Choice"],
}
