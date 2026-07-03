// Article Viewer Framework
// Dynamically renders bilingual academic articles with dual translation modes

class ArticleViewer {
    constructor(data) {
        this.data = data;
        this.currentView = 'english';
        this.currentTranslationMode = 'natural';
        this.init();
    }

    init() {
        this.setupHTML();
        this.attachEventListeners();
        this.loadPreferences();
        this.renderView();
    }

    setupHTML() {
        document.body.innerHTML = `
            <div class="container">
                <header>
                    <h1>${this.data.metadata.title}</h1>
                    <p class="author">${this.data.metadata.author}</p>
                    <p class="source">${this.data.metadata.source}</p>

                    <div class="controls">
                        <button class="btn active" data-view="english">English</button>
                        <button class="btn" data-view="hebrew">Hebrew</button>
                        <button class="btn" data-view="sidebyside">Side-by-Side</button>
                        <button class="btn" onclick="toggleDarkMode()">🌙 Dark Mode</button>

                        <div class="toggle-group" id="translationToggle" style="display: none;">
                            <span>Translation Mode:</span>
                            <button class="toggle-btn active" data-mode="literal">Literal</button>
                            <button class="toggle-btn" data-mode="natural">Natural</button>
                        </div>

                        <div class="slider-group">
                            <label for="fontsize">Font Size:</label>
                            <input type="range" id="fontsize" min="12" max="22" value="16">
                        </div>
                    </div>
                </header>

                <div id="content" class="content"></div>
            </div>
        `;
    }

    attachEventListeners() {
        // View switching
        document.querySelectorAll('[data-view]').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchView(e.target.dataset.view));
        });

        // Translation mode switching
        document.querySelectorAll('[data-mode]').forEach(btn => {
            btn.addEventListener('click', (e) => this.setTranslationMode(e.target.dataset.mode));
        });

        // Font size
        document.getElementById('fontsize').addEventListener('change', (e) => {
            document.body.style.fontSize = e.target.value + 'px';
            localStorage.setItem('fontSize', e.target.value);
        });

        // Dark mode
        window.toggleDarkMode = () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        };
    }

    loadPreferences() {
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
        const savedSize = localStorage.getItem('fontSize');
        if (savedSize) {
            document.body.style.fontSize = savedSize + 'px';
            document.getElementById('fontsize').value = savedSize;
        }
        this.currentTranslationMode = localStorage.getItem('translationMode') || 'natural';
    }

    switchView(view) {
        this.currentView = view;
        document.querySelectorAll('[data-view]').forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');

        const translationToggle = document.getElementById('translationToggle');
        if (view === 'hebrew' || view === 'sidebyside') {
            translationToggle.style.display = 'flex';
        } else {
            translationToggle.style.display = 'none';
        }

        this.renderView();
    }

    setTranslationMode(mode) {
        this.currentTranslationMode = mode;
        document.querySelectorAll('[data-mode]').forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        localStorage.setItem('translationMode', mode);
        this.renderView();
    }

    renderView() {
        const content = document.getElementById('content');

        switch(this.currentView) {
            case 'english':
                content.innerHTML = this.renderEnglish();
                break;
            case 'hebrew':
                content.innerHTML = this.renderHebrew();
                break;
            case 'sidebyside':
                content.innerHTML = this.renderSideBySide();
                break;
        }
    }

    renderEnglish() {
        let html = '<div class="english-column">';
        this.data.sections.forEach(section => {
            html += `<h2>${section.title}</h2>`;
            section.paragraphs.forEach(para => {
                html += `<p>${para.english}</p>`;
                if (para.source) {
                    html += `<div class="source-block">
                        <div class="source-hebrew">${para.source.hebrew}</div>
                        <div class="source-english">${para.source.english_translation}</div>
                    </div>`;
                }
            });
        });
        html += '</div>';
        return html;
    }

    renderHebrew() {
        let html = '<div class="hebrew-column hebrew">';
        this.data.sections.forEach(section => {
            html += `<h2>${section.title}</h2>`;
            section.paragraphs.forEach(para => {
                const text = this.currentTranslationMode === 'literal'
                    ? para.hebrew_literal
                    : para.hebrew_natural;
                html += `<p>${text}</p>`;
                if (para.source) {
                    html += `<div class="source-block">
                        <div class="source-hebrew">${para.source.hebrew}</div>
                    </div>`;
                }
            });
        });
        html += '</div>';
        return html;
    }

    renderSideBySide() {
        let html = '<div class="side-by-side-container">';
        this.data.sections.forEach(section => {
            html += `<div class="side-by-side">
                <div class="english-column">
                    <h2>${section.title}</h2>
                    ${section.paragraphs.map(p => {
                        let para = `<p>${p.english}</p>`;
                        if (p.source) {
                            para += `<div class="source-block">
                                <div class="source-hebrew">${p.source.hebrew}</div>
                                <div class="source-english">${p.source.english_translation}</div>
                            </div>`;
                        }
                        return para;
                    }).join('')}
                </div>
                <div class="hebrew-column hebrew">
                    <h2>${section.title}</h2>
                    ${section.paragraphs.map(p => {
                        const text = this.currentTranslationMode === 'literal'
                            ? p.hebrew_literal
                            : p.hebrew_natural;
                        let para = `<p>${text}</p>`;
                        if (p.source) {
                            para += `<div class="source-block">
                                <div class="source-hebrew">${p.source.hebrew}</div>
                            </div>`;
                        }
                        return para;
                    }).join('')}
                </div>
            </div>`;
        });
        html += '</div>';
        return html;
    }
}

// Global CSS
const styles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: Georgia, 'Noto Serif Hebrew', serif;
        line-height: 1.8;
        color: #2c3e50;
        background: #f8f9fa;
        transition: all 0.3s;
    }
    body.dark-mode { background: #1a1a1a; color: #e0e0e0; }

    .container { max-width: 1400px; margin: 0 auto; padding: 20px; }
    header { background: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    body.dark-mode header { background: #2a2a2a; }

    h1 { font-size: 28px; margin-bottom: 8px; color: #1a3a52; }
    body.dark-mode h1 { color: #64b5f6; }

    .author, .source { font-size: 14px; color: #666; }
    body.dark-mode .author, body.dark-mode .source { color: #aaa; }

    .controls { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 20px; align-items: center; }
    .btn { padding: 10px 20px; border: 2px solid #1a3a52; background: white; color: #1a3a52; border-radius: 5px; cursor: pointer; font-weight: 600; transition: all 0.3s; }
    .btn:hover, .btn.active { background: #1a3a52; color: white; }
    body.dark-mode .btn { border-color: #64b5f6; background: #1a1a1a; color: #64b5f6; }
    body.dark-mode .btn.active { background: #64b5f6; color: #1a1a1a; }

    .toggle-group { display: flex; gap: 5px; align-items: center; font-size: 13px; }
    .toggle-btn { padding: 8px 12px; border: 1px solid #999; background: #f0f0f0; color: #333; border-radius: 3px; cursor: pointer; font-size: 12px; }
    .toggle-btn.active { background: #1a3a52; color: white; }

    .content { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    body.dark-mode .content { background: #2a2a2a; }

    .english-column { direction: ltr; text-align: left; }
    .hebrew-column { direction: rtl; text-align: right; }
    .hebrew { font-family: 'David Libre', 'Frank Ruehl', 'SBL Hebrew', 'Noto Serif Hebrew', serif; }

    .side-by-side { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; column-gap: 30px; margin-bottom: 40px; }
    @media (max-width: 1200px) { .side-by-side { grid-template-columns: 1fr; } }

    h2 { font-size: 20px; margin-top: 30px; margin-bottom: 15px; color: #1a3a52; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; }
    body.dark-mode h2 { color: #64b5f6; border-bottom-color: #444; }

    p { margin-bottom: 15px; text-align: justify; }

    .source-block {
        margin: 20px 0 25px 0;
        padding: 15px;
        background: #f9f9f9;
        border-left: 4px solid #1a3a52;
        border-radius: 4px;
        font-style: italic;
    }
    body.dark-mode .source-block {
        background: #333;
        border-left-color: #64b5f6;
    }

    .source-hebrew {
        margin-bottom: 8px;
        font-family: 'David Libre', 'Frank Ruehl', 'SBL Hebrew', serif;
        line-height: 1.6;
    }

    .source-english {
        font-size: 0.95em;
        color: #666;
    }
    body.dark-mode .source-english {
        color: #aaa;
    }

    .slider-group { display: flex; gap: 10px; align-items: center; }
    input[type="range"] { width: 150px; }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
