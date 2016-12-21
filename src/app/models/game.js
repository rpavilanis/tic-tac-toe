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
    this.set("players",
        ["& Player",
         "|| Player"
       ]

      );
    this.set("outcome", null);
    this.set("played_at", new Date());
    // this.playerX = new Player({
    //   name:"Xavier"
    // });
    // this.playerO = new Player({
    //   name: "Octavia"
    // });
  },

});





export default Game;

// board, turn counter, names of players
