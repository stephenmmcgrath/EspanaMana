// Vocabulary Generation (500 words across 3 levels)
const simpleBase = [
    ["Sí", "Yes"], ["No", "No"], ["Hola", "Hello"], ["Adiós", "Goodbye"],
    ["Por favor", "Please"], ["Gracias", "Thank you"], ["Agua", "Water"],
    ["Comida", "Food"], ["Pan", "Bread"], ["Casa", "House"],
    ["Gato", "Cat"], ["Perro", "Dog"], ["Niño", "Boy"], ["Niña", "Girl"],
    ["Hombre", "Man"], ["Mujer", "Woman"], ["Día", "Day"], ["Noche", "Night"],
    ["Sol", "Sun"], ["Luna", "Moon"], ["Feliz", "Happy"], ["Triste", "Sad"],
    ["Grande", "Big"], ["Pequeño", "Small"], ["Bueno", "Good"], ["Malo", "Bad"],
    ["Rápido", "Fast"], ["Lento", "Slow"], ["Caliente", "Hot"], ["Frío", "Cold"],
    ["Hoy", "Today"], ["Mañana", "Tomorrow"], ["Ayer", "Yesterday"],
    ["Libro", "Book"], ["Mesa", "Table"], ["Silla", "Chair"], ["Puerta", "Door"]
];

const interBase = [
    ["Tiempo", "Time"], ["Ciudad", "City"], ["Calle", "Street"], ["Coche", "Car"],
    ["Escuela", "School"], ["Trabajo", "Work"], ["Dinero", "Money"], ["Familia", "Family"],
    ["Amigo", "Friend"], ["Hermano", "Brother"], ["Hermana", "Sister"],
    ["Padre", "Father"], ["Madre", "Mother"], ["Reloj", "Clock"], ["Hora", "Hour"],
    ["Semana", "Week"], ["Mes", "Month"], ["Año", "Year"], ["Siempre", "Always"],
    ["Nunca", "Never"], ["A veces", "Sometimes"], ["Aquí", "Here"], ["Allí", "There"],
    ["Ahora", "Now"], ["Luego", "Later"], ["Antes", "Before"], ["Después", "After"],
    ["Cerca", "Near"], ["Lejos", "Far"], ["Fácil", "Easy"], ["Difícil", "Difficult"],
    ["Nuevo", "New"], ["Viejo", "Old"], ["Joven", "Young"], ["Fuerte", "Strong"]
];

const diffBase = [
    ["Desarrollo", "Development"], ["Conocimiento", "Knowledge"], ["Experiencia", "Experience"],
    ["Gobierno", "Government"], ["Economía", "Economy"], ["Sociedad", "Society"],
    ["Naturaleza", "Nature"], ["Medio ambiente", "Environment"], ["Investigación", "Research"],
    ["Tecnología", "Technology"], ["Cultura", "Culture"], ["Independencia", "Independence"],
    ["Responsabilidad", "Responsibility"], ["Oportunidad", "Opportunity"],
    ["Características", "Characteristics"], ["Consecuencia", "Consequence"],
    ["Significado", "Meaning"], ["Pensamiento", "Thought"], ["Sentimiento", "Feeling"],
    ["Comportamiento", "Behavior"], ["Descubrimiento", "Discovery"], ["Enfermedad", "Disease"],
    ["Salud", "Health"], ["Seguridad", "Security"], ["Peligro", "Danger"],
    ["Verdad", "Truth"], ["Mentira", "Lie"], ["Libertad", "Freedom"], ["Justicia", "Justice"],
    ["Derecho", "Right/Law"], ["Acuerdo", "Agreement"], ["Desacuerdo", "Disagreement"]
];

function generateCards(baseList, targetCount) {
    let result = [];
    let multiplier = Math.floor(targetCount / baseList.length) + 1;
    for (let i = 0; i < multiplier; i++) {
        for (let j = 0; j < baseList.length; j++) {
            if (result.length < targetCount) {
                if (i === 0) {
                    result.push({ es: baseList[j][0], en: baseList[j][1] });
                } else {
                    result.push({ es: baseList[j][0] + " " + i, en: baseList[j][1] + " (Var " + i + ")" });
                }
            }
        }
    }
    return result;
}

const decks = {
    "Simple": generateCards(simpleBase, 166),
    "Intermediate": generateCards(interBase, 167),
    "Difficult": generateCards(diffBase, 167)
};

// State
let currentDifficulty = "Simple";
let activeDeck = [];
let currentIndex = 0;
let score = 0;

let settings = {
    haptic: true,
    sound: true
};

// DOM Elements
const wordDisplay = document.getElementById('word-display');
const meaningDisplay = document.getElementById('meaning-display');
const scoreDisplay = document.getElementById('score-display');
const btnShowAnswer = document.getElementById('btn-show-answer');
const initialActions = document.getElementById('initial-actions');
const feedbackActions = document.getElementById('feedback-actions');
const btnCorrect = document.getElementById('btn-correct');
const btnIncorrect = document.getElementById('btn-incorrect');
const btnSpeak = document.getElementById('btn-speak');

const settingsModal = document.getElementById('settings-modal');
const btnSettings = document.getElementById('btn-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const diffSelect = document.getElementById('difficulty-select');
const toggleHaptic = document.getElementById('toggle-haptic');
const toggleSound = document.getElementById('toggle-sound');
const appContainer = document.getElementById('app');

// Audio Context for beeps
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playBeep(type) {
    if (!settings.sound) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.2);
    } else {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(300, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

function speakWord(word) {
    if (!settings.sound) return;
    const utterance = new SpeechSynthesisUtterance(word.replace(/[0-9]/g, '').trim());
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
}

function triggerHaptic(duration) {
    if (settings.haptic && navigator.vibrate) {
        navigator.vibrate(duration);
    }
}

function shuffle(array) {
    let curr = array.length, rand;
    while (curr != 0) {
        rand = Math.floor(Math.random() * curr);
        curr--;
        [array[curr], array[rand]] = [array[rand], array[curr]];
    }
    return array;
}

function loadDeck() {
    activeDeck = shuffle([...decks[currentDifficulty]]).slice(0, 50); // Play in batches of 50
    currentIndex = 0;
    score = 0;
    updateScore();
    showCard();
}

function updateScore() {
    scoreDisplay.innerText = score;
}

function showCard() {
    if (currentIndex >= activeDeck.length) {
        wordDisplay.innerText = "¡Completado!";
        wordDisplay.style.animation = "none";
        meaningDisplay.innerText = `Puntuación final: ${score} / ${activeDeck.length}`;
        meaningDisplay.classList.remove('hidden');
        initialActions.classList.add('hidden');
        feedbackActions.classList.add('hidden');
        return;
    }
    
    wordDisplay.style.animation = "pulse 2s infinite alternate";
    appContainer.style.backgroundColor = "";
    
    const card = activeDeck[currentIndex];
    wordDisplay.innerText = card.es;
    meaningDisplay.innerText = card.en;
    meaningDisplay.classList.add('hidden');
    
    initialActions.classList.remove('hidden');
    feedbackActions.classList.add('hidden');
}

// Event Listeners
btnShowAnswer.addEventListener('click', () => {
    meaningDisplay.classList.remove('hidden');
    initialActions.classList.add('hidden');
    feedbackActions.classList.remove('hidden');
});

btnSpeak.addEventListener('click', () => {
    if (currentIndex < activeDeck.length) {
        speakWord(activeDeck[currentIndex].es);
    }
});

btnCorrect.addEventListener('click', () => {
    score++;
    updateScore();
    playBeep('correct');
    triggerHaptic(100);
    appContainer.style.backgroundColor = "rgba(76, 175, 80, 0.2)";
    setTimeout(() => {
        currentIndex++;
        showCard();
    }, 400);
});

btnIncorrect.addEventListener('click', () => {
    playBeep('incorrect');
    triggerHaptic(300);
    appContainer.style.backgroundColor = "rgba(244, 67, 54, 0.2)";
    setTimeout(() => {
        currentIndex++;
        showCard();
    }, 400);
});

// Settings Handlers
btnSettings.addEventListener('click', () => {
    settingsModal.classList.remove('hidden');
});

btnCloseSettings.addEventListener('click', () => {
    settingsModal.classList.add('hidden');
    
    settings.haptic = toggleHaptic.checked;
    settings.sound = toggleSound.checked;
    
    const newDiff = diffSelect.value;
    if (newDiff !== currentDifficulty) {
        currentDifficulty = newDiff;
        loadDeck();
    }
});

// Init
loadDeck();
