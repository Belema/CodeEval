var isPrime = function (n) {
    if (n === 2){
        return true;
    }
    if (n === 0 || n === 1 || n%2 === 0){
        return false;
    }
    for (var i = 3; i <= Math.sqrt(n); i += 2){
        if (n % i === 0){
            return false;
        }
    }
    return true;
};

var isPalindrome = function (n) {
    var input = n.toString();
    for (var i = 0; i < input.length; i++){
        if (input.charAt(i) != input.charAt(input.length - i - 1)){
            return false;
        }
    }
    return true;
};

for (var i = 989; true; i--){
    if (isPalindrome(i) && isPrime(i)){
        console.log(i);
        break;
    }
}