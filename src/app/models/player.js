import _ from 'underscore';
import Backbone from 'backbone';
import Game from 'app/models/game.js';

const Player = Backbone.Model.extend( {
  initialize: function(options) {
    this.set("name", options.name);
  }
});


export default Player;
