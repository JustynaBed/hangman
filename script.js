const wordPlace = document.getElementById('word-place');
const hangmanPlace = document.getElementById('hangman-place');
const keyboardPlace = document.getElementById('keyboard-place');


let words = ["jogging", "joking", "jukebox", "frazzled", "juicy", "pneumonia", "yippee",
    "zilch", "peekaboo", "jelly", "avenue", "axiom", "unknown unknown", "whiskey whiskey",
    "unworthy", "thumbscrew", "twelfth"];


function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]
}

let hangmanWord = getRandomWord().toUpperCase();
console.log('%c hangmanWord: ', 'color: green', hangmanWord)
console.log('%c hangmanWord: ', 'color: green', hangmanWord.length)

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
    getWord();
}