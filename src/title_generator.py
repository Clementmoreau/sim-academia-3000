import random

from src.data import TITLE_PATTERNS, KEYWORDS

def generate_paper_title(subdomain):
        """Generate a fancy, domain-specific, slightly humorous research title."""

        # Default to a generic topic if not found
        topic_list = KEYWORDS.get(subdomain, ["Abstract Models", "Computational Frameworks", "Empirical Studies"])
        
        key_term = random.choice(topic_list)
        key_term2 = random.choice(topic_list)
        while len(topic_list) > 1 and key_term == key_term2:  # Ensure variety
            key_term2 = random.choice(topic_list)

        concept = random.choice(topic_list)
        adj = random.choice(["Novel", "Radical", "Surprising", "Controversial", "Groundbreaking"])

        title = random.choice(TITLE_PATTERNS).format(
            key_term=key_term, key_term2=key_term2, adj=adj, concept=concept, subdomain=subdomain
        )

        return title
