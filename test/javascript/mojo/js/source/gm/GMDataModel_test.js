//This test will run in a browser, so you can work with global variables and the DOM.
define(['mojo_js_source_gm_GMDataModel'],function(){
    describe('GraphMatrix GMDataModel', function () {
        var gmDataModel = new mstrmojo.gm.GMDataModel({
            cp: [],
            rp: [],
            gts: {
                row: [],
                col: []
            },
            gmCtr: {
                getChartInfo: function() {
                    return {isABL: true};
                },
                getMetricsOnXAxis: function() {
                    return [];
                },
                getMetricsOnYAxis: function() {
                    return [];
                },
                getSizeByMetrics: function() {
                    return [];
                }
            }
        });

        it('tests chartInfo to be correct', function () {
            var chartInfo = gmDataModel.getChartInfo();
            expect(chartInfo.isABL).to.equal(true);
        });
    });
});