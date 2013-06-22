var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var list = l.split(",");

    for (var i = 1; i < list.length; i++){
        if (list[i] == list[i-1]){
            list.splice(i,1);
            i--;
        }
    }
    console.log(list.join());
});