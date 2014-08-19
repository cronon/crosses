/*
 @width {Integer} width of board
 @height {Integer} height of board
 @players {Array of strings} names of players
 @onEnd {Function} callback take two args: winCells, winner
 */
var Game = function(width, height, _players, onEnd){
  this.board = new Board(width, height);

  var players = _players;
  var currentPlayer = 0;
  this.winner;
  var turnsStack = [];

  this.player = function(){
    return players[currentPlayer];
  }

  this.mark = function(x, y){
    if(!this.board.cells(x,y)){
      this.board.cells(x, y, this.player());
      turnsStack.push([x,y]);

      var wonCells = this.board.wonCells();
      if(wonCells.length == 0){
        currentPlayer = (currentPlayer + 1) % players.length;
      } else {
        onEnd(wonCells, this.player());
      }
    }
  }

  this.undo = function(){
    var coordinates = turnsStack.pop();
    if(coordinates){
      this.board.cells(coordinates[0], coordinates[1], undefined);
      currentPlayer = (currentPlayer - 1 + players.length) % players.length;
    }
  }

}