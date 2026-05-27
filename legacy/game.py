import random
import time

class Player:
    def __init__(self, name):
        self.name = name
        self.rank = "Assistant"
        self.reputation = 0
        self.funds = 1000
        self.experience = 1
        self.papers_published = 0

    def make_decision(self):
        """Player chooses research parameters."""
        # Interactive topic choice
        topics = ["Physics", "Biology", "Computer Science", "Economics"]
        print("\nChoose your research topic:")
        for i, topic in enumerate(topics, start=1):
            print(f"  {i}. {topic}")
        topic_choice = input("Enter the number of your chosen topic: ").strip()
        try:
            topic_index = int(topic_choice) - 1
            if topic_index not in range(len(topics)):
                print("Invalid choice, defaulting to Physics.")
                topic = "Physics"
            else:
                topic = topics[topic_index]
        except ValueError:
            print("Invalid input, defaulting to Physics.")
            topic = "Physics"
        
        # For duration and funds, we'll keep them random for now.
        decision = {
            "topic": topic,
            "duration": random.randint(1, 12),  # in months
            "funds_allocated": random.randint(100, 500)
        }
        return decision

    def create_paper(self, decision):
        """Create a ResearchPaper based on the decision."""
        paper = ResearchPaper(
            topic=decision["topic"],
            duration=decision["duration"],
            funds_allocated=decision["funds_allocated"],
            researcher_experience=self.experience
        )
        paper.calculate_quality()
        return paper

    def update_status(self, result):
        """Update reputation, experience, and check for career promotion."""
        if result == "accepted":
            self.reputation += 10
            self.experience += 1
            self.papers_published += 1
            print(f"[INFO] Paper accepted! Reputation: {self.reputation}, Experience: {self.experience}")
        elif result == "revision":
            self.reputation += 2
            print(f"[INFO] Revision requested. Reputation: {self.reputation}")
        else:
            self.reputation -= 5
            print(f"[INFO] Paper rejected. Reputation: {self.reputation}")

        # Promotion logic
        if self.papers_published >= 3 and self.rank == "Assistant":
            self.rank = "Associate"
            print(f"🎉 {self.name} has been promoted to Associate Professor!")
        elif self.papers_published >= 6 and self.rank == "Associate":
            self.rank = "Full Professor"
            print(f"🌟 {self.name} is now a Full Professor!")

class ResearchPaper:
    def __init__(self, topic, duration, funds_allocated, researcher_experience):
        self.topic = topic
        self.duration = duration
        self.funds_allocated = funds_allocated
        self.researcher_experience = researcher_experience
        self.quality_factor = 0
        self.novelty = random.uniform(0, 1)

    def calculate_quality(self):
        """Compute initial quality based on research choices."""
        base_quality = (self.duration * 0.5) + (self.funds_allocated / 100) + (self.researcher_experience * 2)
        self.quality_factor = base_quality * (1 + self.novelty)

    def modify_quality(self, change):
        """Modify paper quality based on research events."""
        self.quality_factor += change
        if self.quality_factor < 0:
            self.quality_factor = 0

class Journal:
    def __init__(self, name, prestige, acceptance_threshold):
        self.name = name
        self.prestige = prestige
        self.acceptance_threshold = acceptance_threshold

    def review_submission(self, paper):
        """Decide if a paper is accepted, needs revision, or is rejected."""
        quality = paper.quality_factor
        if quality >= self.acceptance_threshold:
            return "accepted"
        elif quality >= self.acceptance_threshold * 0.8:
            return "revision"
        else:
            return "rejected"

def research_log(paper):
    """Simulate a research phase with random events affecting paper quality."""
    events = [
        ("Experiments are not going well, quality -2", -2),
        ("You had a great meeting with your collaborators, quality +4", +4),
        ("Your computer crashed and you lost some data, quality -3", -3),
        ("Your hypothesis was correct! Quality +5", +5),
        ("A reviewer from a past paper criticizes your work online, quality -1", -1),
        ("You received unexpected funding for better equipment, quality +3", +3),
        ("A rival team published a similar paper first, quality -2", -2),
        ("Your supervisor praises your work in a conference, quality +3", +3),
        ("Your experiments yield better results than expected, quality +4", +4),
        ("You spent too much time fixing figures, quality -2", -2)
    ]
    
    print("\n--- Research Log ---")
    # Choose a random number of events between 5 and 7
    for _ in range(random.randint(5, 7)):
        event, change = random.choice(events)
        print(event)
        paper.modify_quality(change)
        input("Press Enter to continue your research...")  # Wait for user input

def choose_journal():
    """Let the player choose from three journals with varying prestige."""
    print("\nChoose a journal to submit your paper:")
    print("  1. Local Journal (Low prestige, easier acceptance)")
    print("  2. National Journal (Medium prestige)")
    print("  3. International Journal (High prestige, tougher review)")
    
    choice = input("Enter the number of your chosen journal: ").strip()
    if choice == "1":
        # Local Journal: lower prestige, lower threshold
        return Journal(name="Local Journal of Research", prestige=3, acceptance_threshold=12)
    elif choice == "3":
        # International Journal: higher prestige, higher threshold
        return Journal(name="International Journal of Science", prestige=7, acceptance_threshold=18)
    else:
        # Default to National Journal
        return Journal(name="National Journal of Advanced Studies", prestige=5, acceptance_threshold=15)

# GAME LOOP
def main():
    player_name = input("Enter your name, esteemed academic: ").strip()
    player = Player(name=player_name if player_name else "Dr. Ada")
    
    for year in range(1, 11):  # Simulate up to a 10-year academic career
        print(f"\n===== Year {year} =====")
        
        # Player makes research decisions
        decision = player.make_decision()
        paper = player.create_paper(decision)
        print(f"\nYou decided to research {paper.topic}.")
        print(f"Initial Quality: {paper.quality_factor:.2f}")
        
        # Research log phase
        research_log(paper)
        
        # Final paper quality before submission
        print(f"\n[FINAL PAPER] Adjusted Quality: {paper.quality_factor:.2f}")
        
        # Player chooses a journal to submit to
        journal = choose_journal()
        result = journal.review_submission(paper)
        print(f"\n[RESULT] Your paper submitted to {journal.name} was {result}.")
        
        # Update player stats
        player.update_status(result)
        
        # Check if player has reached full professor
        if player.rank == "Full Professor":
            print(f"\n🎓 Congratulations! {player.name} has reached Full Professor status in {year} years!")
            break
        
        input("\nPress Enter to proceed to the next year...")

if __name__ == "__main__":
    main()
