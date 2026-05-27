import random

from src.data import FUNDING_BODIES, ACCEPT_MESSAGES, REJECT_MESSAGES

def attempt_application_gui(funder):
    """
    Takes a single 'funder' dict with keys: 'name', 'grant', 'accept_prob'
    Returns (True, message) if accepted, (False, message) if rejected
    """
    if random.random() < funder["accept_prob"]:
        return True, random.choice(ACCEPT_MESSAGES)
    else:
        return False, random.choice(REJECT_MESSAGES)

def apply_for_funding():
    funding_bodies = FUNDING_BODIES
    
    # Witty, smug acceptance messages.
    accept_messages = [
        "Your proposal has been deemed sufficiently groundbreaking by our panel of overcaffeinated experts.",
        "After rigorous deliberation (and one too many espressos), we find your ideas revolutionary enough to fund.",
        "Bravo! Your submission has passed our labyrinthine review process with flying colors.",
        "Your research vision aligns impeccably with our insatiable appetite for novelty. Funding approved."
    ]
    
    # Witty, bureaucratic rejection messages.
    reject_messages = [
        "Regrettably, your proposal fails to meet our painfully high standards—please revisit your hypothesis.",
        "Our committee found your submission somewhat pedestrian. Consider a radical rewrite of your methodology.",
        "Alas, your application did not elicit the requisite awe among our experts. We must decline.",
        "Your pitch appears to be missing that ineffable spark of genius. We suggest a thorough reconsideration."
    ]
    
    while funding_bodies:
        print("\nAvailable Funding Bodies:")
        for i, fb in enumerate(funding_bodies, start=1):
            print(f"  {i}. {fb['name']} (Grant: ${fb['grant']}, Acceptance Rate: {int(fb['accept_prob']*100)}%)")
        choice = input("Choose a funding body to apply for funding (or press Enter to skip funding): ").strip()
        if not choice:
            print("No funding applied. Starting with $0.")
            return 0
        try:
            index = int(choice) - 1
            if index < 0 or index >= len(funding_bodies):
                print("Invalid choice. Try again.")
                continue
            fb = funding_bodies[index]
            if random.random() < fb["accept_prob"]:
                message = random.choice(accept_messages)
                print(f"\n[{fb['name']}] {message}")
                print(f"You have been awarded ${fb['grant']} in funding!")
                return fb["grant"]
            else:
                message = random.choice(reject_messages)
                print(f"\n[{fb['name']}] {message}")
                # Remove this funding body from the list so the player can't reapply.
                funding_bodies.pop(index)
                if funding_bodies:
                    print("Please try another funding body.")
                else:
                    print("No more funding bodies available. You start with $0.")
        except ValueError:
            print("Invalid input. Please enter the number corresponding to your choice.")
    
    return 0
