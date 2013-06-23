var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(l.split(" ").sort(function (x, y) { return parseFloat(x) - parseFloat(y); }).join(" "));
});