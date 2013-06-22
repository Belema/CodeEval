var fs = require("fs");

var output = fs.readFileSync(process.argv[2])
               .toString()
               .split("\n")
               .filter(function (l){ return l.trim() !== ""; })
               .map(function (l) { return parseInt(l, 10); })
               .reduce(function (x, y){ return x + y; });

console.log(output);