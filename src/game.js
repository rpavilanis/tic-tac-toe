//game.js
// var prompt = require('prompt');

//start the prompt
// prompt.start();


var Player = function(name,active){
  this.name = name
  this.active = active
};

var Game = function(){
  this.board = [
          [" "," "," "],
          [" "," "," "],
          [" "," "," "],
        ];

  this.playerX = new Player("Erin", true);
  this.playerO = new Player("Rachel", false);
};

var helperBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]











// Game.playerX = function
// active = true;


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
