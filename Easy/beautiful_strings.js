var toLowerCaseLetters = function (line){
    return line.toLowerCase().split("").filter(function (c){ return 96 < c.charCodeAt(0) && c.charCodeAt(0) < 123; });
};

var findBeauty = function (line){
    var letterCount = [];
    line.forEach(function (x){
        letterCount[x] = (letterCount[x] === undefined) ? 1 : letterCount[x] + 1;
    });

    var alphabet = [];
    for (var i = 97; i < 123; i++){
        var letter = String.fromCharCode(i);
        letterCount[letter] = (letterCount[letter] === undefined) ? 0 : letterCount[letter];
        alphabet.push(letter);
    }

    alphabet.sort(function (x, y) { return letterCount[y] - letterCount[x]; });
    return line.map(function (x) { return 26 - alphabet.indexOf(x); }).reduce(function (x, y) { return x + y; });
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(findBeauty(toLowerCaseLetters(l)));
});