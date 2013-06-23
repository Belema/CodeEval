var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var text = line.split(",")[0].trim();
    var chars = line.split(",")[1].trim();
    console.log(text.replace(new RegExp("[" + chars + "]", "g"), ""));
});