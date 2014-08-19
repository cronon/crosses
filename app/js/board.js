'use strict';

function Board(width, height){
  this.height = height;
  this.width = width;

  var matrix = new Matrix(newArray(height, function(item, y){
    return newArray(width, function(item, x){
      return new Cell(x,y);
    })
  }));

  this.rows = matrix.rows;
  this.cols = matrix.cols;

  this.cells = function(x, y, value){
    if(arguments.length == 3){
      matrix(x, y, new Cell(x, y, value));
    }
    return matrix(x, y).value;
  }

  /*
   * @returns five cells or empty list
   */
  var fiveSameCells = function(row){
    for(var x = 0; x <= row.length - 5; x++){
      var fiveCells = [
        row[x],
        row[x+1],
        row[x+2],
        row[x+3],
        row[x+4]
      ];
      var fiveValues = fiveCells.map(function(cell){
        return cell.value
      })
      if(allTheSame(fiveValues) && fiveValues[0]){
        return fiveCells;
      }
    }
    return [];
  }

  this.wonCells = function(){
    //horizontal
    var winners = this.rows().map(function(row, y){
      return fiveSameCells(row);
    }).filter(function(item){
      return !!item[0]
    });

    if(winners[0]){
      return winners[0]
    }

    //vertical 
    winners = this.cols().map(function(col, x){
      return fiveSameCells(col)
    }).filter(function(item){
      return !!item[0]
    });
    if(winners[0]){
      return winners[0];
    }


    //primary diagonals
    winners = matrix.primaryDiagonals().filter(function(diag){
      return diag.length >= 5;
    }).map(function(diag){
      return fiveSameCells(diag)
    }).filter(function(item){
      return !!item[0]
    });
    if(winners[0]){
      return winners[0];
    }

    //secondary diagonals
    winners = matrix.secondaryDiagonals().filter(function(diag){
      return diag.length >= 5;
    }).map(function(diag){
      return fiveSameCells(diag)
    }).filter(function(item){
      return !!item[0]
    });
    if(winners[0]){
      return winners[0];
    }

    return winners[0] || [];    
  }
}

angular.module("myApp").factory("Board",function(){
  return Board;
});