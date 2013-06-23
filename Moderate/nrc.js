var isLetter = function (c){
    return (64 < c.charCodeAt(0)  && (c.charCodeAt(0) < 91 || c.charCodeAt(0) > 96) && c.charCodeAt(0) < 123);
};

var removeCharAt = function (string, index){
    return string.substring(0, index).concat(string.substring(index+1));
};

var firstNonRepeated = function (input){
    return input.split("").filter(function (x, i){ return (isLetter(x) && removeCharAt(input, i).indexOf(x) === -1) })[0];
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var letter = firstNonRepeated(line);
    if (letter){
        console.log(letter);
    }
});