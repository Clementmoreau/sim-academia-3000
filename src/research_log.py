import random

def prepare_research_events():
    """
    Returns a randomized list of research events.
    Each event is a tuple (description, quality_change).
    """
    events = [
        ("Experiments are not going well, quality -2", -2),
        ("You had a great meeting with your collaborators, quality +4", +4),
        ("Your grant proposal received unexpected praise, quality +3", +3),
        ("A crucial dataset turned out to be flawed, quality -3", -3),
        ("You wasted a week troubleshooting a coding bug, quality -1", -1),
        ("A breakthrough in your model! Quality +5", +5),
        ("Nothing happened this week", 0),
        ("Lab equipment malfunctioned, quality -2", -2),
        ("You were invited to an exclusive conference, quality +2", +2),
        ("A rival group published similar results, quality -3", -3)
    ]

    num_events = random.randint(5, 7)
    selected = random.choices(events, k=num_events)
    return selected

def prepare_revision_events():
    """
    Returns a list of (event_text, quality_change) for 3-4 revision steps.
    """
    events = [
        ("A reviewer demands more references to their own work", -1),
        ("Minor clarifications requested", +1),
        ("Confusion over your figures", -2),
        ("Positive feedback: 'promising approach'", +1),
        ("Your co-author disappears during the revision process", -1),
        ("Reviewer wonders if your entire methodology is flawed", -2),
        ("Friendly reviewer helps clarify your main argument", +2),
        ("The editor requests a brand-new analysis", -3),
    ]
    num = random.randint(3, 4)
    chosen = []
    for _ in range(num):
        msg, change = random.choice(events)
        chosen.append((f"📑 {msg}, quality {change:+d}", change))
    return chosen

