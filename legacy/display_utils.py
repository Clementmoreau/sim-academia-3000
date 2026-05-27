import time

def print_section_header(title):
    """Prints a decorative section header."""
    print("\n" + "─" * 50)
    print(f"📜 {title.upper()} 📜")
    print("─" * 50 + "\n")
    time.sleep(0.5)

def print_success_message(message):
    """Prints a success message with a little delay."""
    print(f"\n🎉 ✨ {message.upper()} ✨ 🎉\n")
    time.sleep(0.5)

def print_research_log(logs):
    """Prints research log with delays."""
    print("\n🔬 Research Progress:\n")
    for log in logs:
        print(f"   → {log}")
        time.sleep(0.7)  # Pause between logs
    print("")

def print_paper_summary(paper, reputation):
    """Prints a nicely formatted summary of the paper submission."""
    print("\n📄 **PAPER SUBMISSION REPORT** 📄\n")
    print(f"📖 **Title:** {paper.topic}")
    print(f"📊 **Quality Score:** {paper.quality_factor}")
    print(f"📄 **Submitted to:** 🏅 {paper.journal}")
    if paper.co_authors:
        print(f"👥 **Co-Authors:** {', '.join(c.name for c in paper.co_authors)}")
    print(f"\n🏆 **Current Reputation:** {reputation}")
    print("\n" + "─" * 50 + "\n")
