import random

from src.data import JOURNAL_TEMPLATES

class Journal:
    def __init__(self, name, prestige, acceptance_threshold):
        self.name = name
        self.prestige = prestige
        self.acceptance_threshold = acceptance_threshold

    def review_submission(self, paper):
        """Decides if a paper is accepted, rejected, or sent for further review."""
        # Slight random shift to simulate uncertain review difficulty
        delta = paper.quality_factor - self.acceptance_threshold
        effective_threshold = self.acceptance_threshold + random.randint(-5, 5)

        # Compare paper quality to threshold
        if paper.quality_factor >= effective_threshold + 10:
            result = "accepted"
        elif paper.quality_factor < effective_threshold - 15:
            result = "rejected"
        else:
            result = "revision"
        return result, delta

    def final_review_submission(self, paper):
        """
        A final pass that can only return accepted or rejected, ignoring 'revision'.
        """
        # e.g. do a threshold check again
        effective_threshold = self.acceptance_threshold + random.randint(-3, 3)
        if paper.quality_factor >= effective_threshold:
            return ("accepted", self.prestige)
        else:
            return ("rejected", -self.prestige // 2)


def generate_journals(player):
    
    journals = []
    for tmpl in JOURNAL_TEMPLATES:
        jname = tmpl["template"].format(subdomain=player.subdomain)
        threshold = tmpl["threshold"] + random.randint(-5, 5)
        journals.append(Journal(jname, tmpl["prestige"], threshold))
    return journals
