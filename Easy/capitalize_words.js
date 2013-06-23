var capitalize = function (word){
    return word.toUpperCase().charAt(0) + word.substring(1);
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(l.split(" ").map(function (x) { return capitalize(x); }).join(" "));
});