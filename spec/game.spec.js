// game.spec.js
describe('Game', function() {
  var testGame = Game;
  describe('board', function() {
    it('should display an empty board, array of arrays', function() {
        expect(Game.board[0]).toEqual([" "," "," "]);
        expect(Game.board[1]).toEqual([" "," "," "]);
        expect(Game.board[2]).toEqual([" "," "," "]);
    });
  });
});

import Game from "game";
