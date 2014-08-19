describe("Board", function(){
  var board;
  beforeEach(function(){
    board = new Board(20, 20);
  });

  it("consists of rows of cells", function(){
    var rows = board.rows();
    expect(Array.isArray(rows)).toBe(true);
    expect(rows[0][0] instanceof Cell).toBe(true);
  });

  it("provide access to cells", function(){
    expect(board.cells(1,1)).toBe(undefined);
  });

  it("can set cell a value", function(){
    board.cells(2,2,"x");
    expect( board.cells(2,2) ).toEqual("x");
  });

  describe("Won cells detecting", function(){
    
    it("has no one", function(){
      board.cells(2,2,"x");
      board.cells(4,3,"x");
      board.cells(5,1,"x");
      expect( board.wonCells() ).toEqual([]);
    });

    it("detects 5 horizontal cells", function(){
      var x;
      for(x = 0; x < 5; x++){
        board.cells(x, 3, "x");
      }
      expect( board.wonCells() ).toContain( new Cell(0,3,"x") );
      expect( board.wonCells() ).toContain( new Cell(2,3,"x") );
      expect( board.wonCells() ).toContain( new Cell(4,3,"x") );
    });

    it("detects 5 vertical cells", function(){
      var y;
      for(y = 0; y < 5; y++){
        board.cells(2, y, "x");
      }
      expect( board.wonCells() ).toContain( new Cell(2,0,"x") );
      expect( board.wonCells() ).toContain( new Cell(2,3,"x") );
      expect( board.wonCells() ).toContain( new Cell(2,4,"x") );
    });

    it("detects 5 cells in primary diagonal", function(){
      var i;
      for(i = 0; i < 5; i++){
        board.cells(i, i, "x");
      }
      expect( board.wonCells() ).toContain( new Cell(0,0,"x") );
      expect( board.wonCells() ).toContain( new Cell(3,3,"x") );
      expect( board.wonCells() ).toContain( new Cell(4,4,"x") );
    });

    it("detects 5 cells in secondary diagonal", function(){
      var y;
      for(y = 0; y < 5; y++){
        var x = 5 - y - 1;
        board.cells(x, y, "x");
      }
      expect( board.wonCells() ).toContain( new Cell(4,0,"x") );
      expect( board.wonCells() ).toContain( new Cell(2,2,"x") );
      expect( board.wonCells() ).toContain( new Cell(0,4,"x") );
    });
  })
})