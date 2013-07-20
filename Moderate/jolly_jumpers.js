var isJolly = function (sequence) {
    var values = sequence.map(function (){ return true; });
    for (var i = 1; i < sequence.length; i++) {
        var difference = Math.abs(sequence[i-1] - sequence[i]);
        if (!values[difference]){
            return "Not jolly";
        }
        values[difference] = false;
    }
    return "Jolly";
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var sequence = line.trim().split(" ").slice(1).map(function (x){ return parseInt(x, 10); });
    console.log(isJolly(sequence));
});