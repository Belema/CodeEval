var isPrime = function (){
    var cache = [2, 3];
    return function(n){
        if (n <= cache[cache.length - 1]){
            return cache.indexOf(n) !== -1;
        }
        if (cache.every(function(p) { return n%p !== 0; })){
            cache.push(n);
            return true;
        }
        return false;
    };
}();

var primes = function (n){
    if (n < 2){
        return "";
    }
    if (n < 3){
        return "2";
    }
    var output = "2,3";
    for (var i = 5; i < n; i += 2){
        if (i%3 === 0){
            continue;
        }
        if (isPrime(i)){
            output += "," + i;
        }
    }
    return output;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    console.log(primes(parseInt(line, 10)));
});