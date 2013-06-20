var isPrime = function () {
    var cache = [2, 3];

    return function (n) {
        if (n <= cache[cache.length - 1]){
            return cache.indexOf(n) !== -1;
        }
        for (var i = 0; cache[i] <= Math.sqrt(n); i++){
            if (n % cache[i] === 0){
                return false;
            }
        }
        cache.push(n);
        return true;
    };
}();

var output = [];

for (var i = 2; output.length < 1000; i++){
    if (isPrime(i)){
        output.push(i);
    }
}

console.log(output.reduce(function (x, y) { return x + y; }));