const wordPlace = document.getElementById('word-place');
const hangmanPlace = document.getElementById('hangman-place');
const keyboardPlace = document.getElementById('keyboard-place');


const words = ["jogging", "joking", "jukebox", "frazzled", "juicy", "pneumonia", "yippee",
    "zilch", "peekaboo", "jelly", "avenue", "axiom", "unknown unknown", "whiskey whiskey",
    "unworthy", "thumbscrew", "twelfth"];

const letters = ["A", "Ą", "B", "C", "Ć", "D", "E",
"Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N",
"Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U",
"V", "W", "X", "Y", "Z", "Ź", "Ż"];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]
}

let hangmanWord = getRandomWord().toUpperCase();
console.log('%c hangmanWord: ', 'color: green', hangmanWord)
console.log('%c hangmanWordLength: ', 'color: green', hangmanWord.length)

let wordToGuess = "";

for (i = 0; i < hangmanWord.length; i++) {
    if (hangmanWord.charAt(i) == " ") {
        wordToGuess = wordToGuess + " "
    } else {
        wordToGuess = wordToGuess + "-"
    }
}

function getWord() {
    wordPlace.innerHTML = wordToGuess;
}

window.onload = start;


function start() {
    let render_keyboard = '';

    letters.map(i => {
        let element = 'lit' + letters.indexOf(i);
        render_keyboard +=
        `
        <div class="letter active" onclick="alert(${letters.indexOf(i)})" id="${element}">${i}</div>
        `
    });
    keyboardPlace.innerHTML = render_keyboard;
    getWord();
}

