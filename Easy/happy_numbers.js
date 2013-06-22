var isHappy = function (n, visited){
    if (n === 1){
        return true;
    }

    var next = n.toString().split("")
        .map(function (x) { return Math.pow(parseInt(x, 10), 2); })
        .reduce(function (x, y) { return x + y; });

    if (visited[next]){
        return false;
    }

    visited[next] = true;
    return isHappy(next, visited);
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
        var number = parseInt(l, 10);
        console.log(isHappy(number, {}) ? "1" : "0");
});