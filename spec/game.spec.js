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

  describe('winner', function() {
    it('There should not be winner on an empty board', function() {
        expect(testGame.winner()).toBeDefined();
        expect(testGame.winner()).toEqual(false);
    });

    it('should return the winner for horizontal wins', function() {
      testGame.board = [
              ["X","X","X"],
              [" "," "," "],
              [" "," "," "],
            ];
        expect(testGame.winner()).toEqual("X");

        testGame.board = [
              [" "," "," "],
              ["X","X","X"],
              [" "," "," "],
            ];
        expect(testGame.winner()).toEqual("X");

        testGame.board = [
              [" "," "," "],
              [" "," "," "],
              ["X","X","X"],
            ];
        expect(testGame.winner()).toEqual("X");
    });

      it('should return the winner for vertical wins', function() {
        testGame.board = [
                ["O"," "," "],
                ["O"," "," "],
                ["O"," "," "],
              ];
        expect(testGame.winner()).toEqual("O");

        testGame.board = [
                [" ","O"," "],
                [" ","O"," "],
                [" ","O"," "],
              ];
        expect(testGame.winner()).toEqual("O");

        testGame.board = [
                [" "," ","O"],
                [" "," ","O"],
                [" "," ","O"],
              ];
        expect(testGame.winner()).toEqual("O");
    });

    it('should return the winner for diagonal wins', function() {
      testGame.board = [
              ["O"," "," "],
              [" ","O"," "],
              [" "," ","O"],
            ];
      expect(testGame.winner()).toEqual("O");

      testGame.board = [
              [" "," ","X"],
              [" ","X"," "],
              ["X"," "," "],
            ];
      expect(testGame.winner()).toEqual("X");
    });

  });

});

import Game from "game";
