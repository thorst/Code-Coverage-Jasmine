describe("Simple", function() {
 
  

  it("should be able to add a number", function() {
    expect(typeof $.simpleAdd(1,2)).toEqual("number");

    //demonstrates use of custom matcher
    expect($.simpleAdd(1,2)).toEqual(3);
  });

 
});
