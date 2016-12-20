import GameView from 'app/views/game_view';
import Game from 'app/models/game';
import $ from 'jquery';


// var game = new Game({
//
// });

$(document).ready(function() {
  var game = new Game();
  var spaces = new GameView({
    el: '#application',
    model: game

  });


  spaces.render();

});
