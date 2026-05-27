from src.data import FUNDING_CATEGORIES

def allocate_funding(funds):
    print(f"\nYou have been granted ${funds} for your research extravaganza.")
    allocation_bonus = 0
    remaining = funds
    # Five witty categories, each with five options.
   
    for category, options in FUNDING_CATEGORIES.items():
        valid_choice = False
        while not valid_choice:
            print(f"\nCategory: {category}")
            print(f"Remaining funds: ${remaining}")
            for i, opt in enumerate(options, start=0):
                print(f"  {i}. {opt['option']} - Cost: ${opt['cost']}, Quality Bonus: +{opt['quality']}")
            choice = input("Select an option for this category: ").strip()
            try:
                idx = int(choice)
                if idx < 0 or idx >= len(options):
                    print("Invalid choice. Please try again.")
                    continue
                selected = options[idx]
                if selected["cost"] > remaining:
                    print(f"Not enough funds for '{selected['option']}'. Please choose a cheaper option.")
                    continue
                else:
                    remaining -= selected["cost"]
                    allocation_bonus += selected["quality"]
                    print(f"You selected '{selected['option']}'. Remaining funds: ${remaining}")
                    valid_choice = True
            except ValueError:
                print("Invalid input. Please enter the number corresponding to your choice.")
    print(f"\nTotal allocation bonus: +{allocation_bonus}")
    print(f"Unspent funds: ${remaining}")
    return allocation_bonus, remaining
