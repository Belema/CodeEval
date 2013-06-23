var tree = {
    "30": [30],
    "8": [30, 8],
    "52": [30, 52],
    "3": [30, 8, 3],
    "20": [30, 8, 20],
    "10": [30, 8, 20, 10],
    "29": [30, 8, 20, 29]
};

var getAncestor = function (path1, path2){
    var output = 30;
    for (var i = 1; i < Math.min(path1.length, path2.length); i++){
        if (path1[i] === path2[i]){
            output = path1[i];
        }
    }
    return output;
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var nodes = line.split(" ");
    console.log(getAncestor(tree[nodes[0]], tree[nodes[1]]));
});