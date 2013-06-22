var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var set1 = l.split(";")[0].split(",");
    var set2 = l.split(";")[1].split(",");

    var output = [];

    set1.forEach(function (x) {
        if (set2.some(function (y) { return x === y; })){
            output.push(x);
        }
    });

    console.log(output.join());
});