var swapCase = function (letter){
    var code = letter.charCodeAt(0);
    if (code < 65 || (code > 90 && code < 97) || code > 122){
        return letter;
    }
    return String.fromCharCode(code ^ 32);
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(l.split("").map(function (x) { return swapCase(x); }).join(""));
});