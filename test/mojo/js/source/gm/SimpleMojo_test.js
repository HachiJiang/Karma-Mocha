define(['mojo_js_source_mstrmojo'],function(){
    describe('Simple mojo test', function () {
        it('checks mojo.meta.TP', function () {
            var tp = mstrmojo.meta.TP;
            expect(tp).to.equal('t');
        });
    });
});