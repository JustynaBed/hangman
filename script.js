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
let badChoice = 0

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
        let element = 'letter-' + letters.indexOf(i);
        render_keyboard +=
        `
        <div class="letter active" onclick="checkLetter(${letters.indexOf(i)})" id="${element}">${i}</div>
        `
    });
    keyboardPlace.innerHTML = render_keyboard;
    getWord();
}

String.prototype.revealLetter = function(position, letter) {
    if(position > this.length - 1) {
        return this.toString();
    } else {
        return this.substr(0, position) + letter + this.substr(position + 1);
    }
}

function checkLetter(number) {
    let goal = false;
    let element = `letter-${number}`;
    let createImage = document.createElement("img");


    for (i = 0; i < hangmanWord.length; i++) {
        if (hangmanWord.charAt(i) == letters[number]) {
            wordToGuess = wordToGuess.revealLetter(i, letters[number]);
            goal = true;
        }
    }

    if(goal == true) {
        document.getElementById(element).classList.add('letter-true');
        document.getElementById(element).classList.remove('active');

        getWord();
    } else {
        badChoice++;

        document.getElementById(element).classList.add('letter-false');
        document.getElementById(element).classList.remove('active');

        document.getElementById(element).setAttribute("onClick", ";")
        createImage.setAttribute("src", "img/img" + badChoice + ".png");

        hangmanPlace.appendChild(createImage)
    }

    if (hangmanWord == wordToGuess) {
        wordPlace.innerHTML = 'You win :) ' + hangmanWord;
        keyboardPlace.innerHTML = '<button class="btn" onclick="location.reload()">Once more</button>'
    }


    if (badChoice >= 10) {
        wordPlace.innerHTML = 'You lost! ' + hangmanWord;
        keyboardPlace.innerHTML = '<button class="btn" onclick="location.reload()">Once more</button>'
    }
}