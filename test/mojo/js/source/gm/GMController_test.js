define(['mojo_js_source_gm_GMController'],function(){
    describe('GMControler test', function () {
        it('checks mojo.meta.TP', function () {
            var gmCtrl = new mstrmojo.gm.GMController({firstRes:{}});
            var data = {
                trendref: 'trendline'
                },
                trendline = gmCtrl.getTrendLineJSON(data);
            expect(trendline).to.equal('trendline');
        });
    });
});