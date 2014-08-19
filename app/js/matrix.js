'use strict';

var Matrix = function(array){
  var rows = array;
  if(rows.length == 0){
    return new Error("Invalid array passed");
  }

  var self = function(x, y){
    if(arguments.length == 3){
      rows[y][x] = arguments[2];
    }
    return rows[y][x];
  }

  self.width = function(){
    return rows[0].length;
  }

  self.height = function(){
    return rows.length;
  }

  self.rows = function(){
    // cloning array of arrays
    return Array.apply(null, rows.map(function(item){
      return Array.apply(null, item);
    }));
  }

  self.cols = function(){
    return Object.keys(rows[0]).map(function (key) { 
      return rows.map(function (row) { 
        return row[key]; 
      }); 
    });
  }

  // http://stackoverflow.com/a/6313407
  self.primaryDiagonals = function(){
    var N = self.height();
    var x, y, p, q;
    var result = [];
    for(p = 0; p < 2*N - 1; p++){
      var diag = [];
      for(q = Math.max(0, p-N+1); q <= Math.min(p, N-1); q++){
        x = N - 1 - q;
        y = p - q;
        diag.push(rows[y][x]);
      }
      result.push(diag);
    }
    return result;
  }

  self.secondaryDiagonals = function(){
    var N = self.height();
    var x, y, p, q;
    var result = [];
    for(p = 0; p < 2*N - 1; p++){
      var diag = [];
      for(q = Math.max(0, p-N+1); q <= Math.min(p, N-1); q++){
        x = q;
        y = p - q;
        diag.push(rows[y][x]);
      }
      result.push(diag);
    }
    return result;
  }
  return self;
}

angular.module("myApp").factory("Matrix",function(){
  return Matrix;
});