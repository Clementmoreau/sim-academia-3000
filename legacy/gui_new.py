import tkinter as tk
from tkinter import ttk, scrolledtext
import random

# Import your existing modules
from player import Player
from research_paper import ResearchPaper
from funding import apply_for_funding, attempt_application_gui, ACCEPT_MESSAGES, REJECT_MESSAGES
from allocation import allocate_funding
from research_log import research_log, mini_research_log
# from journal import journals_list

DOMAINS = {
    "Physics": ["Soft Matter Physics", "Astrophysics", "Quantum Mechanics"],
    "Biology": ["Molecular Biology", "Genetics", "Ecology"],
    "Computer Science": ["AI", "Human-Computer Interaction", "Data Science"],
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
       {"name": "The Peer Review Consortium", "grant": 200, "accept_prob": 0.7}
    ]

class AcademicTycoonApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Academic Tycoon")
        self.geometry("800x600")
        self.configure(bg="gray20")

       # --- ttk.Style Setup ---
        self.style = ttk.Style(self)
        # On macOS, "clam", "alt", or "default" often support custom colors better than "aqua"
        self.style.theme_use("clam")

        # 3) Configure a style for TButton
        style.configure(
            "MyButton.TButton",
            background="gray40",
            foreground="white",
            font=("Courier", 12),
            relief="raised"
        )
        style.map(
            "MyButton.TButton",
            background=[("active", "gray50"), ("disabled", "gray70")],
            foreground=[("active", "white"), ("disabled", "gray")]
        )

        # Variables to store player info
        self.player_name_var = ttk.StringVar()
        self.institution_var = ttk.StringVar()
        self.domain_var = ttk.StringVar()
        self.subdomain_var = ttk.StringVar()

        # We'll hold references to different frames
        self.start_frame = None
        self.setup_frame = None
        self.main_game_frame = None

        self.show_start_frame()

    def show_start_frame(self):
        if self.start_frame is None:
            self.start_frame = StartFrame(self)
        self.clear_frames()
        self.start_frame.pack(fill="both", expand=True)

    def show_setup_frame(self):
        if self.setup_frame is None:
            self.setup_frame = SetupFrame(self)
        self.clear_frames()
        self.setup_frame.pack(fill="both", expand=True)

    def show_main_game_frame(self):
        if self.main_game_frame is None:
            self.main_game_frame = MainGameFrame(self)
        self.clear_frames()
        self.main_game_frame.pack(fill="both", expand=True)

    def clear_frames(self):
        """Hides all frames so we can switch between them."""
        if self.start_frame is not None:
            self.start_frame.pack_forget()
        if self.setup_frame is not None:
            self.setup_frame.pack_forget()
        if self.main_game_frame is not None:
            self.main_game_frame.pack_forget()


class StartFrame(ttk.Frame):
    def __init__(self, master):
        super().__init__(master, bg="gray20")
        self.master = master

         title_label = ttk.Label(
            self, 
            text="Academic Tycoon",
            font=("Courier", 28, "bold"),
            foreground="white",
            background="gray20"
        )
        title_label.pack(pady=50)

        button_frame = ttk.Frame(self)
        button_frame.pack(pady=20)

        new_game_button = ttk.Button(
            self,
            text="New Game",
            style="MyButton.TButton",
            command=self.go_to_setup
        )
        new_game_button.pack(pady=10)

    def go_to_setup(self):
        self.master.show_setup_frame()


class SetupFrame(ttk.Frame):
    def __init__(self, master):
        super().__init__(master, bg="gray20")
        self.master = master

        setup_label = ttk.Label(
            self,
            text="Create Your Researcher",
            font=("Courier", 18, "bold"),
            foreground="white",
            background="gray20"
        )
        setup_label.pack(pady=20)

        # Name Entry
        name_frame = ttk.Frame(self, bg="gray20")
        name_frame.pack(pady=5)
        name_label = ttk.Label(name_frame, text="Name:", font=("Courier", 12), fg="white", bg="gray20")
        name_label.pack(side="left", padx=5)
        name_entry = ttk.Entry(name_frame, textvariable=self.master.player_name_var, font=("Courier", 12))
        name_entry.pack(side="left")

        # Institution
        inst_frame = ttk.Frame(self, bg="gray20")
        inst_frame.pack(pady=5)
        inst_label = ttk.Label(inst_frame, text="Institution:", font=("Courier", 12), fg="white", bg="gray20")
        inst_label.pack(side="left", padx=5)
        inst_entry = ttk.Entry(inst_frame, textvariable=self.master.institution_var, font=("Courier", 12))
        inst_entry.pack(side="left", padx=5)

        rand_inst_button = ttk.Button(
            inst_frame, 
            text="Random", 
            font=("Courier", 10),
            command=self.random_institution, 
            bg="gray40", 
            fg="white",
            activebackground="gray40",  
            activeforeground="white"
        )
        rand_inst_button.pack(side="left")

        # Domain and Subdomain
        domain_frame = ttk.Frame(self, bg="gray20")
        domain_frame.pack(pady=5)

        domain_label = ttk.Label(domain_frame, text="Domain:", font=("Courier", 12), fg="white", bg="gray20")
        domain_label.pack(side="left", padx=5)

        domain_options = list(DOMAINS.keys())
        self.master.domain_var.set(domain_options[0])  # Default selection
        domain_menu = ttk.OptionMenu(domain_frame, self.master.domain_var, *domain_options, command=self.update_subdomain_menu)
        domain_menu.config(font=("Courier", 10), bg="gray40", fg="white")
        domain_menu.pack(side="left")

        subdomain_label = ttk.Label(domain_frame, text=" Subdomain:", font=("Courier", 12), fg="white", bg="gray20")
        subdomain_label.pack(side="left")

        # We'll create a subdomain menu in update_subdomain_menu
        self.subdomain_menu_var = ttk.StringVar()
        self.subdomain_menu = ttk.OptionMenu(domain_frame, self.subdomain_menu_var, "")
        self.subdomain_menu.config(font=("Courier", 10), bg="gray40", fg="white")
        self.subdomain_menu.pack(side="left")

        # Initialize subdomain menu
        self.update_subdomain_menu(self.master.domain_var.get())

        # Next Button
        next_button = ttk.Button(
            self,
            text="Start Game",
            font=("Courier", 14),
            bg="SystemButtonFace",
            fg="white",
            activebackground="gray40",  
            activeforeground="white",
            command=self.start_game
        )
        next_button.pack(pady=20)

    def random_institution(self):
        self.master.institution_var.set(random.choice(INSTITUTIONS))

    def update_subdomain_menu(self, selected_domain):
        subdomains = DOMAINS[selected_domain]
        self.subdomain_menu_var.set(subdomains[0])
        menu = self.subdomain_menu["menu"]
        menu.delete(0, "end")
        for sd in subdomains:
            menu.add_command(label=sd, command=lambda s=sd: self.subdomain_menu_var.set(s))

    def start_game(self):
        # Store the final subdomain selection
        self.master.subdomain_var.set(self.subdomain_menu_var.get())
        # Move to main game
        self.master.show_main_game_frame()


class MainGameFrame(ttk.Frame):
    def __init__(self, master):
        super().__init__(master, bg="gray20")
        self.master = master

        # Create a Player object using the user-defined info
        # (We could do this earlier, but let's do it here for clarity)
        player_name = self.master.player_name_var.get() or "Dr. Unknown"
        institution = self.master.institution_var.get() or "Mystery U."
        domain = self.master.domain_var.get()
        subdomain = self.master.subdomain_var.get()

        # We'll store these for reference. If you want to actually incorporate them into Player,
        # you'd have to modify the Player class accordingly or store them as additional attributes.
        self.player = Player(name=player_name)
        # Just to show the user’s chosen data:
        self.player.institution = institution
        self.player.domain = domain
        self.player.subdomain = subdomain

        # We'll store a local copy of the funding bodies so each new game can reset them if needed
        self.funding_bodies = FUNDING_BODIES.copy()

        title_label = ttk.Label(self, text=f"{player_name} at {institution}", font=("Courier", 14, "bold"), fg="white", bg="gray20")
        title_label.pack(pady=10)

        # Stats label
        self.stats_label = ttk.Label(self, text="", font=("Courier", 12), fg="white", bg="gray20")
        self.stats_label.pack()
        self.update_stats_display()

        # Text box
        self.text_box = scrolledtext.ScrolledText(self, wrap=ttk.WORD, width=70, height=15, font=("Courier", 12), bg="black", fg="lime")
        self.text_box.pack(padx=10, pady=10)

        self.button_frame = ttk.Frame(self, bg="gray20")
        self.button_frame.pack(pady=5)

        # We'll add some buttons like in the previous code
        fund_button = ttk.Button(self.button_frame, text="Apply for Funding", font=("Courier", 12),
                                command=self.show_funding_popup, bg="gray40", fg="white", activebackground="gray40", activeforeground="white", width=16)
        fund_button.grid(row=0, column=0, padx=5, pady=5)

        allocate_button = ttk.Button(self.button_frame, text="Allocate Funds", font=("Courier", 12),
                                    command=self.allocate_funding_gui, bg="gray40", fg="white", activebackground="gray40", activeforeground="white", width=16)
        allocate_button.grid(row=0, column=1, padx=5, pady=5)

        research_button = ttk.Button(self.button_frame, text="Start Research", font=("Courier", 12),
                                    command=self.start_research_gui, bg="gray40", fg="white", activebackground="gray40", activeforeground="white", width=16)
        research_button.grid(row=0, column=2, padx=5, pady=5)

        submit_button = ttk.Button(self.button_frame, text="Submit Paper", font=("Courier", 12),
                                  command=self.submit_paper_gui, bg="gray40",fg="white", activebackground="gray40", activeforeground="white", width=16)
        submit_button.grid(row=0, column=3, padx=5, pady=5)

        # Keep a reference to the current paper
        self.current_paper = None

    def write_message(self, msg):
        self.text_box.insert(ttk.END, msg)
        self.text_box.yview(ttk.END)

    def update_stats_display(self):
        self.stats_label.config(
            text=f"Reputation: {self.player.reputation} | Experience: {self.player.experience} | Funds: ${self.player.funds}"
        )

    def show_funding_popup(self):
        # Create a new window
        funding_window = ttk.Toplevel(self.master)
        funding_window.title("Funding Opportunities")
        funding_window.geometry("400x300")
        funding_window.configure(bg="gray25")

        info_label = ttk.Label(funding_window, text="Select a funding body and apply:", font=("Courier", 12),
                              fg="white", bg="gray25")
        info_label.pack(pady=5)

        # Listbox to show funders
        self.funding_listbox = ttk.Listbox(funding_window, font=("Courier", 12), height=8, bg="gray10", fg="white")
        self.funding_listbox.pack(padx=10, pady=5, fill="x")

        # Populate listbox
        for fb in self.funding_bodies:
            text = f"{fb['name']} - Grant: ${fb['grant']} - {int(fb['accept_prob']*100)}% chance"
            self.funding_listbox.insert(ttk.END, text)

        # Button frame
        button_frame = ttk.Frame(funding_window, bg="gray25")
        button_frame.pack(pady=5)

        apply_button = ttk.Button(
            button_frame, text="Apply", font=("Courier", 10),
            command=lambda: self.attempt_funding_application_gui(funding_window),
            bg="gray40", fg="white", activebackground="gray40", activeforeground="white"
        )
        apply_button.grid(row=0, column=0, padx=5)

        close_button = ttk.Button(
            button_frame, text="Close", font=("Courier", 10),
            command=funding_window.destroy, bg="gray40", fg="white", activebackground="gray40", activeforeground="white"
        )
        close_button.grid(row=0, column=1, padx=5)

    def attempt_funding_application_gui(self, popup_window):
        selection = self.funding_listbox.curselection()
        if not selection:
            return  # No item selected

        index = selection[0]
        fb = self.funding_bodies[index]

        accepted, message = attempt_application_gui(fb)  # uses the new function from funding.py

        if accepted:
            # Show acceptance message plus the original acceptance text
            self.write_message(f"[{fb['name']}] {message}\n")
            self.write_message(f"You have been awarded ${fb['grant']}.\n")
            self.player.funds += fb["grant"]
            self.update_stats_display()
            popup_window.destroy()  # close the popup
        else:
            # Show rejection message, remove that funder from the list
            self.write_message(f"[{fb['name']}] {message}\n")
            self.funding_bodies.pop(index)
            self.funding_listbox.delete(index)
            if not self.funding_bodies:
                self.write_message("No more funding bodies available.\n")
                popup_window.destroy()
            else:
                self.write_message("Please try another funding body.\n")

    def allocate_funding_gui(self):
        if self.player.funds > 0:
            bonus, leftover = allocate_funding(self.player.funds)
            self.player.funds = leftover
            if self.current_paper is not None:
                self.current_paper.modify_quality(bonus)
                self.write_message(f"Added {bonus} quality to current paper from allocations.\n")
            else:
                self.write_message(f"Allocation bonus of +{bonus} will apply to next paper.\n")
            self.update_stats_display()
        else:
            self.write_message("No funds available to allocate.\n")

    def start_research_gui(self):
        # Optionally incorporate domain/subdomain into the paper topic if you want
        topic = f"{self.player.domain}: {self.player.subdomain}"

        self.current_paper = ResearchPaper(
            topic=topic,
            duration=random.randint(1, 12),
            funds_allocated=0,
            researcher_experience=self.player.experience
        )
        self.current_paper.calculate_quality()

        self.write_message(f"A new paper on '{topic}' was started.\n")
        research_log(self.current_paper)
        desc = self.current_paper.quality_description()
        self.write_message(f"After research: {desc}\n")

    def submit_paper_gui(self):
        if not self.current_paper:
            self.write_message("No paper to submit! Try starting research first.\n")
            return

        chosen_journal = random.choice(journals_list)
        result, delta = chosen_journal.review_submission(self.current_paper)

        if result == "accepted":
            self.write_message(f"✅ Paper accepted by {chosen_journal.name}!\n")
            self.player.update_status("accepted", delta, chosen_journal)
        elif result == "rejected":
            self.write_message(f"❌ Paper rejected by {chosen_journal.name}...\n")
            self.player.update_status("rejected", delta, chosen_journal)
        else:
            self.write_message(f"📄 Paper sent for review at {chosen_journal.name}!\n")
            mini_research_log(self.current_paper)
            new_result, new_delta = chosen_journal.review_submission(self.current_paper)
            if new_result == "accepted":
                self.write_message(f"✅ After revisions, accepted by {chosen_journal.name}!\n")
                self.player.update_status("accepted", new_delta, chosen_journal)
            else:
                self.write_message(f"❌ After revisions, still rejected by {chosen_journal.name}.\n")
                self.player.update_status("rejected", new_delta, chosen_journal)

        self.update_stats_display()

def main():
    app = AcademicTycoonApp()
    app.mainloop()

if __name__ == "__main__":
    main()
