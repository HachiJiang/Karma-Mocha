define(['mojo_js_source_gm_GMUtility'], function() {
  describe("GMUtility:", function() {
    var $GMUtility = mstrmojo.gm.GMUtility;
    describe("isDigitalArrayEqual:", function() {
      var arr1 = [0, 1];
      var arr2 = [0, 1];
      it(arr1 + " should be equal to " + arr2, function() {
        var result = $GMUtility.isDigitalArrayEqual(arr1, arr2);
        result.should.equal(true);
      });
    });
  });
});
