var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function (l) { return l.trim() !== ""; }).forEach(function (l) {
    var n = parseInt(l.split(",")[0], 10);
    var p1 = parseInt(l.split(",")[1], 10);
    var p2 = parseInt(l.split(",")[2], 10);

    var bit1 = (n >> (p1 - 1)) & 1;
    var bit2 = (n >> (p2 - 1)) & 1;

    console.log(bit1 == bit2);
});