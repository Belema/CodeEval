var isCycle = function (cycle, tail) {
    for (var k = 0; k < tail.length; k++) {
        if (tail[k] !== cycle[k % cycle.length]) {
            return false;
        }
    }
    return true;
};

var findCycle = function (seq){
    for (var i = 0; i < (seq.length - 1); i++){
        for (var j = 1; j <= Math.floor((seq.length - i) / 2); j++) {
            var cycle = seq.slice(i, i + j);
            var tail = seq.slice(i + j);

            if (isCycle(cycle, tail)) {
                return cycle;
            }
        }
    }
};

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var cycle = findCycle(line.split(" "));
    if (cycle){
        console.log(cycle.join(" "));
    }
});