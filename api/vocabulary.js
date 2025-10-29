// Vercel Serverless Function for Vocabulary Management
// This provides persistent storage using Vercel KV or similar service

const fs = require('fs');
const path = require('path');

// Path to store vocabulary data (in production, use a database like Vercel KV, MongoDB, etc.)
const DATA_FILE = path.join('/tmp', 'vocabulary.json');

// Default vocabulary
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
        { spanish: 'buenas noches', english: 'good night', emoji: '🌙' },
        { spanish: 'perdón', english: 'sorry', emoji: '😔' },
        { spanish: 'de nada', english: 'you\'re welcome', emoji: '😄' }
    ]
};

// Read vocabulary from storage
function readVocabulary() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error reading vocabulary:', error);
    }
    return defaultVocabulary;
}

// Write vocabulary to storage
function writeVocabulary(vocabulary) {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(vocabulary, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing vocabulary:', error);
        return false;
    }
}

// Main handler
module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // GET - Retrieve all vocabulary
    if (req.method === 'GET') {
        const vocabulary = readVocabulary();
        res.status(200).json(vocabulary);
        return;
    }

    // POST - Update entire vocabulary
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const newVocabulary = JSON.parse(body);
                if (writeVocabulary(newVocabulary)) {
                    res.status(200).json({ success: true, message: 'Vocabulary updated' });
                } else {
                    res.status(500).json({ success: false, message: 'Failed to save vocabulary' });
                }
            } catch (error) {
                res.status(400).json({ success: false, message: 'Invalid JSON data' });
            }
        });
        return;
    }

    res.status(405).json({ error: 'Method not allowed' });
};
