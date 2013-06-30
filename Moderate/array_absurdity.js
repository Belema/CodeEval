var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var length = parseInt(line.split(";")[0], 10);
    var array = line.split(";")[1].split(",").map(function (x){ return parseInt(x, 10); });
    console.log(array.reduce(function(a, x){ return a + x; }) - (length-1)*(length-2)/2);
});