import _ from 'underscore';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import GameView from 'app/views/game_view';


const SpaceView = Backbone.View.extend({
  initialize: function() {

  },

  render: function() {

  },

  events: {
   'click .space': 'addSymbol',
 },

 addSymbol: function(event) {
   console.log("Breadcrumb #1");
 }

});









export default SpaceView;
