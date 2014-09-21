'use strict';

/* Directives */

var onEnd = function(wonCells, winner){
  var tbody = document.querySelector("tbody");
  wonCells.forEach(function(cell){
    var tr = tbody.children[cell.y];
    var td = tr.children[cell.x];
    td.className = "winner";
  });
}

angular.module('myApp.directives', []).
  directive("board", [function(){
    return {
      compile: function(templateElement, templateAttrs){
        return {
          pre: function(scope, elm, attrs){
            var w = parseInt(attrs.width);
            var h = parseInt(attrs.height);
            scope.game = new Game(w, h, ["x", "o"], onEnd);
            scope.rows = scope.game.board.rows();
            document.addEventListener("keydown", function(e){
              if(e.ctrlKey && e.keyCode == 90){
                scope.game.undo();
                scope.rows = scope.game.board.rows();
                scope.$digest();
              }
            })
          },
          post: function(scope, elm, attrs){
            scope.cellClick = function(e){
              scope.game.mark(e.cell.x, e.cell.y);
              scope.rows = scope.game.board.rows();
            }
          }
        }
      },
      replace: true,
      restrict: 'E',
      templateUrl: "partials/board.html"
    }
  }]);
