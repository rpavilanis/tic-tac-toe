import Backbone from 'backbone';

//game.js
// var prompt = require('prompt');

//start the prompt
// prompt.start();

// const Game = Backbone.Model.extend ( {
//   initialize: function(options) {
//     this.set("board",
//           [
//             [" "," "," "],
//             [" "," "," "],
//             [" "," "," "],
//           ]
//         );
//     this.playerX = new Player({
//       name:"Xavier"
//     });
//     this.playerO = new Player({
//       name: "Octavia"
//     });
//   },
//
//   winner: function(){
//
//       for (var i=0; i < 3; i++){
//         //horizontal winner
//         if (this.get("board")[i][0] != " "  && this.get("board")[i][0] == this.get("board")[i][1] && this.get("board")[i][0] == this.get("board")[i][2]){
//           return this.get("board")[i][0];
//         }
//         //vertical winner
//         if (this.get("board")[0][i] != " "  && this.get("board")[0][i] == this.get("board")[1][i] && this.get("board")[0][i] == this.get("board")[2][i]){
//           return this.get("board")[0][i];
//         }
//       }
//
//       //diagonal winners
//       if (this.get("board")[0][0] != " "  && this.get("board")[0][0] == this.get("board")[1][1] && this.get("board")[0][0] == this.get("board")[2][2]){
//         return this.get("board")[0][0];
//       }
//
//       if (this.get("board")[0][2] != " "  && this.get("board")[0][2] == this.get("board")[1][1] && this.get("board")[0][2] == this.get("board")[2][0]){
//         return this.get("board")[0][2];
//       }
//       return false;
//   },
//
//   tie: function(){
//     if (this.winner() === false && this.countX() == 5){
//     return true;
//     }
//     return false;
//   },
//
//   announceWinner: function(){
//     if(this.tie() === true){
//       console.log("Tie game!");
//       return true;
//     }
//
//     if (this.winner() == "O") {
//       console.log("Congrats, " + this.playerO.get("name") + " wins!");
//       return true;
//     }
//
//     if (this.winner() == "X") {
//       console.log("Congrats, " + this.playerX.get("name") + " wins!");
//       return true;
//     }
//     return false;
//   },
//
//   play: function(){
//     console.log("Welcome to Tic-Tac-Toe! " + this.playerX.name + ", you will go first.");
//     console.log("Imagine if the spots in a Tic-Tac-Toe board were numbered, kind of like this: ");
//
//
//     while (this.winner() === false) {
//       if (this.count() === false){
//         console.log( this.playerX.name + ", which spot would you like to put your X in? Please type a number.");
//         //take in the number of the spot
//         this.drawSymbol("X", Math.floor((Math.random() * 10) + 1).toString());
//         if (this.announceWinner() === true){
//           break;
//         }
//       }
//
//       if (this.count() === true){ //it's O's turn because there are more X's on the board
//         console.log( this.playerO.name + ", which spot would you like to put your O in? Please type a number.");
//         //take in the number of the spot
//         this.drawSymbol("O", Math.floor((Math.random() * 10)+ 1).toString());
//         if (this.announceWinner() === true){
//           break;
//         }
//       }
//     }
//   },
//
//   countX: function(){
//     var Xcount = 0;
//
//     for(var i = 0; i < 3; ++i){
//       for(var j = 0; j < 3; ++j){
//
//         if(this.board[i][j] == "X")
//           Xcount ++;
//       }//inner for
//     }//outer for
//     return Xcount;
//   },
//
//   countO: function(){
//     var Ocount = 0;
//
//     for(var i = 0; i < 3; ++i){
//       for(var j = 0; j < 3; ++j){
//
//         if(this.board[i][j] == "O")
//           Ocount++;
//       }//inner for
//     }//outer for
//     return Ocount;
//   },
//
//   count: function(){
//     if (this.countX() > this.countO()){
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//
// });

//Player.prototype.name = " "//input from the user

// var Game = function(){
  // this.board = [
  //         [" "," "," "],
  //         [" "," "," "],
  //         [" "," "," "],
  //       ];
// may want at end of game to clear out board, but may not need this if just creating new game each time.
  // this.boardReset = function(){
  //   for(var i = 0; i < 3; ++i){
  //     for(var j = 0; j < 3; ++j){
  //       this.board[i][j] = " "
  //     }
  //   }
  // }

  // this.playerX = new Player("Xavier");
  // this.playerO = new Player("Octavia");

  // this.winner = function(){
  //
  //     for (var i=0; i < 3; i++){
  //       //horizontal winner
  //       if (this.board[i][0] != " "  && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][2]){
  //         return this.board[i][0]
  //       }
  //       //vertical winner
  //       if (this.board[0][i] != " "  && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[2][i]){
  //         return this.board[0][i]
  //       }
  //     }
  //
  //     //diagonal winners
  //     if (this.board[0][0] != " "  && this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]){
  //       return this.board[0][0]
  //     }
  //
  //     if (this.board[0][2] != " "  && this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]){
  //       return this.board[0][2]
  //     }
  //     return false
  // }

  // this.tie = function(){
  //   if (this.winner() === false && this.countX() == 5){
  //   return true;
  //   }
  //   return false;
  // }

  // var helperBoardRow1 = [1,2,3]
  // var helperBoardRow2 = [4,5,6]
  // var helperBoardRow3 = [7,8,9]

  // this.drawSymbol = function(symbol, spot){
  //   // var spot = result.spot.toLowerCase()
  //
  //   //var spot = "1" //<--- hardcoded example to show what the switch statement should do until we can get user input
  //   switch (spot) {
  //
  //     case '1':
  //     case 'one':
  //       if (this.board[0][0] == " "){
  //         this.board[0][0] = symbol
  //       }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '2':
  //     case 'two':
  //       if (this.board[0][1] == " "){
  //         this.board[0][1] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '3':
  //     case 'three':
  //       if (this.board[0][2] == " "){
  //         this.board[0][2] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '4':
  //     case 'four':
  //       if (this.board[1][0] == " "){
  //         this.board[1][0] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '5':
  //     case 'five':
  //       if (this.board[1][1] == " "){
  //         this.board[1][1] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '6':
  //     case 'six':
  //       if (this.board[1][2] == " "){
  //         this.board[1][2] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '7':
  //     case 'seven':
  //       if (this.board[2][0] == " "){
  //         this.board[2][0] = symbol
  //         }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '8':
  //     case 'eight':
  //       if (this.board[2][1] == " "){
  //         this.board[2][1] = symbol
  //       }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     case '9':
  //     case 'nine':
  //       if (this.board[2][2] == " "){
  //         this.board[2][2] = symbol
  //       }
  //       else
  //         console.log("That spot is already taken - try another.")
  //       break;
  //
  //     //Error handling if the user inputs an invalid operation
  //     default:
  //       console.log('Hmm... you need to pick a number 1-9, which corresponds to a spot on the Tic-Tac-Toe board where you would like to put your symbol');
  //   }//switch
  // }

  // this.countX = function(){
  //   var Xcount = 0;
  //
  //   for(var i = 0; i < 3; ++i){
  //     for(var j = 0; j < 3; ++j){
  //
  //       if(this.board[i][j] == "X")
  //         Xcount ++;
  //     }//inner for
  //   }//outer for
  //   return Xcount;
  // };
  //
  // this.countO = function(){
  //   var Ocount = 0;
  //
  //   for(var i = 0; i < 3; ++i){
  //     for(var j = 0; j < 3; ++j){
  //
  //       if(this.board[i][j] == "O")
  //         Ocount++;
  //     }//inner for
  //   }//outer for
  //   return Ocount;
  // };
  //
  // this.count = function(){
  //   if (this.countX() > this.countO()){
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // };

  // this.showBoard = function(){
  //   console.log(this.board[0])
  //   console.log(this.board[1])
  //   console.log(this.board[2])
  // }

  // this.announceWinner = function(){
  //   if(this.tie() == true){
  //     console.log("Tie game!")
  //     return true
  //   }
  //
  //   if (this.winner() == "O") {
  //     console.log("Congrats, " + this.playerO.name + " wins!")
  //     return true
  //   }
  //
  //   if (this.winner() == "X") {
  //     console.log("Congrats, " + this.playerX.name + " wins!")
  //     return true
  //   }
  //   return false
  // }

  // this.play = function(){
  //   console.log("Welcome to Tic-Tac-Toe! " + this.playerX.name + ", you will go first.");
  //   console.log("Imagine if the spots in a Tic-Tac-Toe board were numbered, kind of like this: ")
  //   console.log(helperBoardRow1);
  //   console.log(helperBoardRow2);
  //   console.log(helperBoardRow3);
  //
  //   while (this.winner() == false) {
  //     if (this.count() == false){
  //       console.log( this.playerX.name + ", which spot would you like to put your X in? Please type a number.")
  //       //take in the number of the spot
  //       this.drawSymbol("X", Math.floor((Math.random() * 10) + 1).toString())
  //       this.showBoard()
  //       if (this.announceWinner() == true){
  //         break;
  //       }
  //     }
  //
  //     if (this.count() == true){ //it's O's turn because there are more X's on the board
  //       console.log( this.playerO.name + ", which spot would you like to put your O in? Please type a number.")
  //       //take in the number of the spot
  //       this.drawSymbol("O", Math.floor((Math.random() * 10)+ 1).toString())
  //       this.showBoard()
  //       if (this.announceWinner() == true){
  //         break;
  //       }
  //     }
  //   }
  // };//play
// };

// var game = new Game
// game.play();


// prompt.get(['playerX','playerO'], game);

module.exports = Game;

export default Game;
