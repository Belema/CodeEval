var modulo = function (pair){
    var k = Math.floor(pair[0] / pair[1]);
    return pair[0] - k * pair[1];
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var pair = l.split(",").map(function (x){ return parseInt(x, 10); });
    console.log(modulo(pair));
});