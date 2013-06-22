var table = function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var formatNumber = function (n){
        var output = n.toString();
        while(output.length < 4){
            output = " " + output;
        }
        return output;
    };

    return function (n) {
        return numbers.map(function (x) { return formatNumber(n * x); }).join("");
    };
}();

for (var i = 1; i < 13; i++){
    console.log(table(i).trim());
}