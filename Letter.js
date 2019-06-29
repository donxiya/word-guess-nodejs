var Letter = function(charAnswer) {
    this.display = "_";
    //A string value to store the underlying character for the letter
    this.char = charAnswer;
    //A boolean value that stores whether that letter has been guessed yet
    this.charCheckReult = false;
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore)
    this.charCheck = function (charInput) {
        if (charInput === charAnswer) {
            this.display = charAnswer;
            return this.display;
        }else{
            return this.display;
        }
    }
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.charUpdate = function (charInput) {
        if (charInput === charAnswer) {
            this.charCheckReult = true;
            return this.charCheckReult;
        }else{
            return this.charCheckReult;
        }
    }
}

module.exports = Letter;