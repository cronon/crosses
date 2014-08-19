var newArray = function(size, cb){
  cb = cb || function(){return undefined};
  var result = Array.apply(null,Array(size));
  return result.map(cb);
}

var allTheSame = function(elems){
  if(elems.length == 0){
    return true;
  }
  var sample = elems[0];
  var equals = elems.filter(function(item){
    return item == sample;
  });
  return equals.length == elems.length;
}