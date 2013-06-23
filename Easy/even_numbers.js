var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    console.log(1 - (parseInt(l, 10) % 2));
});