
## ✨ Features

- 🎟️ **Instant Attendee Pass Generation**: Renders a high-resolution pixel art rocket pass (1024 × 1536) on HTML5 Canvas.
- 📝 **Simple Registration Form**: Name and designation input with strict 14-character formatting.
- 📱 **Responsive Glassmorphism UI**: Dark space-theme interface (`#282047`) with rocket gradient accents.
- ⚡ **Client-Side Processing**: Fast rendering with zero backend overhead.
- 📲 **1-Click Social Sharing**: Direct sharing & caption auto-copy for LinkedIn, Instagram, and X (Twitter).

---

## 🛠️ Tech Stack

- **Framework**: React + Vite
- **Canvas Rendering**: HTML5 Canvas 2D API
- **Styling**: Vanilla CSS3 (Glassmorphism, CSS Custom Properties, Responsive Flexbox)

---

## 📂 Project Structure

```
Qwen-Workspace1/
│── public/
│   ├── images/                # Shipathon 2026 logo & mascot assets
│   └── template.png            # Shipathon 2026 rocket poster template (1024x1536)
│── src/
│   ├── components/
│   │   ├── InputForm.jsx       # Photo upload & details form (14 char limit)
│   │   ├── Loader.jsx          # Pass generation loading indicator
│   │   └── TicketPreview.jsx   # Pass preview & social sharing handlers
│   ├── utils/
│   │   └── ticketGenerator.js  # HTML5 Canvas rendering & coordinate mapping
│   ├── App.jsx                 # Hero section & state management
│   ├── App.css
│   └── index.css               # Design system tokens (#282047 space theme)
│── index.html
└── package.json

## 👨‍💻 Author

**Satvik Kolluru**
- **GitHub**: [sat720](https://github.com/sat720/)
- **LinkedIn**: [Satvik Kolluru](https://www.linkedin.com/in/satvik-kolluru-02548a208)
---
