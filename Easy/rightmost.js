var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var string = l.split(",")[0];
    var token = l.split(",")[1];

    console.log(string.lastIndexOf(token));
});