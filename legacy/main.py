import random
from player import Player
from journal import Journal
from research_log import research_log
from research_log import mini_research_log
from funding import apply_for_funding
from allocation import allocate_funding
from research_paper import ResearchPaper
from title_generator import generate_paper_title

# Global citation counter and list of published papers.
global_citations = 0
published_papers = []

def choose_journal(player, paper):
    """
    Let the player choose a journal from the complete list.
    A risk message is displayed for each journal based on the difference
    between the paper's quality and the journal's acceptance threshold.
    """
    # Define all 10 journal templates with a more varied threshold spread.
    journal_templates = [
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
    
    # Build the full list of journals with names using the player's subdomain.
    journals = []
    for tmpl in journal_templates:
        journal_name = tmpl["template"].format(subdomain=player.subdomain)
        # Add a small random variation to the threshold to simulate review uncertainty.
        threshold = tmpl["threshold"] + random.randint(-5, 5)
        journals.append(Journal(journal_name, tmpl["prestige"], threshold))
    
    print("\nAvailable Journals:")
    for i, journal in enumerate(journals, start=1):
        # Determine risk message based on the paper's quality relative to the journal threshold.
        quality = paper.quality_factor
        threshold = journal.acceptance_threshold
        if quality < threshold - 15:
            risk_message = "High risk: Your paper may be underqualified."
        elif quality < threshold - 5:
            risk_message = "Moderate risk: It might be a stretch."
        elif quality > threshold + 15:
            risk_message = "Low risk, but your paper could be overkill."
        else:
            risk_message = "Safe choice: A good match."
        print(f"  {i}. {journal.name} (Threshold: {threshold}, {risk_message})")
    
    choice = input("Enter the number of your chosen journal: ").strip()
    try:
        index = int(choice) - 1
        if index < 0 or index >= len(journals):
            print("Invalid choice. Defaulting to the first journal.")
            return journals[0]
        return journals[index]
    except ValueError:
        print("Invalid input. Defaulting to the first journal.")
        return journals[0]

def update_citations(current_year):
    global global_citations, published_papers
    for paper in published_papers:
        if paper.citation_years_remaining > 0:
            paper.citation_years_remaining -= 1
            citations_this_year = paper.citation_rate
            global_citations += citations_this_year
            print(f"Paper '{paper.topic}' generated {citations_this_year} citations this year.")
    print(f"Total citations so far: {global_citations}")

def check_vanity_items(player):
    global global_citations
    vanity_options = [
        {"item": "Member of the Prestigious Society", "cost": 50},
        {"item": "Board Membership at Elite Journal", "cost": 100},
        {"item": "Lifetime Achievement Award", "cost": 200}
    ]
    print("\nVanity Items Available:")
    for i, opt in enumerate(vanity_options, start=1):
        print(f"  {i}. {opt['item']} (Requires {opt['cost']} citations)")
    choice = input("Enter the number of the vanity item to purchase, or press Enter to skip: ").strip()
    if choice:
        try:
            idx = int(choice) - 1
            if idx < 0 or idx >= len(vanity_options):
                print("Invalid choice.")
            else:
                option = vanity_options[idx]
                if global_citations >= option["cost"]:
                    global_citations -= option["cost"]
                    player.vanity_items.append(option["item"])
                    print(f"Purchased vanity item: {option['item']}")
                else:
                    print("Not enough citations to purchase that item.")
        except ValueError:
            print("Invalid input.")
    else:
        print("No vanity items purchased.")

def main():
    global published_papers, global_citations
    player_name = input("Enter your name, esteemed academic: ").strip()
    player = Player(name=player_name if player_name else "Dr. Ada")
    
    # Research area selection:
    domains = {
        "Physics": ["Soft Matter Physics", "Astrophysics", "Quantum Mechanics"],
        "Biology": ["Molecular Biology", "Genetics", "Ecology"],
        "Computer Science": ["Artificial Intelligence", "Human-Computer Interaction", "Data Science"],
        "Economics": ["Behavioral Economics", "Macroeconomics", "Financial Economics"]
    }
    print("Choose a research domain:")
    domain_list = list(domains.keys())
    for i, domain in enumerate(domain_list, start=1):
        print(f"  {i}. {domain}")
    domain_choice = input("Enter the number of your chosen domain: ").strip()
    try:
        domain_index = int(domain_choice) - 1
        if domain_index not in range(len(domain_list)):
            chosen_domain = "Physics"
        else:
            chosen_domain = domain_list[domain_index]
    except ValueError:
        chosen_domain = "Physics"
    subdomain_list = domains[chosen_domain]
    print(f"\nChoose a subdomain in {chosen_domain}:")
    for i, sub in enumerate(subdomain_list, start=1):
        print(f"  {i}. {sub}")
    sub_choice = input("Enter the number of your chosen subdomain: ").strip()
    try:
        sub_index = int(sub_choice) - 1
        if sub_index not in range(len(subdomain_list)):
            chosen_subdomain = subdomain_list[0]
        else:
            chosen_subdomain = subdomain_list[sub_index]
    except ValueError:
        chosen_subdomain = subdomain_list[0]
    player.set_research_area(chosen_domain, chosen_subdomain)
    print(f"\nResearch Area Set: {chosen_domain} - {chosen_subdomain}")
    
    # Simulate a 10-year academic career:
    for year in range(1, 11):
        print(f"\n===== Year {year} =====")
        print(f"Status: Reputation = {player.reputation}, Experience = {player.experience}")
        print(f"Total Citations: {global_citations}")
        check_vanity_items(player)
        
        # Funding application:
        grant = apply_for_funding()
        
        # Funding allocation:
        # Funding allocation:
        allocation_bonus, leftover = allocate_funding(grant)
        # Add any leftover funds to the player's personal funds 
        player.funds += leftover
        
        # Research decision:
        decision = {
            "duration": random.randint(1, 12),
            "funds_allocated": grant
        }
        base_quality = player.calculate_base_quality(decision)
        quality_with_allocation = base_quality + allocation_bonus
        title = generate_paper_title(player.subdomain)
        paper = ResearchPaper(topic=title, quality_factor=quality_with_allocation)
        print(f"\nYour paper title for this year is:")
        print(f"  \"{paper.topic}\"")
        print(f"Initial Quality: {paper.quality_factor:.2f}")
        
        # Research phase:
        research_log(paper)
        print(f"[FINAL PAPER] Quality Assessment: {paper.quality_description()}")
        
        # Journal selection:
        journal = choose_journal(player, paper)
        paper.journal = journal.name
        result, delta = journal.review_submission(paper)
        print(f"\n[RESULT] Your paper submitted to {journal.name} was {result.upper()} (quality delta: {delta:.2f}).")
        
        # If accepted, set publication info and citation potential.
        if result == "accepted":
            paper.publication_year = year
            paper.citation_rate = int(paper.quality_factor / 10) + journal.prestige
            paper.citation_years_remaining = 5 + int(paper.quality_factor // 10)
            published_papers.append(paper)
            player.publications.append(paper)
        elif result == "revision":
            print("🔎 Your paper must undergo revisions.\n")
            # Mini research log
            mini_research_log(paper)
            # Re-check with a slightly updated threshold
            new_result, new_delta = journal.review_submission(paper)
            if new_result == "accepted":
                print(f"✅ After revisions, your paper is ACCEPTED by {journal.name}!")
            elif result == "sent_for_review":
                print(f"✅ After revisions, your paper is ACCEPTED by {journal.name}!")
            else:
                print(f"❌ After revisions, your paper was REJECTED by {journal.name}.")
                # e.g., handle rejection penalties
        else: 
            print(f"❌ Your paper was REJECTED by {journal.name}...")
        
        # Update player's status based on outcome and targeting:
        player.update_status(new_result, new_delta, journal)
        
        input("\nPress Enter to proceed to the next year...")
        update_citations(year)
    
    print("\n===== Career Over =====")
    print(f"Final Reputation: {player.reputation}")
    print(f"Final Experience: {player.experience}")
    print(f"Total Citations: {global_citations}")
    print(f"Vanity Items: {player.vanity_items}")

if __name__ == "__main__":
    main()
