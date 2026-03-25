// Book Registry
const books = [
    {
        id: 'harry-potter',
        title: 'Harry Potter',
        subtitle: 'Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        cover: 'images/covers/harry-potter.jpg',
        emoji: '⚡',
        type: '17 chapters',
        dataFile: 'books/harry-potter.js'
    },
    {
        id: 'percy-jackson',
        title: 'Percy Jackson',
        subtitle: 'The Lightning Thief',
        author: 'Rick Riordan',
        cover: 'images/covers/percy-jackson.jpg',
        emoji: '🔱',
        type: '22 chapters',
        dataFile: 'books/percy-jackson.js'
    },
    {
        id: 'smile',
        title: 'Smile',
        subtitle: '',
        author: 'Raina Telgemeier',
        cover: 'images/covers/smile.jpg',
        emoji: '😬',
        type: '12 scenes',
        dataFile: 'books/smile.js'
    },
    {
        id: 'wimpy-kid',
        title: 'Diary of a Wimpy Kid',
        subtitle: '',
        author: 'Jeff Kinney',
        cover: 'images/covers/wimpy-kid.jpg',
        emoji: '📔',
        type: '15 diary entries',
        dataFile: 'books/wimpy-kid.js'
    }
];

// Global State
let currentBook = null;
let currentBookData = null;
let currentCharacterIndex = 0;
let currentChapterIndex = 0;
let viewedCharacters = new Set();
let viewedChapters = new Set();
let bookProgress = {};

// Initialize
function init() {
    renderBookGrid();
    loadProgress();
    updateGlobalProgress();
}

// Load/Save Progress
function loadProgress() {
    const saved = localStorage.getItem('novabooks_progress');
    if (saved) {
        bookProgress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('novabooks_progress', JSON.stringify(bookProgress));
}

// Render Book Selection
function renderBookGrid() {
    const grid = document.getElementById('bookGrid');
    grid.innerHTML = '';
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.onclick = () => loadBook(book.id);
        
        const cover = document.createElement('div');
        cover.className = 'book-cover';
        cover.textContent = book.emoji;
        
        const info = document.createElement('div');
        info.className = 'book-info';
        
        const title = document.createElement('div');
        title.className = 'book-title';
        title.textContent = book.title;
        
        const subtitle = document.createElement('div');
        subtitle.className = 'book-subtitle';
        subtitle.textContent = book.subtitle;
        
        const author = document.createElement('div');
        author.className = 'book-author';
        author.textContent = book.author;
        
        const meta = document.createElement('div');
        meta.className = 'book-meta';
        meta.textContent = book.type;
        
        info.appendChild(title);
        if (book.subtitle) info.appendChild(subtitle);
        info.appendChild(author);
        info.appendChild(meta);
        
        card.appendChild(cover);
        card.appendChild(info);
        grid.appendChild(card);
    });
}

// Load Book
async function loadBook(bookId) {
    currentBook = books.find(b => b.id === bookId);
    
    // Load book data dynamically
    const script = document.createElement('script');
    script.src = currentBook.dataFile;
    script.onload = () => {
        currentBookData = window.currentBookData;
        showBookMenu();
        renderBookMenu();
    };
    script.onerror = () => {
        alert('Error loading book data');
    };
    document.body.appendChild(script);
}

// Render Book Menu
function renderBookMenu() {
    const menu = document.getElementById('bookMenu');
    menu.innerHTML = '';
    
    const sections = currentBookData.sections;
    
    sections.forEach(section => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.onclick = () => {
            if (section.id === 'characters') window.showCharacters();
            else if (section.id === 'icon-guide') window.showIconGuide();
            else if (section.id === 'chapters') window.showChapterSelect();
        };
        
        card.innerHTML = `
            <div class="menu-icon">${section.icon}</div>
            <div class="menu-text">
                <h3>${section.title}</h3>
                <p>${section.subtitle}</p>
            </div>
            ${section.count ? `<div class="menu-badge">${section.count}</div>` : ''}
        `;
        
        menu.appendChild(card);
    });
}

// Screen Navigation
window.showScreen = function(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Hide/show header
    const header = document.getElementById('bookHeader');
    if (screenId === 'bookSelectionScreen') {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }
}

window.showBookSelection = function() {
    currentBook = null;
    currentBookData = null;
    viewedCharacters.clear();
    viewedChapters.clear();
    showScreen('bookSelectionScreen');
    updateGlobalProgress();
}

window.showBookMenu = function() {
    showScreen('bookMenuScreen');
}

window.showCharacters = function() {
    currentCharacterIndex = 0;
    renderCharacter();
    showScreen('characterScreen');
}

window.showIconGuide = function() {
    renderIconGuide();
    showScreen('iconGuideScreen');
}

window.showChapterSelect = function() {
    renderChapterGrid();
    showScreen('chapterSelectScreen');
}

window.showChapter = function(index) {
    currentChapterIndex = index;
    renderChapter();
    viewedChapters.add(index);
    updateProgress();
    renderChapterGrid();
    showScreen('chapterScreen');
}

// Character Functions
function renderCharacter() {
    const char = currentBookData.characters[currentCharacterIndex];
    const imgElement = document.getElementById('charImage');
    
    // Handle image loading with fallback
    imgElement.onerror = function() {
        this.style.display = 'none';
        let placeholder = document.getElementById('charPlaceholder');
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.id = 'charPlaceholder';
            placeholder.className = 'card-image placeholder';
            this.parentNode.insertBefore(placeholder, this);
        }
        placeholder.textContent = char.name;
        placeholder.style.display = 'flex';
    };
    
    imgElement.onload = function() {
        this.style.display = 'block';
        const placeholder = document.getElementById('charPlaceholder');
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    };
    
    imgElement.src = char.image;
    
    document.getElementById('charName').textContent = char.name;
    document.getElementById('charClue').textContent = char.clue;
    document.getElementById('charWho').textContent = char.who;
    
    const personalitySection = document.getElementById('personalitySection');
    if (char.personality) {
        personalitySection.style.display = 'block';
        document.getElementById('charPersonality').textContent = char.personality;
    } else {
        personalitySection.style.display = 'none';
    }
    
    document.getElementById('charHint').textContent = char.hint;
    
    viewedCharacters.add(currentCharacterIndex);
    updateProgress();
}

window.nextCharacter = function() {
    currentCharacterIndex = (currentCharacterIndex + 1) % currentBookData.characters.length;
    renderCharacter();
}

window.prevCharacter = function() {
    currentCharacterIndex = (currentCharacterIndex - 1 + currentBookData.characters.length) % currentBookData.characters.length;
    renderCharacter();
}

window.speakCharacter = function() {
    const char = currentBookData.characters[currentCharacterIndex];
    const text = `${char.name}. Clue: ${char.clue}. Who: ${char.who}. ${char.personality ? 'Personality: ' + char.personality + '.' : ''} ${char.hint}`;
    speak(text);
}

// Icon Guide
function renderIconGuide() {
    const content = document.getElementById('iconGuideContent');
    content.innerHTML = '';
    
    currentBookData.iconSystem.forEach(icon => {
        const item = document.createElement('div');
        item.className = 'icon-guide-item';
        item.innerHTML = `
            <div class="icon-guide-emoji">${icon.icon}</div>
            <div class="icon-guide-text">
                <strong>${icon.label}</strong>
                <span>${icon.description}</span>
            </div>
        `;
        content.appendChild(item);
    });
    
    const hint = document.createElement('div');
    hint.className = 'card-hint';
    hint.textContent = '👉 Use this every time';
    content.appendChild(hint);
}

window.speakIconGuide = function() {
    const text = currentBookData.iconSystem.map(i => `${i.label}: ${i.description}`).join('. ') + '. Use this every time.';
    speak(text);
}

// Chapter Functions
function renderChapterGrid() {
    const grid = document.getElementById('chapterGrid');
    grid.innerHTML = '';
    
    currentBookData.chapters.forEach((chapter, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'chapter-bubble';
        if (viewedChapters.has(index)) {
            bubble.classList.add('completed');
        }
        bubble.onclick = () => showChapter(index);
        
        const num = document.createElement('div');
        num.className = 'chapter-bubble-num';
        num.textContent = chapter.number;
        
        bubble.appendChild(num);
        grid.appendChild(bubble);
    });
}

function renderChapter() {
    const chapter = currentBookData.chapters[currentChapterIndex];
    document.getElementById('chapterNumber').textContent = `${currentBookData.chapterIcon} Chapter ${chapter.number}`;
    
    const iconsContainer = document.getElementById('chapterIcons');
    iconsContainer.innerHTML = '';
    
    currentBookData.iconSystem.forEach((iconDef, idx) => {
        const row = document.createElement('div');
        row.className = 'info-row';
        row.innerHTML = `
            <div class="info-icon">${iconDef.icon}</div>
            <div class="info-text">
                <div class="info-label">${iconDef.label}</div>
                <div class="info-value">${chapter.content[idx]}</div>
            </div>
        `;
        iconsContainer.appendChild(row);
    });
    
    document.getElementById('chapterHint').textContent = chapter.hint;
}

window.nextChapter = function() {
    if (currentChapterIndex < currentBookData.chapters.length - 1) {
        showChapter(currentChapterIndex + 1);
    }
}

window.prevChapter = function() {
    if (currentChapterIndex > 0) {
        showChapter(currentChapterIndex - 1);
    }
}

window.speakChapter = function() {
    const chapter = currentBookData.chapters[currentChapterIndex];
    const iconLabels = currentBookData.iconSystem.map((icon, idx) => 
        `${icon.label}: ${chapter.content[idx]}`
    ).join('. ');
    const text = `Chapter ${chapter.number}. ${iconLabels}. ${chapter.hint}`;
    speak(text);
}

// Progress
function updateProgress() {
    const total = currentBookData.characters.length + currentBookData.chapters.length;
    const completed = viewedCharacters.size + viewedChapters.size;
    const percentage = (completed / total) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
    
    // Save book progress
    if (!bookProgress[currentBook.id]) {
        bookProgress[currentBook.id] = {};
    }
    bookProgress[currentBook.id].completed = completed;
    bookProgress[currentBook.id].total = total;
    bookProgress[currentBook.id].percentage = percentage;
    saveProgress();
}

function updateGlobalProgress() {
    const completedBooks = Object.values(bookProgress).filter(p => p.percentage === 100).length;
    const percentage = (completedBooks / books.length) * 100;
    document.getElementById('progressFill').style.width = percentage + '%';
}

// Text to Speech
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

// Initialize on load
init();