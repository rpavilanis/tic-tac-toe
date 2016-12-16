import GameView from 'app/views/game_view';
import Game from 'app/models/game';


var game = new Game({

});

var appView = new GameView({
  el: '#application',
  model: game
});
