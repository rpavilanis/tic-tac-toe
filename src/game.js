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

  this.winner  = function(){
      // var board = this.board

      for (var i=0; i < 3; i++){
        //horizontal winner
        if (this.board[i][0] != " "  && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]){
          return this.board[i][0]
        }
        //vertical winner
        if (this.board[0][i] != " "  && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]){
          return this.board[0][i]
        }
      }

      //diagonal winners
      if (this.board[0][0] != " "  && this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]){
        return this.board[0][0]
      }

      if (this.board[0][2] != " "  && this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]){
        return this.board[0][2]
      }
      return false
  }
};

var helperBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ]





// prompt.get(['playerX','playerO'], game);

module.exports = Game;

export default Game;
