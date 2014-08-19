'use strict';

describe("Matrix", function(){
  var matrix;
  beforeEach(function(){
    matrix = new Matrix([
      [1, 2],
      [3, 4]
    ]);
  });

  describe("rows", function(){
    it("provides access to its rows", function(){
      expect(matrix.rows()).toEqual([[1, 2], [3, 4]]);
    });

    it("returns copy of its rows", function(){
      var rows = matrix.rows();
      var otherRows = matrix.rows();
      expect(rows).not.toBe(otherRows);
    });
  });

  describe("cols", function(){
    it("provides access to its cols", function(){
      expect(matrix.cols()).toEqual([[1, 3], [2, 4]]);
    });

    it("returns copy of its cols", function(){
      var cols = matrix.cols();
      var otherCows = matrix.cols();
      expect(cols).not.toBe(otherCows);
    });
  });

  describe("primaryDiagonals", function(){
    it("provides access to its primary diagonals", function(){
      expect(matrix.primaryDiagonals()).toEqual( [[2], [4, 1], [3]] );
    });

    it("provides access to its primary diagonals in big matrix", function(){
      var matrix = new Matrix([
          [1,2,3],
          [5,6,7],
          [9,0,11],
        ])
      expect(matrix.primaryDiagonals()).toEqual([
        [3], [7, 2], 
        [11, 6, 1],
        [0, 5], [9]
       ]);
    });

    it("returns copy of its primary diagonals", function(){
      var primaryDiagonals = matrix.primaryDiagonals();
      var otherDiags = matrix.primaryDiagonals();
      expect(primaryDiagonals).not.toBe(otherDiags);
    });
  });

  describe("secondaryDiagonals", function(){
    it("provides access to its secondary diagonals", function(){
      expect(matrix.secondaryDiagonals()).toEqual( [[1], [3, 2], [4]] );
    });

    it("returns copy of its secondaryDiagonals", function(){
      var secondaryDiagonals = matrix.secondaryDiagonals();
      var otherDiags = matrix.secondaryDiagonals();
      expect(secondaryDiagonals).not.toBe(otherDiags);
    });
  });

  it("provides access to its cells", function(){
    expect(matrix(0,0)).toEqual(1);
    expect(matrix(1,1)).toEqual(4);
  });

  it("has heigth", function(){
    expect(matrix.height()).toEqual(2);
  });

  it("has width", function(){
    expect(matrix.width()).toEqual(2);
  });

  it("can change cells", function(){
    matrix(0,0, 666);
    expect(matrix(0,0)).toEqual(666);
  });

})