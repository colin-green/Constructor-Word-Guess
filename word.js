var Letter = require("./letter.js");

class Word {

    constructor(word) {

        this.letters = [];
        for (let i = 0; i < word.length; i++) {

            this.letters.push(new Letter(word[i]));
            
        }

    }

    displayWord() {

        var returnString = '';
        for (let i = 0; i < this.letters.length; i++) {
            
            returnString += this.letters[i].returnChar();
            returnString += " ";
            
        }

        return returnString.trim();

    }

    guessLetter(guess) {

        for (let i = 0; i < this.letters.length; i++) {
            
            this.letters[i].checkChar(guess);
            
        }

    }

}

module.exports = Word;