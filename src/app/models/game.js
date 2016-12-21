import _ from 'underscore';
import Backbone from 'backbone';
import Player from 'app/models/player';


const Game = Backbone.Model.extend ( {

  url: 'http://localhost:3000/api/v1/games',
  parse: function(data) {
    return data;
  },

  initialize: function(options) {
    this.set("board",
          [
            " "," "," ",
            " "," "," ",
            " "," "," "
          ]
      );
  },

});





export default Game;

// board, turn counter, names of players
