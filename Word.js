var Word = function(input){
this.Letter = require("./Letter.js");
this.wordTarget = input.split("");
this.wordAnswer = [];
for(i=0; i<this.wordTarget.length; i++){
var char = new this.Letter(this.wordTarget[i]);
this.wordAnswer.push(char);
};
this.wordUpdate = function(){
    this.wordDisplay = [];
    for(i=0; i<this.wordTarget.length; i++){
        var char = this.wordAnswer[i].display;
        this.wordDisplay.push(char);
        }
}}

module.exports = Word;