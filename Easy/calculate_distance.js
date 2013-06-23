var distance = function (x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (x){ return x !== ""; }).forEach(function (l){
    var numbers = l.replace(/[\(\),]/g,"").trim().split(" ").map(function (x){ return parseInt(x, 10); });
    console.log(distance.apply(null, numbers));
});