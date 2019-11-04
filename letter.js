class Letter {

    constructor(val){

        this.val = val;
        this.guessedYet = false;

    }

    returnChar() {

        if (this.guessedYet) {
            
            return this.val;

        } else {

            return "_";

        }

    }

    checkChar(guess) {

        if (guess == this.val) {
            
            this.guessedYet = true;

        }

    }

}

module.exports = Letter;