var pairs = function (array, sum) {
    var output = [];
    while(array.length > 1){
        var current = array[0] + array[array.length-1];
        if (current == sum){
            output.push(array.shift() + "," + array.pop());
        }
        else if (current < sum){
            array.shift();
        }
        else{
            array.pop();
        }
    }
    return output;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var array = line.split(";")[0].split(",").map(function (x){ return parseInt(x, 10); });
    var sum = parseInt(line.split(";")[1], 10);
    var output = pairs(array, sum);
    console.log(output.length > 0 ? output.join(";") : "NULL");
});