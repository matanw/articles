# Academic Articles - Bilingual Viewer

A clean, reusable framework for displaying academic articles with dual-language translations and mode switching.

## Structure

```
article/
├── general.js          # Framework/engine (no article-specific code)
├── shashaDict.js       # Article data (metadata + bilingual content)
└── shasha.html         # Minimal HTML skeleton
```

## How it works

1. **general.js** - Core viewer logic:
   - Renders different views (English, Hebrew, Side-by-Side)
   - Handles translation mode switching (Literal ↔ Natural)
   - Manages UI state (dark mode, font size, preferences)
   - 100% CSS-in-JS for zero dependencies

2. **shashaDict.js** - Article data:
   - `metadata` object (title, author, source)
   - `sections` array with bilingual paragraphs
   - Each paragraph has `english`, `hebrew_literal`, `hebrew_natural`

3. **shasha.html** - Just includes the two JS files

## To Add a New Article

1. Create a new file: `articles/yourNameDict.js`
2. Copy the data structure from `shashaDict.js`
3. Create `yourName.html`:
   ```html
   <script src="general.js"></script>
   <script src="yourNameDict.js"></script>
   ```
4. Push to repo

## Features

- 📖 **Three viewing modes**: English | Hebrew | Side-by-Side
- 🔄 **Dual translations**: Literal (word-for-word) ↔ Natural (fluent)
- 🌙 **Dark mode** + font size control
- 💾 **Persistent preferences** (localStorage)
- 📱 **Responsive** (mobile-friendly)
- 🎯 **Zero dependencies** (pure JS/CSS)
- ⚡ **Fast** (single-page app)

## Live Demo

🔗 https://matanw.github.io/articles/article/shasha.html

---

Built with ❤️ for academic translation
# Updated
