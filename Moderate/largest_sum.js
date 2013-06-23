var largestSum = function (list){
    var output = list[0];
    for (var i = 0; i < list.length - 1; i++){
        var sum = list[i];
        for (var j = i + 1; j < list.length; j++){
            sum += list[j];
            if (sum > output){
                output = sum;
            }
        }
    }
    return output;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var input = line.split(",").map(function (x){ return parseInt(x.trim(), 10); });
    console.log(largestSum(input));
});