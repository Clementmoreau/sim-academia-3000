# Sim Academia 3000

A browser-based local game about surviving an academic career: apply for funding, allocate your budget, write papers, submit to journals, revise, collect citations, and acquire increasingly pompous CV decorations.

## Run

```bash
python3 main.py
```

No external Python packages are required. `main.py` starts a local web server and opens the game in your browser.

## Current Structure

- `main.py`: local web server launcher.
- `web/`: current browser game UI and game flow.
- `tools/simulate.mjs`: simple automated career simulator for difficulty tuning.
- `outputs/sim_academia_balance_model.xlsx`: editable balancing workbook.
- `src/data.py`: static game data: domains, funders, allocation options, journals, title terms, colors.
- `src/player.py`: player stats, publications, reputation, rank progression.
- `src/research_paper.py`: paper model and quality descriptions.
- `src/funding.py`: funding application logic.
- `src/allocation.py`: older terminal allocation flow, kept in sync with GUI allocation data.
- `src/research_log.py`: randomized research and revision events.
- `src/journal.py`: journal generation and review decisions.
- `src/title_generator.py`: generated paper titles.
- `src/gui_helpers.py`: shared Tkinter popup helper.
- `legacy/`: older prototypes. This folder is not part of the active app and may not compile.

## Current Game Loop

1. Create a researcher profile.
2. Apply for a grant.
3. Allocate funds across research categories.
4. Generate and improve a paper through random research events.
5. Submit to a journal.
6. Handle acceptance, rejection, or major revision.
7. Advance the year, collect citations, and optionally buy vanity CV items.

## Difficulty Tuning

Run a batch simulation with:

```bash
node tools/simulate.mjs 5000 40
```

The first argument is the number of simulated careers. The second is career length in years.

## Notes For Next Work

- The active app is `web/`, launched through `main.py`; treat `legacy/` as reference material.
- There is no Git repository initialized in this folder yet.
- The old Tk interface was replaced because the macOS system Tk renderer was unreliable on this machine.
