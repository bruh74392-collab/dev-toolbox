// Project Database Catalog (34 Completed Tools)
const PROJECTS = [
  { id: 1, name: "Prompt Packer", category: "utility", repo: "prompt-packer", desc: "Bundle directory files structures and prompt profiles into one single text file for LLM contexts." },
  { id: 2, name: "Glassmorphism Studio", category: "css", repo: "glassmorphism-studio", desc: "Interactive editor generating beautiful CSS frosted glass rules and gradients spheres." },
  { id: 3, name: "Git Diff Beautifier", category: "utility", repo: "git-diff-beautifier", desc: "Paste unified git diff outputs to format and highlight code modifications visually." },
  { id: 4, name: "Code-to-Image Poster", category: "utility", repo: "code-to-image-poster", desc: "Paste source code blocks, select styling presets, and download beautiful image layouts." },
  { id: 5, name: "Regex Visualizer & Code Gen", category: "utility", repo: "regex-visualizer", desc: "Input regular expression pattern offsets to render graphical capture groups trees." },
  { id: 6, name: "SVG Coder & Optimizer", category: "svg", repo: "svg-coder-optimizer", desc: "Write XML shapes codes, view vector results, and compress SVGs instantly." },
  { id: 7, name: "JSON Tree Formatter", category: "json", repo: "json-tree-formatter", desc: "Validate raw JSON strings, expand/collapse nested trees visually, and filter key queries." },
  { id: 8, name: "MarkPresent (MD Slides)", category: "utility", repo: "markpresent-slides", desc: "Render markdown syntax files directly into structured page slideshow presentations." },
  { id: 9, name: "CSS Clip Path Studio", category: "css", repo: "css-clip-path-studio", desc: "Visual polygon coordinate editor to drag anchors and copy CSS clip-path rules." },
  { id: 10, name: "Device Mockup Studio", category: "utility", repo: "device-mockup-studio", desc: "Wrap visual screenshots directly inside standard devices wrappers frames (laptops, phones)." },
  { id: 11, name: "Profile README Generator", category: "utility", repo: "profile-readme-generator", desc: "Check boxes, select design badges, and compile custom markdown profiles for GitHub READMEs." },
  { id: 12, name: "Markdown Table Generator", category: "utility", repo: "markdown-table-generator", desc: "Visual spreadsheet creator to add rows/columns and export markdown tables code." },
  { id: 13, name: "Keycode Event Inspector", category: "utility", repo: "keycode-inspector", desc: "Press any key in your keyboard to inspect standard browser event codes and properties." },
  { id: 14, name: "CSS Glassmorphism Grid", category: "css", repo: "glass-grid-generator", desc: "Configure columns count and gap margins inside frosted overlapping grids containers." },
  { id: 15, name: "Base64 Converter & File Player", category: "utility", repo: "base64-converter", desc: "Encode text/files to base64 or decode buffers back to inline player assets." },
  { id: 16, name: "URL Query String Builder", category: "utility", repo: "url-query-builder", desc: "Visual segments table builder to compile or deconstruct raw URL query key-value strings." },
  { id: 17, name: "JSON to TypeScript Compiler", category: "json", repo: "json-to-typescript", desc: "Parse nested JSON variables and generate typed recursively structured TypeScript interfaces." },
  { id: 18, name: "CSS Box Shadow Studio", category: "css", repo: "box-shadow-studio", desc: "Multi-layered soft box shadows stacker dashboard with visual preview plane controls." },
  { id: 19, name: "JWT Decoder & Payload Audits", category: "security", repo: "jwt-decoder", desc: "Deconstruct JSON Web Tokens to read raw Header/Payload claims and epoch timestamps." },
  { id: 20, name: "Crontab Expression Builder", category: "utility", repo: "cron-expression-builder", desc: "Checkbox grids schedule planner compiling crontab strings with english explainers." },
  { id: 21, name: "CSS Flexbox Layout Sandbox", category: "css", repo: "flexbox-sandbox", desc: "Interactive playground to manage flex-container properties and override child alignments." },
  { id: 22, name: "CSS Glassmorphism Pro Studio", category: "css", repo: "glassmorphism-generator-pro", desc: "Stack overlapping frosted cards and drag nodes coordinates to verify transparencies." },
  { id: 23, name: "SVG Path Visual Editor", category: "svg", repo: "svg-path-editor", desc: "Draggable node canvas grid drawing bezier curves and generating SVG path tag directives." },
  { id: 24, name: "JSON Schema Validator Pro", category: "json", repo: "json-yaml-schema-tool", desc: "Validate YAML or JSON datasets against custom schema validation rules locally." },
  { id: 25, name: "JWT Builder & Signer Studio", category: "security", repo: "jwt-builder", desc: "Assemble JWT token headers/payloads and sign locally using Web Crypto HMAC key APIs." },
  { id: 26, name: "CSS Keyframe timeline Editor", category: "css", repo: "css-animation-studio", desc: "Timeline editor adding percentage ticks and style overrides to animate preview targets." },
  { id: 27, name: "SQL Formatter & ER Visualizer", category: "json", repo: "sql-formatter-schema", desc: "Beautify queries, parse table columns variables types, and render relational schema cards." },
  { id: 28, name: "HTML Canvas Image Studio", category: "utility", repo: "canvas-filter-cropper", desc: "Apply real-time canvas filters sliders (contrast, brightness) and crop custom regions." },
  { id: 29, name: "CSS Grid Visual Generator", category: "css", repo: "css-grid-studio", desc: "Grid columns/rows visual track generator with selected cell colspan/rowspan overrides." },
  { id: 30, name: "Markdown Editor & PDF Studio", category: "utility", repo: "markdown-pdf-studio", desc: "Write markdown text documents and export clean PDFs using native print layouts." },
  { id: 31, name: "Regular Expression Tester Pro", category: "utility", repo: "regex-tester-pro", desc: "Regex patterns debugger highlighting capture groups indices offsets and compiling integrations." },
  { id: 32, name: "CSS Gradient Generator Pro", category: "css", repo: "gradient-generator-pro", desc: "Visual multi-stop linear/radial gradient pins track builder with HTML color pickers." },
  { id: 33, name: "Base64 Converter Pro Studio", category: "utility", repo: "base64-converter-pro", desc: "Advanced base64 encoder supporting Plain Text, hex strings, files, and URL safe checks." },
  { id: 34, name: "CSP Header Builder Studio", category: "security", repo: "csp-security-studio", desc: "Compile security Content Security Policy rules and execute risk grades analysis audits." }
];

// App State
let state = {
  searchQuery: '',
  selectedCategory: 'all'
};

// DOM Elements
const searchBar = document.getElementById('search-bar');
const categoriesContainer = document.getElementById('categories-container');
const projectsContainer = document.getElementById('projects-container');

// Initialize
initListeners();
renderProjects();

function initListeners() {
  // Search bar input
  searchBar.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    renderProjects();
  });

  // Category filter buttons
  const filterBtns = categoriesContainer.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCategory = btn.dataset.category;
      renderProjects();
    });
  });
}

// Render filtered card list in grid
function renderProjects() {
  projectsContainer.innerHTML = '';
  
  const filtered = PROJECTS.filter(p => {
    // Category match
    const categoryMatch = state.selectedCategory === 'all' || p.category === state.selectedCategory;
    // Search match
    const searchMatch = !state.searchQuery || 
                        p.name.toLowerCase().includes(state.searchQuery) || 
                        p.desc.toLowerCase().includes(state.searchQuery) ||
                        p.category.toLowerCase().includes(state.searchQuery);
    
    return categoryMatch && searchMatch;
  });
  
  if (filtered.length === 0) {
    projectsContainer.innerHTML = `
      <p class="placeholder-text" style="grid-column: span 3; text-align: center; padding: 3rem; font-size: 1.1rem; color: var(--text-muted);">
        No developer tools matched your search query. Try typing something else!
      </p>
    `;
    return;
  }
  
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const demoUrl = `https://bruh74392-collab.github.io/${p.repo}/`;
    const repoUrl = `https://github.com/bruh74392-collab/${p.repo}`;
    
    card.innerHTML = `
      <div class="card-top-row">
        <span class="project-num">#${p.id.toString().padStart(2, '0')}</span>
        <span class="category-tag">${p.category}</span>
      </div>
      <h3>${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <div class="card-actions">
        <a href="${demoUrl}" target="_blank" class="btn btn-primary">Open Tool</a>
        <a href="${repoUrl}" target="_blank" class="btn btn-secondary">Source Code</a>
        <a href="${repoUrl}" target="_blank" class="btn btn-star-repo">⭐ Star Repository</a>
      </div>
    `;
    
    projectsContainer.appendChild(card);
  });
}
