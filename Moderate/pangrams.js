var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    line.toLowerCase().split("")
        .forEach(function (x){ if (alphabet.indexOf(x) !== -1) alphabet.splice(alphabet.indexOf(x), 1); });
    console.log(alphabet.length > 0 ? alphabet.join("") : "NULL");
});