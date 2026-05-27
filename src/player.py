import random

class Player:
    def __init__(self, name):
        self.name = name
        self.rank = "Assistant"
        self.reputation = 0
        self.experience = 1
        self.papers_published = 0
        self.domain = None
        self.subdomain = None
        self.publications = []  # List of accepted papers
        self.vanity_items = []  # Purchased status symbols
        self.funds = 0

    def set_research_area(self, domain, subdomain):
        self.domain = domain
        self.subdomain = subdomain

    def calculate_base_quality(self, novelty=None):
        if novelty is None:
            novelty = random.uniform(0, 1)
        return 100 + (2 * self.experience * (1 + novelty))

    def update_status(self, result, delta, journal, log_func=None):
        """
        Updates the player's experience and reputation based on the submission result.
        'delta' is the difference between paper quality and the journal threshold.
        'journal' is the Journal object that accepted/rejected the paper.
        'log_func' is an optional callback to log messages to the GUI (e.g. self.write_message).
        """
        if result == "accepted":
            # If the paper is far above threshold, only a small bonus
            if delta >= 5:
                xp = 2
                rep = 1
            # If it's roughly in range, we give a bigger reward
            elif -5 <= delta < 5:
                xp = journal.prestige + 2
                rep = journal.prestige // 2
            else:
                # If far below threshold but somehow accepted
                xp = 1
                rep = -(abs(delta) // 2)

            self.experience += xp
            self.reputation += rep
            if log_func:
                log_func(f"Paper accepted. Experience +{xp}, Reputation {rep:+}")

        elif result == "revision":
            # For major revision, we do a small positive gain
            xp = 2
            rep = 1
            self.experience += xp
            self.reputation += rep
            if log_func:
                log_func(f"Paper needs revision. Experience +{xp}, Reputation {rep:+}")

        elif result == "rejected":
            # If a rejection occurs, we apply a small reputation penalty and +1 XP
            if delta < -5:
                rep_loss = 5
            elif delta < 0:
                rep_loss = 2
            else:
                rep_loss = 1
            self.reputation = max(0, self.reputation - rep_loss)
            self.experience += 1
            if log_func:
                log_func(f"Paper rejected. Reputation -{rep_loss}, Experience +1")

        # If you want to cap rep/experience or do rank promotions, you can do it here

        self.papers_published = len(self.publications)
        # Rank progression:
        if self.papers_published >= 3 and self.rank == "Assistant":
            self.rank = "Associate"
            print(f"🎉 {self.name} has been promoted to Associate Professor!")
        elif self.papers_published >= 6 and self.rank == "Associate":
            self.rank = "Full Professor"
            print(f"🌟 {self.name} is now a Full Professor!")
