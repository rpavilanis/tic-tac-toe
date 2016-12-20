import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {

  },

  events: {
   'click .space': 'play',
 },

 drawSymbol: function(symbol, event) {
   var clickedElement = $(event.target);
   console.log(clickedElement.data('x'));
   var x = clickedElement.data('x');
   var y = clickedElement.data('y');

   if (this.model.get("board")[x][y] == " ") {
     console.log("Breadcrumb #3");
      clickedElement.replaceWith(symbol);
      this.model.get("board")[x][y] = symbol;

    }
},


play: function(event){
  console.log("Breadcrumb #1");

  while (this.winner() === false) {
    if (this.count() === false){
      console.log( "Which spot would you like to put your X in? Please type a number.");
      //take in the number of the spot
      this.drawSymbol("X", event);
      if (this.announceWinner() === true){
        break;
      }
    }

    if (this.count() === true){ //it's O's turn because there are more X's on the board
      console.log("which spot would you like to put your O in? Please type a number.");
      //take in the number of the spot
      this.drawSymbol("O", event);
      if (this.announceWinner() === true){
        break;
      }
    }
  }
},


  winner: function(){

      for (var i=0; i < 3; i++){
        //horizontal winner
        if (this.model.get("board")[i][0] != " "  && this.model.get("board")[i][0] == this.model.get("board")[i][1] && this.model.get("board")[i][0] == this.model.get("board")[i][2]){
          return this.model.get("board")[i][0];
        }
        //vertical winner
        if (this.model.get("board")[0][i] != " "  && this.model.get("board")[0][i] == this.model.get("board")[1][i] && this.model.get("board")[0][i] == this.model.get("board")[2][i]){
          return this.model.get("board")[0][i];
        }
      }

      //diagonal winners
      if (this.model.get("board")[0][0] != " "  && this.model.get("board")[0][0] == this.model.get("board")[1][1] && this.model.get("board")[0][0] == this.model.get("board")[2][2]){
        return this.model.get("board")[0][0];
      }

      if (this.model.get("board")[0][2] != " "  && this.model.get("board")[0][2] == this.model.get("board")[1][1] && this.model.get("board")[0][2] == this.model.get("board")[2][0]){
        return this.model.get("board")[0][2];
      }
      return false;
  },

  tie: function(){
    if (this.winner() === false && this.countX() == 5){
    return true;
    }
    return false;
  },

  announceWinner: function(){
    if(this.tie() === true){
      console.log("Tie game!");
      return true;
    }

    if (this.winner() == "O") {
      console.log("Congrats, " + this.playerO.get("name") + " wins!");
      return true;
    }

    if (this.winner() == "X") {
      console.log("Congrats, " + this.playerX.get("name") + " wins!");
      return true;
    }
    return false;
  },

  countX: function(){
    var Xcount = 0;

    for(var i = 0; i < 3; ++i){
      for(var j = 0; j < 3; ++j){

        if(this.model.get("board")[i][j] == "X")
          Xcount ++;
      }//inner for
    }//outer for
    return Xcount;
  },

  countO: function(){
    var Ocount = 0;

    for(var i = 0; i < 3; ++i){
      for(var j = 0; j < 3; ++j){

        if(this.model.get("board")[i][j] == "O")
          Ocount++;
      }//inner for
    }//outer for
    return Ocount;
  },

  count: function(){
    if (this.countX() > this.countO()){
      return true;
    }
    else {
      return false;
    }
  }
});

export default GameView;
