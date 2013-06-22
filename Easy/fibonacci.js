var fibonacci = function (){
    var cache = {};

    return function f(n) {
        if (n < 3){
            return 1;
        }
        if (cache[n] == undefined){
            cache[n] = f(n - 1) + f(n - 2);
        }
        return cache[n];
    };
}();

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(fibonacci(parseInt(l, 10)));
});