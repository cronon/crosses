describe("Cell", function(){
  var cell;
  beforeEach(function(){
    cell = new Cell(1,2,"!");
  });

  it("creates correctly", function(){
    expect(cell.x).toEqual(1);
    expect(cell.y).toEqual(2);
    expect(cell.value).toEqual("!");
  })
  it("has immutable x and y", function(){
    cell.x = 5;
    cell.y = 6;
  });

  it("has mutable value", function(){
    cell.value = 18;
    expect(cell.value).toEqual(18);
  })
})