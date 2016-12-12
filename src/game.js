//game.js
// var prompt = require('prompt');

//start the prompt
// prompt.start();

var Game = function() {};
var helperBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]

Game.board = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "],
      ]


  // this.board = "hello";
  // this.board.firstRow = ['*', '*', '*'];
  // this.board.secondRow = ['*', '*', '*'];
  // this.board.thirdRow = ['*', '*', '*'];

  // var playerX = function(){
  //   this.name = name;
  // };
  //
  // var playerO = function(){};




// var game = new Game();
// prompt.get(['playerX','playerO'], game);

module.exports = Game;

export default Game;
