from src.title_generator import generate_paper_title

class ResearchPaper:
    def __init__(self, topic, quality_factor, publication_year=None):
        self.topic = topic
        self.quality_factor = quality_factor
        self.publication_year = publication_year  # Set when published
        self.citation_rate = 0  # Citations per year
        self.citation_years_remaining = 0
        self.co_authors = []  # (Optional for future extension)
        self.journal = None   # To be set on submission
        self.total_citations = 0

    def modify_quality(self, change):
        self.quality_factor += change
        if self.quality_factor < 0:
            self.quality_factor = 0

    def quality_description(self):
        """Return a qualitative description of the paper quality instead of a raw score."""
        if self.quality_factor >= 80:
            return "This paper might redefine the field!"
        elif self.quality_factor >= 60:
            return "A solid contribution, sure to attract interest."
        elif self.quality_factor >= 40:
            return "Respectable work, but don't expect fireworks."
        else:
            return "There's a reason journals have rejection buttons..."

    @staticmethod
    def generate_title(domain_or_subdomain, subdomain=None):
        return generate_paper_title(subdomain or domain_or_subdomain)
