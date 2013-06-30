var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var emailRegExp = /^\w+(\.\w+)*@\w+(\.\w+)+$/;
    console.log(emailRegExp.test(line.trim()));
});