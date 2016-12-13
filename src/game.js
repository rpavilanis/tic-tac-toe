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

  this.winner = function(){

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

  var helperBoardRow1 = [1,2,3]
  var helperBoardRow2 = [4,5,6]
  var helperBoardRow3 = [7,8,9]

  this.drawSymbol = function(symbol){
    // var spot = result.spot.toLowerCase()
    var spot = "3" //<--- hardcoded example to show what the switch statement should do until we can get user input via terminal

    switch (spot) {

      case '1':
      case 'one':
          this.board[0][0] = symbol
        break;

      case '2':
      case 'two':
          this.board[0][1] = symbol
        break;

      case '3':
      case 'three':
          this.board[0][2] = symbol
        break;

      case '4':
      case 'four':
          this.board[1][0] = symbol
        break;

      case '5':
      case 'five':
          this.board[1][1] = symbol
        break;

      case '6':
      case 'six':
          this.board[1][2] = symbol
        break;

      case '7':
      case 'seven':
          this.board[2][0] = symbol
        break;

      case '8':
      case 'eight':
          this.board[2][1] = symbol
        break;

      case '9':
      case 'nine':
          this.board[2][2] = symbol
        break;

      //Error handling if the user inputs an invalid operation
      default:
        console.log('Hmm... you need to pick a number 1-9, which corresponds to a spot on the Tic-Tac-Toe board where you would like to put your symbol');
    }//switch
  }

  this.drawO = function(){}

  this.play = function(){
    console.log("Welcome to Tic-Tac-Toe! " + this.playerX.name + " you will go first.");
    console.log("Imagine if the spots in a Tic-Tac-Toe board were numbered, kind of like this: ")
    console.log(helperBoardRow1);
    console.log(helperBoardRow2);
    console.log(helperBoardRow3);

    console.log( this.playerX.name + ", which spot would you like to put your X in? Please type a number.")
    //x selects a spot
    this.drawSymbol("X")
    // while (winner() == false) {
    //   if playerX.active == true
    //     console.log("Enter the number of the spot where you would like to put your X.")
    //
    //   if (winner() == "X" || winner() == "O") {
    //       break;
    //   }
    // }



    //show the board
    console.log(this.board[0])
    console.log(this.board[1])
    console.log(this.board[2])
    //check for winner
    //o selects a spot
    //drawSymbol("O")
    //check for winner


  };//play
};

var game = new Game
game.play();





// prompt.get(['playerX','playerO'], game);

module.exports = Game;

export default Game;
