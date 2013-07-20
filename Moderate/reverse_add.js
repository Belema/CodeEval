var isPalindrome = function (x){
    var value = x.toString();
    var bound = value.length / 2;
    for (var i = 0; i <= bound; i++){
        if (value.charAt(i) != value.charAt(value.length - i - 1)){
            return false;
        }
    }
    return true;
};

var findPalindrome = function (x){
    var count = 0;
    while (!isPalindrome(x)){
        x = x + parseInt(x.toString().split("").reverse().join(""), 10);
        count++;
    }
    return count + " " + x;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    console.log(findPalindrome(parseInt(line.trim(), 10)));
});