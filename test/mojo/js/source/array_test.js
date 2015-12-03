define(['mojo_js_source_array'], function() {
	describe("test array.indexOf: ", function() {
    var arr = new Array(0, 1, 2, 3);

    it("number 0 should appear at pos 0", function() {
      (mstrmojo.array.indexOf(arr, 0)).should.equal(0);
    });

    it("string '\\0' should not appear in array", function() {
      (mstrmojo.array.indexOf(arr, "\0")).should.equal(-1);
    });
  });
});
