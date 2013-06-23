var isSquare = function (number) {
    var value = Math.sqrt(number);
    return value - Math.round(value) === 0;
};

var doubleSquares = function (input) {
    if ((input % 4) === 3){
        return 0;
    }
    var output = 0;
    var limit = Math.sqrt(input/2);
    for (var i = 0; i <= limit; i++){
        if (isSquare(input - i*i)){
            output++;
        }
    }
    return output;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.slice(1).forEach(function (line){
    console.log(doubleSquares(parseInt(line, 10)));
});