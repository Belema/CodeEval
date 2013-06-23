var isArmstrong = function (number){
    var array = number.toString().split("").map(function (x) { return parseInt(x, 10); });
    var sum = array.map(function (x) { return Math.pow(x, array.length); }).reduce(function (x, y) { return x + y; });
    return sum === number;
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(isArmstrong(parseInt(l, 10)) ? "True" : "False");
});