var values = [[100, "ONE HUNDRED"], [50, "FIFTY"], [20, "TWENTY"], [10, "TEN"], [5, "FIVE"], [2, "TWO"], [1, "ONE"], [.5, "HALF DOLLAR"], [.25, "QUARTER"], [.10, "DIME"], [.05, "NICKEL"], [.01, "PENNY"]];

var returnChange = function (paid, price){
    if (paid < price){
        return "ERROR";
    }
    if (paid === price){
        return "ZERO";
    }
    var output = [];
    for (var i = 0; i < 12; i++){
        while (paid - price >= values[i][0]*100){
            output.push(values[i][1]);
            paid -= values[i][0]*100;
        }
    }
    return output.join();
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var price = parseFloat(line.split(";")[0])*100;
    var paid = parseFloat(line.split(";")[1])*100;
    console.log(returnChange(paid, price));
});