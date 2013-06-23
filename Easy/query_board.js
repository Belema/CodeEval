var mask = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
var board = mask.split("").map(function (){ return mask.split("").map(function (){ return 0; }); });

var setCol = function (board, params){
    for (var i = 0; i < 256; i++){
        board[i][params[0]] = params[1];
    }
};

var setRow = function (board, params){
    for (var j = 0; j < 256; j++){
        board[params[0]][j] = params[1];
    }
};

var queryCol = function(board, j){
    return board.map(function (r){ return r[j]; }).reduce(function (x, y){ return x + y; });
};

var queryRow = function(board, i){
    return board[i].reduce(function (x, y){ return x + y; });
};

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split("\n").filter(function (l){ return l.trim() !== ""; }).forEach(function (l){
    var command = l.split(" ").map(function (x, i){ return (i > 0) ? parseInt(x, 10) : x; });
    switch (command[0]){
        case "SetCol":
            setCol(board, command.slice(1));
            break;
        case "SetRow":
            setRow(board, command.slice(1));
            break;
        case "QueryCol":
            console.log(queryCol(board, command[1]));
            break;
        case "QueryRow":
            console.log(queryRow(board, command[1]));
    }
});