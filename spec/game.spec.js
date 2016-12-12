// game.spec.js
describe('Game', function() {
  var testGame = Game;
  describe('board', function() {
    it('should display an empty board, array of arrays', function() {
        expect(typeof testGame.board.firstRow()).toEqual("array");
    });
  });
});

import Game from "game";
