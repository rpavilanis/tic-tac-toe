// game.spec.js
describe('Game', function() {
  var testGame = new Game;

  describe('board', function() {
    it('should display an empty board, array of arrays', function() {
        expect(testGame.board[0]).toEqual([" "," "," "]);
        expect(testGame.board[1]).toEqual([" "," "," "]);
        expect(testGame.board[2]).toEqual([" "," "," "]);
    });
  });

  describe('playerX', function() {
    it('Game should initialize with playerX, who is active', function() {
        expect(testGame.playerX).toBeDefined();
        expect(testGame.playerX.active).toEqual(true)
        expect(testGame.playerX.name).toEqual("Erin")
    });
  });

  describe('playerY', function() {
    it('Game should initialize with playerO, who is inactive', function() {
        expect(testGame.playerO).toBeDefined();
        expect(testGame.playerO.active).toEqual(false)
        expect(testGame.playerO.name).toEqual("Rachel")
    });
  });


});

import Game from "game";
