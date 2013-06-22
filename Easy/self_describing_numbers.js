var isSelf = function (digits){
    var count = [];

    digits.forEach(function (x){
        count[x] = count[x] === undefined ? 1 : count[x] + 1;
    });

    for (var index = 0; index < digits.length; index++){
        if ((count[index] === undefined && digits[index] !== 0) || (count[index] !== undefined && digits[index] !== count[index])){
            return false;
        }
    }

    return true;
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var digits = l.trim().split("").map(function (x) { return parseInt(x, 10); });
    console.log(isSelf(digits) ? "1" : "0");
});