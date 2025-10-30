// Admin Configuration
const ADMIN_PASSWORD = 'spanish123'; // Change this to your preferred password

// Vocabulary Data - Default words with levels
const defaultVocabulary = {
    colors: [
        { spanish: 'rojo', english: 'red', emoji: '🔴', level: 1 },
        { spanish: 'azul', english: 'blue', emoji: '🔵', level: 1 },
        { spanish: 'verde', english: 'green', emoji: '🟢', level: 1 },
        { spanish: 'amarillo', english: 'yellow', emoji: '🟡', level: 1 },
        { spanish: 'naranja', english: 'orange', emoji: '🟠', level: 1 },
        { spanish: 'morado', english: 'purple', emoji: '🟣', level: 1 },
        { spanish: 'rosa', english: 'pink', emoji: '🩷', level: 1 },
        { spanish: 'negro', english: 'black', emoji: '⚫', level: 1 },
        { spanish: 'blanco', english: 'white', emoji: '⚪', level: 1 },
        { spanish: 'café', english: 'brown', emoji: '🟤', level: 1 },
        // Level 2 colors
        { spanish: 'gris', english: 'gray', emoji: '🩶', level: 2 },
        { spanish: 'dorado', english: 'gold', emoji: '🟨', level: 2 },
        { spanish: 'plateado', english: 'silver', emoji: '⚪', level: 2 },
        { spanish: 'celeste', english: 'sky blue', emoji: '🩵', level: 2 },
        { spanish: 'violeta', english: 'violet', emoji: '🟣', level: 2 },
        { spanish: 'rojo oscuro', english: 'dark red', emoji: '🔴', level: 2 },
        { spanish: 'verde claro', english: 'light green', emoji: '🟢', level: 2 },
        // Level 3 colors
        { spanish: 'turquesa', english: 'turquoise', emoji: '🩵', level: 3 },
        { spanish: 'beige', english: 'beige', emoji: '🟤', level: 3 },
        { spanish: 'carmesí', english: 'crimson', emoji: '🔴', level: 3 },
        { spanish: 'esmeralda', english: 'emerald', emoji: '💚', level: 3 },
        { spanish: 'índigo', english: 'indigo', emoji: '🔵', level: 3 },
        { spanish: 'coral', english: 'coral', emoji: '🪸', level: 3 }
    ],
    numbers: [
        { spanish: 'uno', english: 'one', emoji: '1️⃣', level: 1 },
        { spanish: 'dos', english: 'two', emoji: '2️⃣', level: 1 },
        { spanish: 'tres', english: 'three', emoji: '3️⃣', level: 1 },
        { spanish: 'cuatro', english: 'four', emoji: '4️⃣', level: 1 },
        { spanish: 'cinco', english: 'five', emoji: '5️⃣', level: 1 },
        { spanish: 'seis', english: 'six', emoji: '6️⃣', level: 1 },
        { spanish: 'siete', english: 'seven', emoji: '7️⃣', level: 1 },
        { spanish: 'ocho', english: 'eight', emoji: '8️⃣', level: 1 },
        { spanish: 'nueve', english: 'nine', emoji: '9️⃣', level: 1 },
        { spanish: 'diez', english: 'ten', emoji: '🔟', level: 1 },
        // Level 2 numbers
        { spanish: 'once', english: 'eleven', emoji: '1️⃣1️⃣', level: 2 },
        { spanish: 'doce', english: 'twelve', emoji: '1️⃣2️⃣', level: 2 },
        { spanish: 'trece', english: 'thirteen', emoji: '1️⃣3️⃣', level: 2 },
        { spanish: 'catorce', english: 'fourteen', emoji: '1️⃣4️⃣', level: 2 },
        { spanish: 'quince', english: 'fifteen', emoji: '1️⃣5️⃣', level: 2 },
        { spanish: 'dieciséis', english: 'sixteen', emoji: '1️⃣6️⃣', level: 2 },
        { spanish: 'veinte', english: 'twenty', emoji: '2️⃣0️⃣', level: 2 },
        { spanish: 'treinta', english: 'thirty', emoji: '3️⃣0️⃣', level: 2 },
        { spanish: 'cuarenta', english: 'forty', emoji: '4️⃣0️⃣', level: 2 },
        { spanish: 'cincuenta', english: 'fifty', emoji: '5️⃣0️⃣', level: 2 },
        // Level 3 numbers
        { spanish: 'sesenta', english: 'sixty', emoji: '6️⃣0️⃣', level: 3 },
        { spanish: 'setenta', english: 'seventy', emoji: '7️⃣0️⃣', level: 3 },
        { spanish: 'ochenta', english: 'eighty', emoji: '8️⃣0️⃣', level: 3 },
        { spanish: 'noventa', english: 'ninety', emoji: '9️⃣0️⃣', level: 3 },
        { spanish: 'cien', english: 'one hundred', emoji: '💯', level: 3 },
        { spanish: 'doscientos', english: 'two hundred', emoji: '2️⃣0️⃣0️⃣', level: 3 },
        { spanish: 'quinientos', english: 'five hundred', emoji: '5️⃣0️⃣0️⃣', level: 3 },
        { spanish: 'mil', english: 'one thousand', emoji: '1️⃣0️⃣0️⃣0️⃣', level: 3 }
    ],
    animals: [
        { spanish: 'perro', english: 'dog', emoji: '🐕', level: 1 },
        { spanish: 'gato', english: 'cat', emoji: '🐈', level: 1 },
        { spanish: 'pájaro', english: 'bird', emoji: '🐦', level: 1 },
        { spanish: 'pez', english: 'fish', emoji: '🐟', level: 1 },
        { spanish: 'caballo', english: 'horse', emoji: '🐴', level: 1 },
        { spanish: 'vaca', english: 'cow', emoji: '🐄', level: 1 },
        { spanish: 'cerdo', english: 'pig', emoji: '🐷', level: 1 },
        { spanish: 'oveja', english: 'sheep', emoji: '🐑', level: 1 },
        { spanish: 'conejo', english: 'rabbit', emoji: '🐰', level: 1 },
        { spanish: 'pollo', english: 'chicken', emoji: '🐔', level: 1 },
        // Level 2 animals
        { spanish: 'león', english: 'lion', emoji: '🦁', level: 2 },
        { spanish: 'tigre', english: 'tiger', emoji: '🐯', level: 2 },
        { spanish: 'elefante', english: 'elephant', emoji: '🐘', level: 2 },
        { spanish: 'jirafa', english: 'giraffe', emoji: '🦒', level: 2 },
        { spanish: 'mono', english: 'monkey', emoji: '🐵', level: 2 },
        { spanish: 'oso', english: 'bear', emoji: '🐻', level: 2 },
        { spanish: 'zorro', english: 'fox', emoji: '🦊', level: 2 },
        { spanish: 'lobo', english: 'wolf', emoji: '🐺', level: 2 },
        { spanish: 'delfín', english: 'dolphin', emoji: '🐬', level: 2 },
        { spanish: 'pingüino', english: 'penguin', emoji: '🐧', level: 2 },
        { spanish: 'cebra', english: 'zebra', emoji: '🦓', level: 2 },
        // Level 3 animals
        { spanish: 'cocodrilo', english: 'crocodile', emoji: '🐊', level: 3 },
        { spanish: 'serpiente', english: 'snake', emoji: '🐍', level: 3 },
        { spanish: 'mariposa', english: 'butterfly', emoji: '🦋', level: 3 },
        { spanish: 'tortuga', english: 'turtle', emoji: '🐢', level: 3 },
        { spanish: 'águila', english: 'eagle', emoji: '🦅', level: 3 },
        { spanish: 'murciélago', english: 'bat', emoji: '🦇', level: 3 },
        { spanish: 'tiburón', english: 'shark', emoji: '🦈', level: 3 },
        { spanish: 'ballena', english: 'whale', emoji: '🐋', level: 3 },
        { spanish: 'pulpo', english: 'octopus', emoji: '🐙', level: 3 },
        { spanish: 'medusa', english: 'jellyfish', emoji: '🪼', level: 3 }
    ],
    family: [
        { spanish: 'madre', english: 'mother', emoji: '👩', level: 1 },
        { spanish: 'padre', english: 'father', emoji: '👨', level: 1 },
        { spanish: 'hermano', english: 'brother', emoji: '👦', level: 1 },
        { spanish: 'hermana', english: 'sister', emoji: '👧', level: 1 },
        { spanish: 'abuelo', english: 'grandfather', emoji: '👴', level: 1 },
        { spanish: 'abuela', english: 'grandmother', emoji: '👵', level: 1 },
        { spanish: 'tío', english: 'uncle', emoji: '👨‍🦱', level: 1 },
        { spanish: 'tía', english: 'aunt', emoji: '👩‍🦱', level: 1 },
        { spanish: 'primo', english: 'cousin', emoji: '👶', level: 1 },
        { spanish: 'familia', english: 'family', emoji: '👨‍👩‍👧‍👦', level: 1 },
        // Level 2 family
        { spanish: 'hijo', english: 'son', emoji: '👦', level: 2 },
        { spanish: 'hija', english: 'daughter', emoji: '👧', level: 2 },
        { spanish: 'esposo', english: 'husband', emoji: '🤵', level: 2 },
        { spanish: 'esposa', english: 'wife', emoji: '👰', level: 2 },
        { spanish: 'nieto', english: 'grandson', emoji: '👶', level: 2 },
        { spanish: 'nieta', english: 'granddaughter', emoji: '👶', level: 2 },
        // Level 3 family
        { spanish: 'sobrino', english: 'nephew', emoji: '👦', level: 3 },
        { spanish: 'sobrina', english: 'niece', emoji: '👧', level: 3 },
        { spanish: 'suegra', english: 'mother-in-law', emoji: '👩', level: 3 },
        { spanish: 'suegro', english: 'father-in-law', emoji: '👨', level: 3 }
    ],
    greetings: [
        { spanish: 'hola', english: 'hello', emoji: '👋', level: 1 },
        { spanish: 'adiós', english: 'goodbye', emoji: '🖐️', level: 1 },
        { spanish: 'gracias', english: 'thank you', emoji: '🙏', level: 1 },
        { spanish: 'por favor', english: 'please', emoji: '😊', level: 1 },
        { spanish: 'sí', english: 'yes', emoji: '✅', level: 1 },
        { spanish: 'no', english: 'no', emoji: '❌', level: 1 },
        { spanish: 'buenos días', english: 'good morning', emoji: '🌅', level: 1 },
        { spanish: 'buenas tardes', english: 'good afternoon', emoji: '☀️', level: 1 },
        { spanish: 'buenas noches', english: 'good night', emoji: '🌙', level: 1 },
        { spanish: 'perdón', english: 'sorry', emoji: '😔', level: 1 },
        { spanish: 'de nada', english: 'you\'re welcome', emoji: '😄', level: 1 },
        { spanish: '¿Cómo estás?', english: 'How are you?', emoji: '🤔', level: 1 },
        { spanish: 'bien', english: 'good/well', emoji: '😊', level: 1 },
        { spanish: 'mal', english: 'bad', emoji: '😞', level: 1 },
        { spanish: '¿Qué tal?', english: 'What\'s up?', emoji: '👍', level: 1 },
        { spanish: 'hasta luego', english: 'see you later', emoji: '👋', level: 1 },
        { spanish: 'hasta mañana', english: 'see you tomorrow', emoji: '📅', level: 1 },
        { spanish: 'mucho gusto', english: 'nice to meet you', emoji: '🤝', level: 1 },
        { spanish: '¿Cómo te llamas?', english: 'What\'s your name?', emoji: '❓', level: 1 },
        { spanish: 'me llamo...', english: 'my name is...', emoji: '🙋', level: 1 },
        { spanish: 'bienvenido', english: 'welcome', emoji: '🎉', level: 1 },
        // Level 2 greetings
        { spanish: '¿Qué pasa?', english: 'What\'s happening?', emoji: '🤷', level: 2 },
        { spanish: 'encantado', english: 'pleased to meet you', emoji: '😊', level: 2 },
        { spanish: 'con permiso', english: 'excuse me', emoji: '🙏', level: 2 },
        { spanish: 'salud', english: 'bless you / cheers', emoji: '🥂', level: 2 },
        { spanish: 'felicidades', english: 'congratulations', emoji: '🎊', level: 2 },
        { spanish: 'buena suerte', english: 'good luck', emoji: '🍀', level: 2 },
        { spanish: 'disculpe', english: 'pardon me', emoji: '🙇', level: 2 },
        { spanish: 'lo siento', english: 'I\'m sorry', emoji: '😞', level: 2 },
        { spanish: 'claro', english: 'of course', emoji: '👍', level: 2 },
        { spanish: 'tal vez', english: 'maybe', emoji: '🤔', level: 2 },
        // Level 3 greetings
        { spanish: '¿Cómo te va?', english: 'How\'s it going?', emoji: '😊', level: 3 },
        { spanish: '¿De dónde eres?', english: 'Where are you from?', emoji: '🗺️', level: 3 },
        { spanish: 'Hasta pronto', english: 'See you soon', emoji: '👋', level: 3 },
        { spanish: 'Nos vemos', english: 'See you', emoji: '👀', level: 3 },
        { spanish: 'Que tengas un buen día', english: 'Have a nice day', emoji: '☀️', level: 3 },
        { spanish: '¿Qué hay de nuevo?', english: 'What\'s new?', emoji: '🆕', level: 3 },
        { spanish: 'Con mucho gusto', english: 'With pleasure', emoji: '😊', level: 3 },
        { spanish: 'Un placer conocerte', english: 'A pleasure to meet you', emoji: '🤝', level: 3 }
    ],
    food: [
        { spanish: 'pan', english: 'bread', emoji: '🍞', level: 1 },
        { spanish: 'agua', english: 'water', emoji: '💧', level: 1 },
        { spanish: 'leche', english: 'milk', emoji: '🥛', level: 1 },
        { spanish: 'manzana', english: 'apple', emoji: '🍎', level: 1 },
        { spanish: 'naranja', english: 'orange', emoji: '🍊', level: 1 },
        { spanish: 'plátano', english: 'banana', emoji: '🍌', level: 1 },
        { spanish: 'queso', english: 'cheese', emoji: '🧀', level: 1 },
        { spanish: 'huevo', english: 'egg', emoji: '🥚', level: 1 },
        { spanish: 'carne', english: 'meat', emoji: '🥩', level: 1 },
        { spanish: 'pollo', english: 'chicken', emoji: '🍗', level: 1 },
        // Level 2 food & fruits
        { spanish: 'arroz', english: 'rice', emoji: '🍚', level: 2 },
        { spanish: 'pasta', english: 'pasta', emoji: '🍝', level: 2 },
        { spanish: 'pescado', english: 'fish', emoji: '🐟', level: 2 },
        { spanish: 'verduras', english: 'vegetables', emoji: '🥗', level: 2 },
        { spanish: 'fruta', english: 'fruit', emoji: '🍇', level: 2 },
        { spanish: 'sopa', english: 'soup', emoji: '🍲', level: 2 },
        { spanish: 'ensalada', english: 'salad', emoji: '🥗', level: 2 },
        { spanish: 'uvas', english: 'grapes', emoji: '🍇', level: 2 },
        { spanish: 'fresa', english: 'strawberry', emoji: '🍓', level: 2 },
        { spanish: 'sandía', english: 'watermelon', emoji: '🍉', level: 2 },
        { spanish: 'pera', english: 'pear', emoji: '🍐', level: 2 },
        { spanish: 'limón', english: 'lemon', emoji: '🍋', level: 2 },
        { spanish: 'tomate', english: 'tomato', emoji: '🍅', level: 2 },
        // Level 3 food & fruits
        { spanish: 'helado', english: 'ice cream', emoji: '🍦', level: 3 },
        { spanish: 'pastel', english: 'cake', emoji: '🍰', level: 3 },
        { spanish: 'chocolate', english: 'chocolate', emoji: '🍫', level: 3 },
        { spanish: 'café', english: 'coffee', emoji: '☕', level: 3 },
        { spanish: 'té', english: 'tea', emoji: '🍵', level: 3 },
        { spanish: 'jugo', english: 'juice', emoji: '🧃', level: 3 },
        { spanish: 'piña', english: 'pineapple', emoji: '🍍', level: 3 },
        { spanish: 'durazno', english: 'peach', emoji: '🍑', level: 3 },
        { spanish: 'cereza', english: 'cherry', emoji: '🍒', level: 3 },
        { spanish: 'coco', english: 'coconut', emoji: '🥥', level: 3 },
        { spanish: 'aguacate', english: 'avocado', emoji: '🥑', level: 3 },
        { spanish: 'mango', english: 'mango', emoji: '🥭', level: 3 }
    ],
    // Verbs - Level 2 (AR verbs) and Level 3 (AR, ER, IR verbs)
    verbs: [
        // Level 2 - AR verbs only
        { spanish: 'hablar', english: 'to speak', emoji: '🗣️', level: 2 },
        { spanish: 'bailar', english: 'to dance', emoji: '💃', level: 2 },
        { spanish: 'cantar', english: 'to sing', emoji: '🎤', level: 2 },
        { spanish: 'caminar', english: 'to walk', emoji: '🚶', level: 2 },
        { spanish: 'nadar', english: 'to swim', emoji: '🏊', level: 2 },
        { spanish: 'estudiar', english: 'to study', emoji: '📚', level: 2 },
        { spanish: 'trabajar', english: 'to work', emoji: '💼', level: 2 },
        { spanish: 'jugar', english: 'to play', emoji: '🎮', level: 2 },
        { spanish: 'cocinar', english: 'to cook', emoji: '🍳', level: 2 },
        { spanish: 'comprar', english: 'to buy', emoji: '🛒', level: 2 },
        { spanish: 'mirar', english: 'to watch/look', emoji: '👀', level: 2 },
        { spanish: 'escuchar', english: 'to listen', emoji: '👂', level: 2 },
        // Level 3 - AR verbs
        { spanish: 'enseñar', english: 'to teach', emoji: '👨‍🏫', level: 3 },
        { spanish: 'viajar', english: 'to travel', emoji: '✈️', level: 3 },
        { spanish: 'dibujar', english: 'to draw', emoji: '🎨', level: 3 },
        { spanish: 'contestar', english: 'to answer', emoji: '💬', level: 3 },
        // Level 3 - ER verbs
        { spanish: 'comer', english: 'to eat', emoji: '🍽️', level: 3 },
        { spanish: 'beber', english: 'to drink', emoji: '🥤', level: 3 },
        { spanish: 'leer', english: 'to read', emoji: '📖', level: 3 },
        { spanish: 'correr', english: 'to run', emoji: '🏃', level: 3 },
        { spanish: 'aprender', english: 'to learn', emoji: '🧠', level: 3 },
        { spanish: 'vender', english: 'to sell', emoji: '💰', level: 3 },
        { spanish: 'comprender', english: 'to understand', emoji: '💡', level: 3 },
        // Level 3 - IR verbs
        { spanish: 'vivir', english: 'to live', emoji: '🏠', level: 3 },
        { spanish: 'escribir', english: 'to write', emoji: '✍️', level: 3 },
        { spanish: 'abrir', english: 'to open', emoji: '🚪', level: 3 },
        { spanish: 'subir', english: 'to go up/climb', emoji: '⬆️', level: 3 },
        { spanish: 'recibir', english: 'to receive', emoji: '📦', level: 3 },
        { spanish: 'decidir', english: 'to decide', emoji: '🤔', level: 3 }
    ]
};

// Load vocabulary from localStorage or use defaults
let vocabulary = loadVocabulary();

// Global State
let currentLevel = 1; // Selected level (1, 2, or 3)
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

// Get words filtered by level
function getWordsByLevel(level) {
    const allWords = [];
    Object.values(vocabulary).forEach(category => {
        category.forEach(word => {
            // Backwards compatibility: if word doesn't have level, assume level 1
            const wordLevel = word.level || 1;
            if (wordLevel === level) {
                allWords.push(word);
            }
        });
    });
    return allWords;
}

// Get words from a specific category filtered by level
function getCategoryWordsByLevel(category, level) {
    if (!vocabulary[category]) return [];
    return vocabulary[category].filter(word => {
        const wordLevel = word.level || 1;
        return wordLevel === level;
    });
}

// Set the current level
function setLevel(level) {
    currentLevel = level;
    // Save to localStorage
    localStorage.setItem('spanishAppLevel', level.toString());

    // Update active button
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.level) === level) {
            btn.classList.add('active');
        }
    });

    // Refresh flashcard categories if on flashcards screen
    const flashcardsScreen = document.getElementById('flashcards');
    if (flashcardsScreen && flashcardsScreen.classList.contains('active')) {
        updateFlashcardCategories();
    }
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
        // Only show category button if it has words at the current level
        const wordsAtLevel = getCategoryWordsByLevel(cat, currentLevel);
        if (wordsAtLevel.length > 0) {
            const btn = document.createElement('button');
            btn.className = 'category-btn' + (cat === currentCategory ? ' active' : '');
            btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
            btn.dataset.category = cat; // Store the actual category name
            btn.onclick = function() {
                changeCategory(cat);
            };
            container.appendChild(btn);
        }
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
    const levelEl = document.getElementById('word-level');
    const emojiEl = document.getElementById('word-emoji');

    // Check if elements exist
    if (!categoryEl || !spanishEl || !englishEl || !levelEl || !emojiEl) {
        console.error('Form elements not found!');
        alert('Error: Form fields not found. Please refresh the page.');
        return;
    }

    const category = categoryEl.value;
    const spanish = spanishEl.value ? spanishEl.value.trim() : '';
    const english = englishEl.value ? englishEl.value.trim() : '';
    const level = parseInt(levelEl.value) || 1;
    const emojiValue = emojiEl.value ? emojiEl.value.trim() : '';
    const emoji = emojiValue.length > 0 ? emojiValue : '📝';

    console.log('Form values:', { category, spanish, english, level, emojiValue, emoji });

    if (!spanish || !english) {
        alert('Please fill in both Spanish and English fields');
        return;
    }

    if (!vocabulary[category]) {
        vocabulary[category] = [];
    }

    vocabulary[category].push({ spanish, english, emoji, level });
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
        const wordLevel = word.level || 1;
        const div = document.createElement('div');
        div.className = 'word-item';
        div.innerHTML = `
            <div class="word-info">
                <strong>${word.spanish}</strong> = ${word.english} ${word.emoji} <span style="color: #666; font-size: 0.9em;">(Level ${wordLevel})</span>
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
        // Update category buttons in case new categories were added or level changed
        updateFlashcardCategories();

        // Find first category with words at current level
        const categories = getAllCategories();
        let foundValidCategory = false;

        // Check if current category has words at this level
        const currentCategoryWords = getCategoryWordsByLevel(currentCategory, currentLevel);
        if (currentCategoryWords.length > 0) {
            foundValidCategory = true;
        } else {
            // Find first category with words at current level
            for (const cat of categories) {
                const wordsAtLevel = getCategoryWordsByLevel(cat, currentLevel);
                if (wordsAtLevel.length > 0) {
                    currentCategory = cat;
                    foundValidCategory = true;
                    break;
                }
            }
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
    // Get cards for current category filtered by level
    const cards = getCategoryWordsByLevel(currentCategory, currentLevel);

    if (!cards || cards.length === 0) {
        // Try to find a category with cards at this level
        const categories = getAllCategories();
        let foundCategory = false;
        for (const cat of categories) {
            const catCards = getCategoryWordsByLevel(cat, currentLevel);
            if (catCards.length > 0) {
                currentCategory = cat;
                currentCardIndex = 0;
                foundCategory = true;
                break;
            }
        }

        if (!foundCategory) {
            document.getElementById('spanish-word').textContent = 'No words';
            document.getElementById('word-emoji').textContent = '📝';
            document.getElementById('english-word').textContent = `No Level ${currentLevel} words available`;
            document.getElementById('card-counter').textContent = '0 / 0';
            return;
        }

        // Recursively call with the new category
        updateFlashcard();
        return;
    }

    // Make sure currentCardIndex is valid
    if (currentCardIndex >= cards.length) {
        currentCardIndex = 0;
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
    const cards = getCategoryWordsByLevel(currentCategory, currentLevel);
    if (cards.length > 0) {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        updateFlashcard();
    }
}

function previousCard() {
    const cards = getCategoryWordsByLevel(currentCategory, currentLevel);
    if (cards.length > 0) {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        updateFlashcard();
    }
}

// Matching Game
function resetMatchingGame() {
    matchingSelected = null;
    matchingScore = 0;
    document.getElementById('matching-score').textContent = matchingScore;

    // Get random words from current level
    const allWords = getWordsByLevel(currentLevel);

    if (allWords.length < 6) {
        const container = document.getElementById('matching-container');
        container.innerHTML = `<p style="text-align: center; padding: 40px;">Not enough words at Level ${currentLevel}. Please try Level 1!</p>`;
        return;
    }

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

    // Generate questions from current level
    const allWords = getWordsByLevel(currentLevel);

    if (allWords.length < 4) {
        document.getElementById('question-text').textContent = `Not enough words at Level ${currentLevel}`;
        document.getElementById('answer-options').innerHTML = '<p>Please try Level 1!</p>';
        return;
    }

    // Shuffle and take 10 questions (or less if not enough words)
    const shuffled = allWords.sort(() => Math.random() - 0.5);
    quizQuestions = shuffled.slice(0, Math.min(10, allWords.length));

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

    // Generate answer options from current level
    const allWords = getWordsByLevel(currentLevel);

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

    // Get random words from current level
    const allWords = getWordsByLevel(currentLevel);

    if (allWords.length < 6) {
        const grid = document.getElementById('memory-grid');
        grid.innerHTML = `<p style="text-align: center; padding: 40px;">Not enough words at Level ${currentLevel}. Please try Level 1!</p>`;
        return;
    }

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

    // Load saved level
    const savedLevel = localStorage.getItem('spanishAppLevel');
    if (savedLevel) {
        currentLevel = parseInt(savedLevel);
    }

    // Update level buttons to reflect current level
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.level) === currentLevel) {
            btn.classList.add('active');
        }
    });

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
