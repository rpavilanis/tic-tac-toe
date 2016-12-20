import _ from 'underscore';
import Backbone from 'backbone';
import Player from 'app/models/player';


const Game = Backbone.Model.extend ( {
  initialize: function(options) {
    this.set("board",
          [
            [" "," "," "],
            [" "," "," "],
            [" "," "," "],
          ]
        );
    this.playerX = new Player({
      name:"Xavier"
    });
    this.playerO = new Player({
      name: "Octavia"
    });
  },

});





export default Game;

// board, turn counter, names of players
