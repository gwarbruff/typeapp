
//TBD loading code

const textfield = document.getElementById("typefield");
const textscript = document.getElementById("tscript");


const wordpossibilities = ["hello", "no", "yes", "lol", "argargar", "funny"];

var inProgress = false;


//event listeners
textfield.addEventListener("input", inputChange);
textfield.addEventListener("keydown", checkKey);


loadWords(20);

function checkKey(e) {
    
}
function inputChange(e) {
    if (textfield.value.charAt(textfield.value.length - 1) == ' ') {
        submitWord();
    }
}

function submitWord() {
    textfield.value = "";
    unloadWords(1);
    newWord();
}

function newWord() {
    var Word = document.createElement("word");
    Word.innerHTML = wordpossibilities[Math.floor(Math.random()*6)];
    textscript.appendChild(Word);
}
function loadWords(x) {
    for (let i = 0; i < x; i++) {
        newWord();
    }
}

function unloadWords(y) {
    var words = document.getElementsByTagName("word");
    for (let i = 0; i < y; i++) {
        words[i].remove();
    }
}