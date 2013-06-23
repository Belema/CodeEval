var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    console.log(parseInt(line, 10).toString(2).split("").reduce(function (x,y){return x + (y == "1" ? 1 : 0);}, 0));
});