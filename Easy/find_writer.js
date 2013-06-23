var decode = function (code, key){
    return key.map(function (x){ return code[x - 1]; }).join("");
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var code = l.split("|")[0];
    var key = (l.split("|"))[1].trim().split(" ").map(function (x) {return parseInt(x, 10); });
    console.log(decode(code, key));
});