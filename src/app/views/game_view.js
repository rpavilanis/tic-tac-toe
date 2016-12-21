import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import Game from 'app/models/game';


const GameView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#tmpl-game-results').html());
    this.turn = true;
    this.outcome = null;
  },

  render: function() {

  },

  events: {
   'click .space': 'play',
   'click .new-game': 'newGame'
 },

  newGame: function() {
    location.reload(true);
  },

  play: function(event){
    if (this.turn) {
      this.drawSymbol("&", event);
      if (this.announceWinner() === true && this.countX() == 5){
        console.log(this.countX());
        this.showModal("No one");
        console.log(this.model);
      }
      else if (this.announceWinner() === true) {
        console.log(this.countX());
        this.showModal("&");
        console.log(this.model);
        console.log(this.model.get("board"));
      }
    } else {
      console.log(this.countX());
      this.drawSymbol("||", event);
      if (this.announceWinner() === true && this.countX() == 5){
        this.showModal("No one");
        console.log(this.model);
      }
      else if (this.announceWinner() === true) {
        console.log(this.countX());
        this.showModal("||");
        console.log(this.model);
      }
    }
    this.turn = !this.turn;
  },

  showModal: function(name) {
    var html = name + " is the winner. Play again?";

    this.outcome = name;
    $('#game-results').show();
    $('#game-results').html(html);

    var gameDetails = this.apiFormat();
    this.model.save(gameDetails);

  },

  apiFormat: function(){
    var gameInfo = {
      board: this.model.get("board"),
      players: ["& Player", "|| Player"],
      outcome: this.outcome
    };
    return gameInfo;
  },

  drawSymbol: function(symbol, event) {
    var clickedElement = $(event.target);

    var x = clickedElement.data('x');
    // var y = clickedElement.data('y');

    if (this.model.get("board")[x] == " ") {
       clickedElement.html(symbol);
       this.model.get("board")[x] = symbol;

     }
  },

  winner: function(){
      for (var i=0; i < 7; i+=3){
        //horizontal winner
        if (
          (this.model.get("board")[i] != " " && this.model.get("board")[i] == this.model.get("board")[i+1] && this.model.get("board")[i] == this.model.get("board")[i+2])
          ) {
          return this.model.get("board")[i];
        }
      }

      for (var j=0; j < 3; j++){
        //vertical winner
        if (this.model.get("board")[j] != " " && this.model.get("board")[j] ==  this.model.get("board")[j+3] && this.model.get("board")[j] == this.model.get("board")[j+6]){
          return this.model.get("board")[j];
        }
      }

      //diagonal winners
      if (this.model.get("board")[0] != " " && this.model.get("board")[0] == this.model.get("board")[4] && this.model.get("board")[0] ==   this.model.get("board")[8]){
        return this.model.get("board")[0];
      }

      if (this.model.get("board")[2] != " " && this.model.get("board")[6] == this.model.get("board")[4] && this.model.get("board")[6] ==  this.model.get("board")[2]){
        return this.model.get("board")[2];
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
      return true;
    }

    else if (this.winner() == "&") {
      return true;
    }

    else if (this.winner() == "||") {
      return true;
    }
    return false;
  },

  countX: function(){
    var Xcount = 0;

    for(var i = 0; i < 9; ++i){
      if(this.model.get("board")[i] == "&")
        Xcount ++;
    }
    return Xcount;
  }
});

export default GameView;
