
function Cell(x, y, value){
  Object.defineProperties(this, {
    "x": {
      value: x,
      writable: false
    },
    "y": {
      value: y,
      writable: false
    },
    "value": {
      value: value,
      writable: true
    }
  });
}

angular.module("myApp").factory("Cell",function(){
  return Cell;
});