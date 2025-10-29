// Admin Configuration
const ADMIN_PASSWORD = 'spanish123'; // Change this to your preferred password

// Vocabulary Data - Default words
const defaultVocabulary = {
    colors: [
        { spanish: 'rojo', english: 'red', emoji: '🔴' },
        { spanish: 'azul', english: 'blue', emoji: '🔵' },
        { spanish: 'verde', english: 'green', emoji: '🟢' },
        { spanish: 'amarillo', english: 'yellow', emoji: '🟡' },
        { spanish: 'naranja', english: 'orange', emoji: '🟠' },
        { spanish: 'morado', english: 'purple', emoji: '🟣' },
        { spanish: 'rosa', english: 'pink', emoji: '🩷' },
        { spanish: 'negro', english: 'black', emoji: '⚫' },
        { spanish: 'blanco', english: 'white', emoji: '⚪' },
        { spanish: 'café', english: 'brown', emoji: '🟤' }
    ],
    numbers: [
        { spanish: 'uno', english: 'one', emoji: '1️⃣' },
        { spanish: 'dos', english: 'two', emoji: '2️⃣' },
        { spanish: 'tres', english: 'three', emoji: '3️⃣' },
        { spanish: 'cuatro', english: 'four', emoji: '4️⃣' },
        { spanish: 'cinco', english: 'five', emoji: '5️⃣' },
        { spanish: 'seis', english: 'six', emoji: '6️⃣' },
        { spanish: 'siete', english: 'seven', emoji: '7️⃣' },
        { spanish: 'ocho', english: 'eight', emoji: '8️⃣' },
        { spanish: 'nueve', english: 'nine', emoji: '9️⃣' },
        { spanish: 'diez', english: 'ten', emoji: '🔟' }
    ],
    animals: [
        { spanish: 'perro', english: 'dog', emoji: '🐕' },
        { spanish: 'gato', english: 'cat', emoji: '🐈' },
        { spanish: 'pájaro', english: 'bird', emoji: '🐦' },
        { spanish: 'pez', english: 'fish', emoji: '🐟' },
        { spanish: 'caballo', english: 'horse', emoji: '🐴' },
        { spanish: 'vaca', english: 'cow', emoji: '🐄' },
        { spanish: 'cerdo', english: 'pig', emoji: '🐷' },
        { spanish: 'oveja', english: 'sheep', emoji: '🐑' },
        { spanish: 'conejo', english: 'rabbit', emoji: '🐰' },
        { spanish: 'pollo', english: 'chicken', emoji: '🐔' }
    ],
    family: [
        { spanish: 'madre', english: 'mother', emoji: '👩' },
        { spanish: 'padre', english: 'father', emoji: '👨' },
        { spanish: 'hermano', english: 'brother', emoji: '👦' },
        { spanish: 'hermana', english: 'sister', emoji: '👧' },
        { spanish: 'abuelo', english: 'grandfather', emoji: '👴' },
        { spanish: 'abuela', english: 'grandmother', emoji: '👵' },
        { spanish: 'tío', english: 'uncle', emoji: '👨‍🦱' },
        { spanish: 'tía', english: 'aunt', emoji: '👩‍🦱' },
        { spanish: 'primo', english: 'cousin', emoji: '👶' },
        { spanish: 'familia', english: 'family', emoji: '👨‍👩‍👧‍👦' }
    ],
    greetings: [
        { spanish: 'hola', english: 'hello', emoji: '👋' },
        { spanish: 'adiós', english: 'goodbye', emoji: '🖐️' },
        { spanish: 'gracias', english: 'thank you', emoji: '🙏' },
        { spanish: 'por favor', english: 'please', emoji: '😊' },
        { spanish: 'sí', english: 'yes', emoji: '✅' },
        { spanish: 'no', english: 'no', emoji: '❌' },
        { spanish: 'buenos días', english: 'good morning', emoji: '🌅' },
        { spanish: 'buenas tardes', english: 'good afternoon', emoji: '☀️' },
        { spanish: 'buenas noches', english: 'good night', emoji: '🌙' },
        { spanish: 'perdón', english: 'sorry', emoji: '😔' },
        { spanish: 'de nada', english: 'you\'re welcome', emoji: '😄' },
        { spanish: '¿Cómo estás?', english: 'How are you?', emoji: '🤔' },
        { spanish: 'bien', english: 'good/well', emoji: '😊' },
        { spanish: 'mal', english: 'bad', emoji: '😞' },
        { spanish: '¿Qué tal?', english: 'What\'s up?', emoji: '👍' },
        { spanish: 'hasta luego', english: 'see you later', emoji: '👋' },
        { spanish: 'hasta mañana', english: 'see you tomorrow', emoji: '📅' },
        { spanish: 'mucho gusto', english: 'nice to meet you', emoji: '🤝' },
        { spanish: '¿Cómo te llamas?', english: 'What\'s your name?', emoji: '❓' },
        { spanish: 'me llamo...', english: 'my name is...', emoji: '🙋' },
        { spanish: 'bienvenido', english: 'welcome', emoji: '🎉' }
    ],
    food: [
        { spanish: 'pan', english: 'bread', emoji: '🍞' },
        { spanish: 'agua', english: 'water', emoji: '💧' },
        { spanish: 'leche', english: 'milk', emoji: '🥛' },
        { spanish: 'manzana', english: 'apple', emoji: '🍎' },
        { spanish: 'naranja', english: 'orange', emoji: '🍊' },
        { spanish: 'plátano', english: 'banana', emoji: '🍌' },
        { spanish: 'queso', english: 'cheese', emoji: '🧀' },
        { spanish: 'huevo', english: 'egg', emoji: '🥚' },
        { spanish: 'carne', english: 'meat', emoji: '🥩' },
        { spanish: 'pollo', english: 'chicken', emoji: '🍗' }
    ]
};

// Load vocabulary from localStorage or use defaults
let vocabulary = loadVocabulary();

// Global State
let currentCategory = 'colors';
let currentCardIndex = 0;
let matchingSelected = null;
let matchingScore = 0;
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let memoryCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let currentManageCategory = 'colors';

// Check if we're using API (deployed) or localStorage (local)
const USE_API = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' && window.location.protocol.startsWith('http');

// LocalStorage Functions
function loadVocabulary() {
    const saved = localStorage.getItem('spanishAppVocabulary');
    if (saved) {
        return JSON.parse(saved);
    }
    return JSON.parse(JSON.stringify(defaultVocabulary)); // Deep clone
}

function saveVocabulary() {
    localStorage.setItem('spanishAppVocabulary', JSON.stringify(vocabulary));

    // Also sync with API if deployed
    if (USE_API) {
        syncToAPI();
    }
}

// API sync function
async function syncToAPI() {
    try {
        const response = await fetch('/api/vocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vocabulary)
        });
        if (!response.ok) {
            console.error('Failed to sync with API');
        }
    } catch (error) {
        console.error('Error syncing with API:', error);
    }
}

// Load from API if deployed
async function loadFromAPI() {
    try {
        const response = await fetch('/api/vocabulary');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error loading from API:', error);
    }
    return null;
}

function getAllCategories() {
    return Object.keys(vocabulary);
}

// Admin Functions
function showAdminLogin() {
    showScreen('admin-login');
    document.getElementById('admin-password').value = '';
    document.getElementById('login-error').textContent = '';
}

function checkAdminPassword() {
    const password = document.getElementById('admin-password').value;
    if (password === ADMIN_PASSWORD) {
        showScreen('admin-panel');
        initAdminPanel();
    } else {
        document.getElementById('login-error').textContent = 'Incorrect password';
    }
}

function showAdminTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update tab content
    document.querySelectorAll('.admin-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    // Initialize specific tabs
    if (tabId === 'manage-words') {
        showCategoryWords('colors');
    } else if (tabId === 'manage-categories') {
        displayCategories();
    }
}

function initAdminPanel() {
    updateCategorySelectors();
    displayCategories();

    // Debug emoji field
    setTimeout(() => {
        const emojiField = document.getElementById('word-emoji');
        if (emojiField) {
            console.log('Emoji field found, adding listeners');
            emojiField.addEventListener('input', function(e) {
                console.log('Emoji field input event:', e.target.value);
            });
            emojiField.addEventListener('change', function(e) {
                console.log('Emoji field change event:', e.target.value);
            });
            emojiField.addEventListener('blur', function(e) {
                console.log('Emoji field blur event:', e.target.value);
            });
        } else {
            console.log('Emoji field NOT found');
        }
    }, 100);
}

function updateCategorySelectors() {
    const categories = getAllCategories();

    // Update category dropdown in add form
    const select = document.getElementById('word-category');
    select.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        select.appendChild(option);
    });

    // Update category buttons in flashcards and manage screens
    updateFlashcardCategories();
    updateManageCategories();
}

function updateFlashcardCategories() {
    const container = document.querySelector('#flashcards .category-selector');
    const categories = getAllCategories().sort();

    container.innerHTML = '';
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (cat === currentCategory ? ' active' : '');
        btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.dataset.category = cat; // Store the actual category name
        btn.onclick = function() {
            changeCategory(cat);
        };
        container.appendChild(btn);
    });
}

function updateManageCategories() {
    const container = document.querySelector('#manage-words .category-selector');
    const categories = getAllCategories();

    container.innerHTML = '';
    categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = 'category-btn' + (index === 0 ? ' active' : '');
        btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        btn.onclick = () => showCategoryWords(cat);
        container.appendChild(btn);
    });
}

function addVocabularyWord(event) {
    event.preventDefault();

    const categoryEl = document.getElementById('word-category');
    const spanishEl = document.getElementById('word-spanish');
    const englishEl = document.getElementById('word-english');
    const emojiEl = document.getElementById('word-emoji');

    // Check if elements exist
    if (!categoryEl || !spanishEl || !englishEl || !emojiEl) {
        console.error('Form elements not found!');
        alert('Error: Form fields not found. Please refresh the page.');
        return;
    }

    const category = categoryEl.value;
    const spanish = spanishEl.value ? spanishEl.value.trim() : '';
    const english = englishEl.value ? englishEl.value.trim() : '';
    const emojiValue = emojiEl.value ? emojiEl.value.trim() : '';
    const emoji = emojiValue.length > 0 ? emojiValue : '📝';

    console.log('Form values:', { category, spanish, english, emojiValue, emoji });

    if (!spanish || !english) {
        alert('Please fill in both Spanish and English fields');
        return;
    }

    if (!vocabulary[category]) {
        vocabulary[category] = [];
    }

    vocabulary[category].push({ spanish, english, emoji });
    saveVocabulary();

    // Clear form BEFORE updating selectors
    spanishEl.value = '';
    englishEl.value = '';
    emojiEl.value = '';

    // Update all category displays
    updateCategorySelectors();
    displayCategories();

    // Show success message
    const successMsg = document.getElementById('add-word-success');
    successMsg.textContent = `Added "${spanish}" to ${category}!`;
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);
}

function showCategoryWords(category) {
    currentManageCategory = category;

    // Update active button
    document.querySelectorAll('#manage-words .category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category) {
            btn.classList.add('active');
        }
    });

    const wordList = document.getElementById('word-list');
    const words = vocabulary[category] || [];

    if (words.length === 0) {
        wordList.innerHTML = '<p style="text-align: center; color: #666;">No words in this category yet.</p>';
        return;
    }

    wordList.innerHTML = '';
    words.forEach((word, index) => {
        const div = document.createElement('div');
        div.className = 'word-item';
        div.innerHTML = `
            <div class="word-info">
                <strong>${word.spanish}</strong> = ${word.english} ${word.emoji}
            </div>
            <div class="word-actions">
                <button class="delete-btn" onclick="deleteWord('${category}', ${index})">Delete</button>
            </div>
        `;
        wordList.appendChild(div);
    });
}

function deleteWord(category, index) {
    if (confirm('Are you sure you want to delete this word?')) {
        vocabulary[category].splice(index, 1);
        saveVocabulary();
        showCategoryWords(category);
    }
}

function addCategory(event) {
    event.preventDefault();

    const name = document.getElementById('new-category-name').value.trim().toLowerCase();

    if (vocabulary[name]) {
        alert('Category already exists!');
        return;
    }

    vocabulary[name] = [];
    saveVocabulary();
    updateCategorySelectors();
    displayCategories();

    // Show success message
    const successMsg = document.getElementById('add-category-success');
    successMsg.textContent = `Category "${name}" created!`;
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 3000);

    document.getElementById('new-category-name').value = '';
}

function displayCategories() {
    const container = document.getElementById('category-list');
    const categories = getAllCategories();

    container.innerHTML = '';
    categories.forEach(cat => {
        const wordCount = vocabulary[cat].length;
        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <h4>${cat.charAt(0).toUpperCase() + cat.slice(1)}</h4>
            <p class="word-count">${wordCount} words</p>
            <button class="delete-btn" onclick="deleteCategory('${cat}')" ${wordCount > 0 ? 'disabled' : ''}>
                Delete
            </button>
        `;
        container.appendChild(div);
    });
}

function deleteCategory(category) {
    const wordCount = vocabulary[category].length;
    if (wordCount > 0) {
        alert('Cannot delete category with words. Delete all words first.');
        return;
    }

    if (confirm(`Delete category "${category}"?`)) {
        delete vocabulary[category];
        saveVocabulary();
        updateCategorySelectors();
        displayCategories();
    }
}

function exportData() {
    const dataStr = JSON.stringify(vocabulary, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'spanish-app-data.json';
    link.click();
    URL.revokeObjectURL(url);
}

function importData() {
    const fileInput = document.getElementById('import-file');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file first');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            vocabulary = importedData;
            saveVocabulary();
            updateCategorySelectors();

            const successMsg = document.getElementById('import-success');
            successMsg.textContent = 'Data imported successfully!';
            successMsg.classList.add('show');
            setTimeout(() => successMsg.classList.remove('show'), 3000);

            fileInput.value = '';
        } catch (error) {
            alert('Error importing file. Please make sure it\'s a valid JSON file.');
        }
    };
    reader.readAsText(file);
}

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Initialize games when shown
    if (screenId === 'matching') {
        resetMatchingGame();
    } else if (screenId === 'quiz') {
        initQuiz();
    } else if (screenId === 'memory') {
        resetMemoryGame();
    } else if (screenId === 'flashcards') {
        // Update category buttons in case new categories were added
        updateFlashcardCategories();
        // Set to first category if current category doesn't exist
        const categories = getAllCategories();
        if (categories.length > 0 && !vocabulary[currentCategory]) {
            currentCategory = categories[0];
        }
        currentCardIndex = 0;
        updateFlashcard();
    }
}

// Flashcards
function changeCategory(category) {
    console.log('Changing to category:', category);
    console.log('Available categories:', Object.keys(vocabulary));
    console.log('Words in this category:', vocabulary[category]);

    currentCategory = category;
    currentCardIndex = 0;

    // Update active button in flashcards screen only
    document.querySelectorAll('#flashcards .category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === category.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    updateFlashcard();
}

function updateFlashcard() {
    // Safety check - make sure category exists
    if (!vocabulary[currentCategory] || vocabulary[currentCategory].length === 0) {
        const categories = getAllCategories();
        if (categories.length > 0) {
            currentCategory = categories[0];
        }
    }

    const cards = vocabulary[currentCategory];
    if (!cards || cards.length === 0) {
        console.error('No cards found for category:', currentCategory);
        return;
    }

    const card = cards[currentCardIndex];

    document.getElementById('spanish-word').textContent = card.spanish;
    document.getElementById('word-emoji').textContent = card.emoji;
    document.getElementById('english-word').textContent = card.english;
    document.getElementById('card-counter').textContent = `${currentCardIndex + 1} / ${cards.length}`;

    // Reset flip
    document.getElementById('flashcard-inner').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard-inner').classList.toggle('flipped');
}

function nextCard() {
    const cards = vocabulary[currentCategory];
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateFlashcard();
}

function previousCard() {
    const cards = vocabulary[currentCategory];
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateFlashcard();
}

// Matching Game
function resetMatchingGame() {
    matchingSelected = null;
    matchingScore = 0;
    document.getElementById('matching-score').textContent = matchingScore;

    // Get random words from all categories
    const allWords = [];
    Object.values(vocabulary).forEach(category => {
        allWords.push(...category);
    });

    // Shuffle and take 6 words
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    const selectedWords = shuffled.slice(0, 6);

    // Create Spanish and English columns
    const spanishWords = selectedWords.map(w => ({ text: w.spanish, pair: w.english, type: 'spanish' }));
    const englishWords = selectedWords.map(w => ({ text: w.english, pair: w.spanish, type: 'english' }));

    // Shuffle each column
    spanishWords.sort(() => Math.random() - 0.5);
    englishWords.sort(() => Math.random() - 0.5);

    // Render
    const container = document.getElementById('matching-container');
    container.innerHTML = `
        <div class="matching-column" id="spanish-column"></div>
        <div class="matching-column" id="english-column"></div>
    `;

    const spanishColumn = document.getElementById('spanish-column');
    const englishColumn = document.getElementById('english-column');

    spanishWords.forEach((word, index) => {
        const div = document.createElement('div');
        div.className = 'matching-item';
        div.textContent = word.text;
        div.dataset.pair = word.pair;
        div.dataset.type = word.type;
        div.dataset.index = index;
        div.onclick = () => selectMatchingItem(div);
        spanishColumn.appendChild(div);
    });

    englishWords.forEach((word, index) => {
        const div = document.createElement('div');
        div.className = 'matching-item';
        div.textContent = word.text;
        div.dataset.pair = word.pair;
        div.dataset.type = word.type;
        div.dataset.index = index;
        div.onclick = () => selectMatchingItem(div);
        englishColumn.appendChild(div);
    });
}

function selectMatchingItem(element) {
    if (element.classList.contains('matched')) return;

    if (!matchingSelected) {
        // First selection
        matchingSelected = element;
        element.classList.add('selected');
    } else if (matchingSelected === element) {
        // Deselect
        matchingSelected.classList.remove('selected');
        matchingSelected = null;
    } else {
        // Second selection - check match
        const first = matchingSelected;
        const second = element;

        if (first.dataset.type !== second.dataset.type &&
            first.dataset.pair === second.textContent &&
            second.dataset.pair === first.textContent) {
            // Match!
            first.classList.add('matched');
            second.classList.add('matched');
            first.classList.remove('selected');
            matchingScore++;
            document.getElementById('matching-score').textContent = matchingScore;
        } else {
            // No match
            first.classList.remove('selected');
        }

        matchingSelected = null;
    }
}

// Quiz
function initQuiz() {
    quizScore = 0;
    currentQuestionIndex = 0;

    // Generate questions from all categories
    const allWords = [];
    Object.values(vocabulary).forEach(category => {
        allWords.push(...category);
    });

    // Shuffle and take 10 questions
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, 10);

    document.getElementById('quiz-total').textContent = quizQuestions.length;
    document.getElementById('quiz-score').textContent = quizScore;

    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-current').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = `What does "${question.spanish}" mean in English?`;

    // Generate answer options
    const allWords = [];
    Object.values(vocabulary).forEach(category => {
        allWords.push(...category);
    });

    const wrongAnswers = allWords
        .filter(w => w.english !== question.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.english);

    const answers = [...wrongAnswers, question.english].sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer, question.english);
        optionsContainer.appendChild(button);
    });

    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';
    document.getElementById('next-question-btn').classList.add('hidden');
}

function checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        } else if (btn.textContent === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
    });

    const feedback = document.getElementById('quiz-feedback');
    if (selected === correct) {
        quizScore++;
        document.getElementById('quiz-score').textContent = quizScore;
        feedback.textContent = '✓ Correct! Great job!';
        feedback.className = 'quiz-feedback correct';
    } else {
        feedback.textContent = `✗ Not quite. The correct answer is "${correct}".`;
        feedback.className = 'quiz-feedback incorrect';
    }

    document.getElementById('next-question-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showQuizResults() {
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    let message = '';

    if (percentage >= 90) {
        message = 'Excellent! You\'re a Spanish superstar!';
    } else if (percentage >= 70) {
        message = 'Great job! Keep practicing!';
    } else if (percentage >= 50) {
        message = 'Good effort! Try again to improve!';
    } else {
        message = 'Keep practicing! You\'ll get better!';
    }

    document.getElementById('question-text').textContent = `Quiz Complete!`;
    document.getElementById('answer-options').innerHTML = `
        <div style="text-align: center; padding: 30px;">
            <p style="font-size: 2em; margin-bottom: 20px;">${quizScore} / ${quizQuestions.length}</p>
            <p style="font-size: 1.5em; margin-bottom: 30px;">${message}</p>
            <button class="control-btn" onclick="initQuiz()">Try Again</button>
            <button class="back-btn" style="margin-left: 10px;" onclick="showScreen('main-menu')">Back to Menu</button>
        </div>
    `;
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('next-question-btn').classList.add('hidden');
}

// Memory Game
function resetMemoryGame() {
    memoryFlipped = [];
    memoryMatched = [];
    document.getElementById('memory-score').textContent = 0;

    // Get random words
    const allWords = [];
    Object.values(vocabulary).forEach(category => {
        allWords.push(...category);
    });

    const shuffled = allWords.sort(() => Math.random() - 0.5);
    const selectedWords = shuffled.slice(0, 6);

    // Create pairs (Spanish and English)
    memoryCards = [];
    selectedWords.forEach(word => {
        memoryCards.push({ text: word.spanish, pair: word.english, id: word.spanish + '-sp' });
        memoryCards.push({ text: word.english, pair: word.spanish, id: word.spanish + '-en' });
    });

    // Shuffle cards
    memoryCards.sort(() => Math.random() - 0.5);

    // Render
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';

    memoryCards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'memory-card hidden';
        div.textContent = card.text;
        div.dataset.index = index;
        div.dataset.text = card.text;
        div.dataset.pair = card.pair;
        div.onclick = () => flipMemoryCard(div, index);
        grid.appendChild(div);
    });
}

function flipMemoryCard(element, index) {
    if (memoryFlipped.length >= 2 || element.classList.contains('matched') || element.classList.contains('flipped')) {
        return;
    }

    element.classList.remove('hidden');
    element.classList.add('flipped');
    memoryFlipped.push({ element, index });

    if (memoryFlipped.length === 2) {
        setTimeout(checkMemoryMatch, 800);
    }
}

function checkMemoryMatch() {
    const [first, second] = memoryFlipped;

    if (first.element.dataset.text === second.element.dataset.pair &&
        second.element.dataset.text === first.element.dataset.pair) {
        // Match!
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        first.element.classList.remove('flipped');
        second.element.classList.remove('flipped');

        memoryMatched.push(first.index, second.index);
        const score = memoryMatched.length / 2;
        document.getElementById('memory-score').textContent = score;
    } else {
        // No match
        first.element.classList.add('hidden');
        second.element.classList.add('hidden');
        first.element.classList.remove('flipped');
        second.element.classList.remove('flipped');
    }

    memoryFlipped = [];
}

// Initialize on load
document.addEventListener('DOMContentLoaded', async () => {
    // Load vocabulary from API if deployed
    if (USE_API) {
        const apiData = await loadFromAPI();
        if (apiData) {
            vocabulary = apiData;
            // Also save to localStorage for offline use
            localStorage.setItem('spanishAppVocabulary', JSON.stringify(vocabulary));
        }
    } else {
        // Running locally - make sure we load from localStorage
        vocabulary = loadVocabulary();
    }

    updateFlashcard();

    // Debug emoji field
    const emojiField = document.getElementById('word-emoji');
    if (emojiField) {
        emojiField.addEventListener('input', function(e) {
            console.log('Emoji field changed to:', e.target.value);
        });
        emojiField.addEventListener('blur', function(e) {
            console.log('Emoji field on blur:', e.target.value);
        });
    }
});
