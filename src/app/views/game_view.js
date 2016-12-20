import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#tmpl-game-results').html());
    this.turn = true;
  },

  render: function() {

  },

  events: {
   'click .space': 'play',
 },

  play: function(event){
    if (this.turn) {
      this.drawSymbol("&", event);
      if (this.announceWinner() === true){
        this.showModal("&");
        console.log("announce winner is true");
      }
    } else {
      this.drawSymbol("||", event);
      if (this.announceWinner() === true){
        this.showModal("||");
        console.log("announce winner is true");
      }
    }
    this.turn = !this.turn;
  },

  showModal: function(name) {
    var html = "Player " + name + " is the winner. Play again?";

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

    if (this.winner() == "&") {
      return true;
    }

    if (this.winner() == "||") {
      return true;
    }
    return false;
  }
});

export default GameView;
