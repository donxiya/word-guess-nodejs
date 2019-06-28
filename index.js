console.log("game start");
var Word = require("./Word");
var prompt = require("prompt");
var inquirer = require('inquirer');
//console.log(game.wordAnswer);
var str = "apple";
var newWord = new Word(str);
var count = 10;
var wordCount = str.length;
newWord.wordUpdate();
//console.log(newWord.wordDisplay);
var question = {
    type: "input",
    name: "guess",
    message: "Your guess?",
    validate: function(value) {
        if (value!=null){
        return true;
      }}
}
var main = function () {

    inquirer.prompt(question)
        .then(answers => {
            var guessCheck = false;
            for (var i = 0; i < wordCount; i++) {
                newWord.wordAnswer[i].charCheck(answers.guess);
                if(newWord.wordAnswer[i].charUpdate(answers.guess) === true){
                    guessCheck = true;
                }
                newWord.wordUpdate();
            }
            console.log(newWord.wordDisplay);
            if(guessCheck != true){
                console.log(guessCheck);
                console.log("wrong! ");
                count -= 1;
            }
            if(count>0){
                main();
            }
        });
}
main();
// while(count>0){
// main();
// }


