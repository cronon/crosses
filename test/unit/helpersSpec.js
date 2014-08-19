describe("newArray", function(){
  it("returns new Array of appropriate length",function(){
    expect(newArray(10).length).toEqual(10);
  });

  it("fills array with result of cb", function(){
    var expected = newArray(10,function(){return true});
    expect(expected).toEqual([true,true,true,true,true,
                                       true,true,true,true,true]);
  });
});

describe("allTheSame", function(){
  it("returns false when all not equal", function(){
    var array = [1,2,1,1,1];
    expect(allTheSame(array)).toBe(false);
  });

  it("returns true when all equal", function(){
    var array = [1,1,1,1,1];
    expect(allTheSame(array)).toBe(true);
  });

  it("returns true with epmty array", function(){
    expect(allTheSame([])).toBe(true);
  });
})