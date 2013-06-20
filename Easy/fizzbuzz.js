var getToken = function (i, fizz, buzz) {
    var output = "";
    if (i % fizz === 0){
        output = "F";
    }
    if (i % buzz === 0){
        output += "B";
    }
    return output !== "" ? output : i;
};

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').filter(function (l) { return l.trim() !== ""; }).forEach(function (line) {
    var fizz = parseInt(line.split(" ")[0], 10);
    var buzz = parseInt(line.split(" ")[1], 10);
    var bound = parseInt(line.split(" ")[2], 10);

    var output = [];

    for (var i = 1; i <= bound; i++){
        output.push(getToken(i, fizz, buzz));
    }

    console.log(output.join(" "));
});