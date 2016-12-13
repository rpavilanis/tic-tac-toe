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
    it('Game should initialize with playerX', function() {
        expect(testGame.playerX).toBeDefined();
        expect(testGame.playerX.name).toEqual("Erin")
    });
  });

  describe('playerY', function() {
    it('Game should initialize with playerO', function() {
        expect(testGame.playerO).toBeDefined()
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

  describe('count', function() {
    it("should return true when there are more X's than O's", function() {
      testGame.board = [  //all Xs, no Os
              [" "," ","X"],
              [" ","X"," "],
              ["X"," "," "],
            ];
      expect(testGame.count()).toEqual(true);

      testGame.board = [  // same # Xs and Os
              ["O","O","X"],
              [" ","X","O"],
              ["X"," "," "],
            ];
      expect(testGame.count()).toEqual(false);

      testGame.board = [ //more Os than Xs
              ["O","O","X"],
              [" ","X","O"],
              ["X"," ","O"],
            ];
      expect(testGame.count()).toEqual(false);

      testGame.board = [ //more Xs than Os
              ["O","O","X"],
              [" ","X","O"],
              ["X"," ","X"],
            ];
      expect(testGame.count()).toEqual(true);

      testGame.board = [ //empty board 
              [" "," "," "],
              [" "," "," "],
              [" "," "," "],
            ];
      expect(testGame.count()).toEqual(false);
    });





  });
});

import Game from "game";
