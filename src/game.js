//game.js
// var prompt = require('prompt');

//start the prompt
// prompt.start();

var Game = function() {
  this.board.firstRow = ['*', '*', '*'];
  this.board.secondRow = ['*', '*', '*'];
  this.board.thirdRow = ['*', '*', '*'];

  // var playerX = function(){
  //   this.name = name;
  // };
  //
  // var playerO = function(){};

};


// var game = new Game();
// prompt.get(['playerX','playerO'], game);

module.exports = Game;

export default Game;
