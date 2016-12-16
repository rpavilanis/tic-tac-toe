import GameView from 'app/views/game_view';
import SpaceView from 'app/views/space_view';
import Game from 'app/models/game';
import $ from 'jquery';


// var game = new Game({
//
// });

$(document).ready(function() {
  var game = new Game();
  var spaces = new SpaceView({
    el: '#application',
    // model: game

  });


  spaces.render();

});
