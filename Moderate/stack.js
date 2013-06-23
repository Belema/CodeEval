function Item (v, n){
    var value = v;
    var next = n;
    this.value = function (){
        return value;
    };
    this.next = function (){
        return next;
    };
}


function Stack (){
    var top = null;
    this.push = function (value) {
        top = new Item(value, top);
    };
    this.pop = function () {
        var output = top;
        top = top.next();
        return output.value();
    };
}

var fs = require("fs");
var input = fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; });

input.forEach(function (line){
    var items = line.split(" ");
    var stack = new Stack();
    items.forEach(function (x){ stack.push(x); });
    var output = items.map(function (){ return stack.pop(); }).filter(function (x, i){ return i % 2 === 0; });
    console.log(output.join(" "));
});