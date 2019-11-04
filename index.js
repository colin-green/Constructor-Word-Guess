var inquirer = require("inquirer");
var fs = require("fs");
var Word = require("./word.js");
var randomWords = fs.readFileSync('random-words.txt','utf8');
randomWords = randomWords.split("\r\n");

function getRandomWord() {

    return randomWords[Math.floor(Math.random() * randomWords.length)];

}

function nextGuess() {

    console.log(`Guesses remaining: ${guessCount}`);
    console.log(wordObject.displayWord());

    inquirer.prompt({
        type: "input",
        message: "Guess a letter:",
        name: "userGuess"
    }).then(function(response){

        wordObject.guessLetter(response.userGuess);
        guessCount--;
        if (checkWin()) {
            console.log("Congratulations! You guessed the secret word! :D");
        } else if (checkLoss()) {
            console.log(`Guesses remaining: ${guessCount}`);
            console.log(wordObject.displayWord());
            console.log(`Aww, you ran out of guesses! :( The word was "${wordToGuess}."`);
        } else {
            nextGuess();
        }

    })

}

function checkWin() {

    if (!wordObject.displayWord().includes("_")) {
        return true;
    } else {
        return false;
    }

}

function checkLoss() {

    if (guessCount == 0) {
        return true;
    } else {
        return false;
    }

}

var guessCount = 10;
var wordToGuess = getRandomWord();
var wordObject = new Word(wordToGuess);
nextGuess();
