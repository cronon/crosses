describe("Game", function(){
  var game;
  beforeEach(function(){
    game = new Game(20, 20, ["cross", "zero"], function(){});
  });

  it("has players and crosses start", function(){
    expect(game.player()).toEqual("cross");
  });

  it("can mark cells with appropriate mark",function(){
    game.mark(1,1);
    expect(game.board.cells(1,1)).toEqual("cross");
  });

  it("automatically changes players", function(){
    game.mark(1,1);
    expect(game.player()).toEqual("zero");
  });

  it("cannot twice change cell", function(){
    game.mark(1,1); // mark (1,1) with cross, change player to zeros
    game.mark(1,1);
    expect(game.player()).toEqual("zero");
    expect(game.board.cells(1,1)).toEqual("cross");
  });

  it("can undo last turn", function(){
    game.mark(1,1);
    game.undo();
    expect(game.player()).toEqual("cross");
    expect(game.board.cells(1,1)).toBe(undefined);
  })

  describe("end of game", function(){
    var turns, game, wonCells, winner;
    var getArgs = function(cells, player){
      wonCells = cells;
      winner = player;
    }
    beforeEach(function(){
      game = new Game(20,20, ["cross", "zero"], getArgs);
      turns = [
        [0,0], //cross
        [0,1], // zero
        [1,0],
        [1,1],
        [2,0],
        [2,1],
        [3,0],
        [3,1],
        [4,0] //crosses win
      ];

      turns.forEach(function(turn){
        game.mark(turn[0], turn[1]);
      });
    });

    it("detects winner", function(){
      expect(winner).toEqual("cross");
    });

    it("defines winning cells", function(){
      var cells = game.board.cells;
      expect(wonCells).toContain( new Cell(0,0, "cross") );
      expect(wonCells).toContain( new Cell(1,0, "cross") );
      expect(wonCells).toContain( new Cell(4,0, "cross") );
    });
  });

})