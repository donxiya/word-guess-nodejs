console.log("************");
console.log("*            *");
console.log("* Game Start *");
console.log("*            *");
console.log("**************");
var Word = require("./Word");
var prompt = require("prompt");
var inquirer = require('inquirer');
//console.log(game.wordAnswer);
var str = "apple";
var newWord = new Word(str);
var count = 3;
var wordCount = str.length;
newWord.wordUpdate();
//console.log(newWord.wordDisplay);
var question = {
    type: "input",
    name: "guess",
    message: "Your guess?",
    validate: function (value) {
        if (value != null) {
            return true;
        }
    }
}
var main = function () {

    inquirer.prompt(question)
        .then(answers => {
            var guessCheck = false;
            for (var i = 0; i < wordCount; i++) {
                newWord.wordAnswer[i].charCheck(answers.guess);
                //
                if (newWord.wordAnswer[i].charCheckReult != true) {
                    if (newWord.wordAnswer[i].charUpdate(answers.guess) === true) {
                        guessCheck = true;
                    }
                    newWord.wordUpdate();
                }
            }
            console.log(newWord.wordDisplay);
            if (newWord.wordDisplay.includes("_") == true) {
                if (guessCheck != true) {
                    console.log("*****Wrong!*****");
                    count -= 1;
                    console.log("You have " + count + " attempts left.");
                }
                if (count > 0) {
                    main();
                } else {
                    console.log("*****You lose!*****");
                }
            } else {
                console.log("*****You win!*****");
            }
        });
}
console.log(newWord.wordDisplay);
main();


