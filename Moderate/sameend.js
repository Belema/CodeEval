var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var text = line.split(",")[0];
    var ending = line.split(",")[1];
    console.log(text.length >= ending.length && text.substring(text.length - ending.length) == ending ? "1" : "0");
});