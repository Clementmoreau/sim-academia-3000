# gui_helpers.py
import tkinter as tk
from tkinter import ttk, font

def open_email_popup(parent, title, subject, body, buttons=None, width=500):
    """
    Opens a popup styled like an email.

    Parameters
    ----------
    parent : tk.Widget
        Parent window (usually `self` in your class).
    title : str
        Window title.
    subject : str
        Email subject line.
    body : str
        The message body (plain text, newlines respected).
    buttons : list[tuple[str, callable]]
        Optional list of (label, command) tuples for action buttons.
    width : int
        Max width in pixels before text wraps.
    """
    popup = tk.Toplevel(parent)
    popup.title(title)

    bg = "#f9f9f9"
    popup.configure(bg=bg)

    # Fonts
    subject_font = font.Font(family="Latin Modern Roman", size=12, weight="bold")
    body_font = font.Font(family="Latin Modern Roman", size=11)

    # Subject line
    subj_label = tk.Label(
        popup, text=subject,
        font=subject_font, bg=bg, fg="black", anchor="w", justify="left"
    )
    subj_label.pack(fill="x", padx=15, pady=(15, 5))

    # Horizontal separator
    ttk.Separator(popup, orient="horizontal").pack(fill="x", padx=15, pady=5)

    # Body text (wrapped)
    body_msg = tk.Message(
        popup,
        text=body,
        width=width,
        font=body_font,
        bg=bg,
        fg="black",
        anchor="w",
        justify="left"
    )
    body_msg.pack(padx=15, pady=10, fill="x")

    # Buttons (at bottom, right aligned)
    if buttons:
        btn_frame = tk.Frame(popup, bg=bg)
        btn_frame.pack(fill="x", pady=(0, 15), padx=15)
        for label, cmd in buttons:
            ttk.Button(btn_frame, text=label, command=cmd).pack(side="right", padx=5)

    # Resize & center
    popup.update_idletasks()
    w, h = popup.winfo_width(), popup.winfo_height()
    x = (popup.winfo_screenwidth() // 2) - (w // 2)
    y = (popup.winfo_screenheight() // 2) - (h // 2)
    popup.geometry(f"{w}x{h}+{x}+{y}")

    return popup
