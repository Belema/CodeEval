var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function (l) { return l.trim() !== ""; }).forEach(function (l) {
    var sumOfDigits = l.split("")
                       .map(function(x){ return parseInt(x, 10); })
                       .reduce(function(x, y) { return x + y; });
    console.log(sumOfDigits);
});