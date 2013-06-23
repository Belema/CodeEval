var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var array = line.split(" ");
    var M = parseInt(array.pop(), 10);

    if (0 < M && M <= array.length){
        console.log(array[array.length - M]);
    }
});