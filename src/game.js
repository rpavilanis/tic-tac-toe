//game.js

var prompt = require('prompt');

var Player = function(name){
   this.name = name;
};

var Game = function() {
  this.board =
        [
          " "," "," ",
          " "," "," ",
          " "," "," ",
        ];
  this.playerX = new Player("&");
  this.playerO = new Player("||");
  this.turn = true;


  this.printBoard = function() {
      console.log('\n' +
          ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
          ' ---------\n' +
          ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
          ' ---------\n' +
          ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

  };

  this.markBoard = function(position, mark) {
    this.board[position] = mark;
  };

  this.winner = function(){

    for (var i=0; i < 7; i+=3){
      //horizontal winner
      if (
        (this.board[i] != " " && this.board[i] == this.board[i + 1] && this.board[i] == this.board[i + 2])
        ) {
        return this.board[i];
        }
      }

    for (var j=0; j < 3; j++){
      //vertical winner
      if (this.board[j] != " " && this.board[j] ==  this.board[j + 3] && this.board[j] == this.board[j + 6]){
        return this.board[j];
      }
    }

    //diagonal winners
    if (this.board[0] != " " && this.board[0] == this.board[4] && this.board[0] == this.board[8]) {
      return this.board[0];
    }

    if (this.board[2] != " " && this.board[6] == this.board[4] && this.board[6] ==  this.model.board[2]){
      return this.board[2];
    }

    return false;

  };

  this.tie = function(){
    if (this.winner() === false && this.countX() == 5){
    return true;
    }
    return false;
  };

  this.announceWinner = function(){

    if(this.tie() === true){
      console.log("Tie game!");
      return true;
    }

    else if (this.winner() == "&") {
      console.log("Congrats, " + this.playerX.name + " wins!");
      return true;
    }

    else if (this.winner() == "||") {
      console.log("Congrats, " + this.playerO.name + " wins!");
      return true;
    }
    return false;
  };

  this.countX = function(){
    var Xcount = 0;

    for(var i = 0; i < 9; ++i){
      if(this.board[i] == "&")
        Xcount ++;
    }
    return Xcount;
  };

  this.play = function(){
    prompt.start();

    prompt.get(['position'], function (err, result) {
      while (this.winner() === false) {
        if (this.turn) {
          console.log( this.playerX.name + ", which spot would you like to put your & in? Please type a number.");
          this.drawSymbol(result.position, "&");
          this.printBoard();
          if (this.announceWinner() === true && this.countX() == 5){
            break;
          }
          else if (this.announceWinner() === true) {
            break;
          }
        } else {
          console.log( this.playerO.name + ", which spot would you like to put your || in? Please type a number.");
          this.drawSymbol(result.position, "&");
          this.printBoard();
          if (this.announceWinner() === true && this.countX() == 5){
            break;
          }
          else if (this.announceWinner() === true) {
            break;
          }
        }
      }
    });
    this.turn = !this.turn;
  };

};

var game = new Game();
game.play();

// prompt.get(['playerX','playerO'], game);

// module.exports = Game;
//
// export default Game;
