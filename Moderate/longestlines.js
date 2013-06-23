var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n");
var N = parseInt(input.shift(), 10);
var lines = input.sort(function (x, y) { return y.length - x.length; });

for (var i = 0; i < N; i++){
    console.log(lines[i]);
}