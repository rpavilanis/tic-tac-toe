import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#tmpl-game-results').html());
  },

  render: function() {

  },

  events: {
   'click .space': 'play',
 },

  play: function(event){
    if (this.count() === false){
      console.log( "Which spot would you like to put your X in? Please type a number.");
      //take in the number of the spot
      this.drawSymbol("X", event);
      if (this.announceWinner() === true){
        // add a pop up window that announces winner and asks user if they want to play again
        this.showModal("X");
        console.log("announce winner is true");
      }
    }

    if (this.count() === true){ //it's O's turn because there are more X's on the board
      console.log("which spot would you like to put your O in? Please type a number.");
      //take in the number of the spot
      this.drawSymbol("O", event);
      if (this.announceWinner() === true){
        // add a pop up window that announces winner (player O) and asks user if they want to play again
        this.showModal("O");
        console.log("announce winner is true");
      }
    }

  },

  showModal: function(name) {
    var html = "Player " + name + "is the winner. Play again?";

    $('#game-results').show();
    $('#game-results').html(html);

  },

  drawSymbol: function(symbol, event) {
    var clickedElement = $(event.target);
    console.log(clickedElement.data('x'));

    var x = clickedElement.data('x');
    var y = clickedElement.data('y');

    if (this.model.get("board")[x][y] == " ") {
       clickedElement.html(symbol);
       this.model.get("board")[x][y] = symbol;

     }
  },

  winner: function(){
    console.log("getting to winner");

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
      console.log("getting to announceWinner");
    if(this.tie() === true){
      return true;
    }

    if (this.winner() == "O") {
      return true;
    }

    if (this.winner() == "X") {
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
