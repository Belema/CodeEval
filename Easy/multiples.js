var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function (l) { return l.trim() !== ""; }).forEach(function (l) {
    var x = parseInt(l.split(",")[0], 10);
    var n = parseInt(l.split(",")[1], 10);

    var output = x & (-n);
    output += output == x ? 0 : n;
    console.log(output);
});