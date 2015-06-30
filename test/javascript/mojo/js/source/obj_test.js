define(['mojo_js_source_Obj'], function(){
	describe("test Obj: ", function() {
    var obj = mstrmojo.Obj;
    it("Obj should be equal to Obj", function() {      
    	("Obj").should.equal("Obj");
    });
  });
});

/*var tests = [
      { args: [1, 2], expected: 3}, 
      { args: [1, 2, 3], expected: 6 },
      { args: [1, 2, 3, 4], expected: 10 }];

    tests.forEach(function(test) {
      it('correctly adds ' + test.args.length + ' args', function() {
        var res = add.apply(null, test.args);
        res.should.equal(test.expected);
      });
    });*/