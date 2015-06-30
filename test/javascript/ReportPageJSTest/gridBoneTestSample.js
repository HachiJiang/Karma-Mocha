mstrYUI.jstest.GRPsampleTestcase = new mstrTestCase(
{
	name : 'GridReportPageSampleTestCase',

	tearDown : function()
	{
	},
	setUp: function()
	{
	/*
	 *The report contains 3 attributes(Year,Country,Category)
	 *and two metrics (Cost,Profit)
	*/
	/*:DOC += 
	<div id='appendedHTML'>		
		<div id="UniqueReportID" style="position: relative;" styleid="ED9283EA49812F07861681B05E6398C4" name="UniqueReportID" scriptclass="mstrGridReport" sty="tabl">
		<table summary="This table displays the requested report results" id="table_UniqueReportID" cxid="vb_GM" style="table-layout: auto;empty-cells:show;" cellpadding="0" class="r-cssDefault view-grid" border="0" cellspacing="0">
		<colgroup>
		<col key="18D679D5111D3E4981000E787EC6DE8A4121" style=""/>
		<col key="18D679D3811D3E4981000E787EC6DE8A4121" style=""/>
		<col key="18D679D3711D3E4981000E787EC6DE8A4121" style=""/>
		<col key="37FD5B69611D5AC76C000D98A4CC5F24F041" style=""/>
		<col key="34C051DB611D3E877C000B3B2D86C964F041" style=""/>
		</colgroup>
		<tr>
<TD  CX="[10,13,4,4,17,18,19,20,21,22,25,26]" MX="1" oty="12" FRMNAME="ID" AX="1" FE="BB:8D679D5111D3E4981000E787EC6DE8A4:1:1:0:2:2006" STY="ATT" class="r-c2" OR="V" id="UniqueReportID_1_1_1" FRMLIST="ID_8D6790CF11D3E4981000E787EC6DE8A4_1_-1_DATE_4B97DFC611D5AEDAC000E38A4CC5F24F_3_0" title="Year.&nbsp;Drag object to perform pivot.&nbsp;Right-click for more options" FRMID="8D6790CF11D3E4981000E787EC6DE8A4" style="cursor:pointer;" oid="8D679D5111D3E4981000E787EC6DE8A4" DS="Year" DG="TRUE" DPT="1" >Year</TD>
		
<TD  CX="[31,34,4,4,36,37,19,20,38,39,42,26]" MX="1" oty="12" FRMNAME="DESC" AX="1" FE="BB:8D679D3811D3E4981000E787EC6DE8A4:1:2:0:2:1:3:1:USA" STY="ATT" class="r-c2" OR="V" id="UniqueReportID_1_2_1" FRMLIST="ID_8D6790CF11D3E4981000E787EC6DE8A4_2_0_DESC_8D6790D211D3E4981000E787EC6DE8A4_1_-1" title="Country.&nbsp;Drag object to perform pivot.&nbsp;Right-click for more options" FRMID="8D6790D211D3E4981000E787EC6DE8A4" style="cursor:pointer;" oid="8D679D3811D3E4981000E787EC6DE8A4" DS="Country" DG="TRUE" DPT="2" >Country</TD>
		
<TD  CX="[45,48,4,4,49,50,19,20,51,52,42,26]" MX="1" oty="12" FRMNAME="DESC" AX="1" FE="BB:8D679D3711D3E4981000E787EC6DE8A4:1:2:0:2:1:3:1:Books" STY="ATT" class="r-c2" OR="V" id="UniqueReportID_1_3_1" FRMLIST="ID_8D6790CF11D3E4981000E787EC6DE8A4_2_0_DESC_8D6790D211D3E4981000E787EC6DE8A4_1_-1" title="Category.&nbsp;Drag object to perform pivot.&nbsp;Right-click for more options" FRMID="8D6790D211D3E4981000E787EC6DE8A4" style="cursor:pointer;" oid="8D679D3711D3E4981000E787EC6DE8A4" DS="Category" DG="TRUE" DPT="3" >Category</TD>
		
<TD  CX="[55,4,111,4,113,116,19,20,117,120,121,122,26]" oty="4" AX="2" acl="255" STY="MV" class="r-c11" OR="V" UPT="2,1" id="UniqueReportID_-1_1_1" title="Cost.&nbsp;Drag object to perform pivot.&nbsp;Right-click for more options" style="cursor:pointer;" oid="7FD5B69611D5AC76C000D98A4CC5F24F" DS="Cost" DG="TRUE" D1="2A1A0" DPT="1" >Cost</TD>
<TD  CX="[125,4,179,4,180,116,19,20,181,184,185,186,26]" oty="4" AX="2" acl="255" STY="MV" class="r-c15" OR="V" UPT="2,1" id="UniqueReportID_-1_2_1" title="Profit.&nbsp;Drag object to perform pivot.&nbsp;Right-click for more options" style="cursor:pointer;" oid="4C051DB611D3E877C000B3B2D86C964F" DS="Profit" DG="TRUE" D1="2A1A1" DPT="2" >Profit</TD></tr><tr o="2">
<TD  o="0" class="r-c3" rowspan="8" i="1A1" ><a style="" onclick="return optDrl('-1',this);" href="#">2006</a></TD>
<TD  o="0" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">USA</a></TD>
<TD  o="0" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$479,756</TD>
<TD  class="r-c17 nw" i="0A2" >$131,503</TD></tr><tr o="3">
<TD  o="1" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$4,704,843</TD>
<TD  class="r-c17 nw" i="0A2" >$1,002,303</TD></tr><tr o="4">
<TD  o="2" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$896,947</TD>
		
<TD  class="r-c17 nw" i="0A2" >$59,264</TD></tr><tr o="5">
<TD  o="3" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$859,376</TD>
<TD  class="r-c17 nw" i="0A2" >$41,770</TD></tr><tr o="6">
<TD  o="4" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">Web</a></TD>
<TD  o="4" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$30,483</TD>
<TD  class="r-c17 nw" i="0A2" >$8,449</TD></tr><tr o="7">
<TD  o="5" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$265,670</TD>
<TD  class="r-c17 nw" i="0A2" >$55,027</TD></tr><tr o="8">
<TD  o="6" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$53,003</TD>
<TD  class="r-c17 nw" i="0A2" >$3,380</TD></tr><tr o="9">
<TD  o="7" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$53,018</TD>
<TD  class="r-c17 nw" i="0A2" >$2,445</TD></tr><tr o="10">
<TD  o="8" class="r-c3" rowspan="8" i="1A1" ><a style="" onclick="return optDrl('-1',this);" href="#">2007</a></TD>
<TD  o="8" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">USA</a></TD>
<TD  o="8" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$618,769</TD>
<TD  class="r-c17 nw" i="0A2" >$169,907</TD></tr><tr o="11">
<TD  o="9" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$6,017,621</TD>
<TD  class="r-c17 nw" i="0A2" >$1,284,224</TD></tr><tr o="12">
<TD  o="10" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$1,150,553</TD>
<TD  class="r-c17 nw" i="0A2" >$76,603</TD></tr><tr o="13">
<TD  o="11" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$1,114,723</TD>
<TD  class="r-c17 nw" i="0A2" >$53,815</TD></tr><tr o="14">
<TD  o="12" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">Web</a></TD>
<TD  o="12" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$62,411</TD>
<TD  class="r-c17 nw" i="0A2" >$17,120</TD></tr><tr o="15">
<TD  o="13" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$592,639</TD>
<TD  class="r-c17 nw" i="0A2" >$126,178</TD></tr><tr o="16">
<TD  o="14" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$111,312</TD>
<TD  class="r-c17 nw" i="0A2" >$7,035</TD></tr><tr o="17">
<TD  o="15" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$109,494</TD>
<TD  class="r-c17 nw" i="0A2" >$5,204</TD></tr><tr o="18">
<TD  o="16" class="r-c3" rowspan="8" i="1A1" ><a style="" onclick="return optDrl('-1',this);" href="#">2008</a></TD>
<TD  o="16" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">USA</a></TD>
<TD  o="16" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$742,707</TD>
<TD  class="r-c17 nw" i="0A2" >$204,798</TD></tr><tr o="19">
<TD  o="17" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$7,128,107</TD>
<TD  class="r-c17 nw" i="0A2" >$1,529,283</TD></tr><tr o="20">
<TD  o="18" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$1,371,874</TD>
<TD  class="r-c17 nw" i="0A2" >$91,750</TD></tr><tr o="21">
<TD  o="19" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$1,325,584</TD>
<TD  class="r-c17 nw" i="0A2" >$64,866</TD></tr><tr o="22">
<TD  o="20" class="r-c3" rowspan="4" i="1A2" ><a style="" onclick="return optDrl('-1',this);" href="#">Web</a></TD>
<TD  o="20" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Books</a></TD>
<TD  class="r-c13 nw" i="0A1" >$136,691</TD>
<TD  class="r-c17 nw" i="0A2" >$37,501</TD></tr><tr o="23">
<TD  o="21" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Electronics</a></TD>
<TD  class="r-c13 nw" i="0A1" >$1,392,820</TD>
<TD  class="r-c17 nw" i="0A2" >$292,588</TD></tr><tr o="24">
<TD  o="22" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Movies</a></TD>
<TD  class="r-c13 nw" i="0A1" >$260,555</TD>
<TD  class="r-c17 nw" i="0A2" >$16,667</TD></tr><tr o="25">
<TD  o="23" class="r-c3" i="1A3" ><a style="" onclick="return optDrl('-1',this);" href="#">Music</a></TD>
<TD  class="r-c13 nw" i="0A1" >$251,128</TD>
<TD  class="r-c17 nw" i="0A2" >$11,944</TD></tr></table></div></div></td></tr></table><table width="100%" cellpadding="0" border="0" cellspacing="0"><tr>
<TD colspan="1" rowspan="1"><div class="report-bottom"><div id="rb_ReportStyleIncrementalFetch_2" dg="0" rsz="0" iframe="true" style="display:block;" or="2" name="rb_ReportStyleIncrementalFetch_2" at="UniqueReportID" class="mstrTransform" ors="3"></div>	
	</div>	
	*/
		this.bones = [];
		this.gridBone = {id : "UniqueReportID", loadCondition : "(mstrColResizeImpl && mstrGridReport && mstrGridMapperImpl && mstrMaskMappedImpl && mstrTemplateImpl)", 
	 properties : {'isXDACustomSQLReport':false,'hasNoMetrics':false,
	 'reportType':1,'drillOpenInNewWindow':false,
	 'minor':1,'gridCellCssPrefix':'r-','showEmptyAxis':true,
	 'currentView':1,'visualizationList':[],'objTypeReport':3,
	 'bp':{'72001':'mstrWeb.report.gridEditor','104003':'mstrWeb.report.frame.mfed','104004':'mstrWeb.report.frame.mfed','6021':'mstrWeb.report.frame','104001':'mstrWeb.report.frame.mfed','104002':'mstrWeb.report.frame.mfed'},
	 'features':{'enable-show-subtotals':false,'show-filter-on-selections-checks':false,'check-lock-column-headers':false,'check-show-pivot-buttons':false,'check-show-subtotals':false,'check-show-banding':false,'check-show-graph-zones':false,
	 'report-is-graph-view-mode':false,'is-non-viewable-report':false,'page-full-screen-mode':false,'check-outline-mode':false,'check-show-sort-buttons':false,'check-lock-row-headers':false,'is-view-report':false},
	 'selectedVisualization':'','effectiveView':1,'stateID':0,'gridGraphUnitKeyContext':'','isDndEnabled':true,'isFilterVisible':false,'hasThresholds':false,'attMap':[],'isDormant':false,'quickSwitch':false,'checkBanding':false,'isReportUndoable':false,
	 'visualizationMode':0,'currentPageX':0,'currentPageY':0,'filterVisPulldown':true,'drillIframeEnabled':true,'styleName':'','emptyAxisVisible':false,'hdrMvMap':[[{},{}],[{'cxid':'vb_GM','dk':'0.82.1.1.*-1','tp':'Drill to Quarter','cx':'[10,187,4,4]'},
	 {'cxid':'vb_GM','dk':'0.82.1.2.*-1','tp':'Drill to Distribution Center','cx':'[31,187,4,4]'},{'cxid':'vb_GM','dk':'0.82.1.3.*-1','tp':'Drill to Subcategory','cx':'[45,187,4,4]'}],[{}]],'isGrid':true,'gridFormat':
	 {'de':{'fz':-2,'rp':'1','ncs':'$','nct':9,'fw':-2,'tp':'1','lp':'1','ncp':0,'vt':1,'nnn':1,'td':0,'bbc':'#000000','bp':'1','bls':1,'ff':'-2','brc':'#000000','fs':-2,'hz':1,'bg':'#FFFFFF','nth':true,'fu':false,'ft':false,'bbs':1,'btc':'#000000','bd':0,
	 'blc':'#000000','ndp':2,'c':'#000000','nfs':'General','brs':1,'bts':1,'tw':false,'gr':''},'ra':{'v':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':0,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'brc':'#000000','fs':0,'hz':2,'bg':'#FFFFFF',
	 'fu':false,'ft':false,'bd':2,'btc':'#000000','bbs':1},'sn':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':false,'brc':'#FFFFFF','fs':0,'hz':2,'bg':'#F0F0F0','fu':false,'ft':false,'bd':2,'btc':'#FFFFFF','bbs':1},
	 'a':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'fs':0,'brc':'#000000','hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1},'sv':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':false,
	 'brc':'#FFFFFF','fs':0,'hz':4,'bg':'#F0F0F0','fu':false,'ft':false,'bd':2,'btc':'#FFFFFF','bbs':1},'h':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'fs':0,'brc':'#000000','hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1}},
	 'u':[{'v':{},'sn':{},'a':{},'sv':{},'h':{}},{'v':{},'sn':{},'a':{},'sv':{},'h':{}},{'v':{},'sn':{},'a':{},'sv':{},'h':{}},{'v':{'nct':1,'ndp':0,'ncp':0,'nfs':'\"$\"#,##0','nth':true,'bg':'#E3E3E3'},'sn':{},'a':{'bg':'#E3E3E3'},'sv':{},'h':{'bg':'#E3E3E3'}},{'v':{'nct':1,'ndp':0,'ncp':0,'nfs':'\"$\"#,##0;(\"$\"#,##0)','nth':true,'nnn':3},'sn':{},'a':{},'sv':{},
	 'h':{'bg':'#E3E3E3'}}],'ca':{'v':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':3,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'fs':0,'brc':'#000000','hz':3,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1},'sn':{'tw':false,'vt':3,'hz':3},'a':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial',
	 'tw':true,'fs':0,'brc':'#000000','hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1},'sv':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','brc':'#FFFFFF','fs':0,'bg':'#F0F0F0','fu':false,'ft':false,'bd':2,'btc':'#FFFFFF','bbs':1},'h':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0',
	 'bls':1,'ff':'Arial','tw':true,'fs':0,'brc':'#000000','hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1}},'agc':{'v':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':0,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'brc':'#000000','fs':0,'hz':2,'bg':'#FFFFFF','fu':false,'ft':false,'bd':2,'btc':'#000000','bbs':1},'sn':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,
	 'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':false,'brc':'#FFFFFF','fs':0,'hz':2,'bg':'#F0F0F0','fu':false,'ft':false,'bd':2,'btc':'#FFFFFF','bbs':1},'a':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':true,'fs':0,'brc':'#000000',
	 'hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1},'sv':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial','tw':false,'brc':'#FFFFFF','fs':0,'hz':4,'bg':'#F0F0F0','fu':false,'ft':false,'bd':2,'btc':'#FFFFFF','bbs':1},'h':{'fz':8,'blc':'#C0C0C0','c':'#25396E','fw':-1,'vt':2,'brs':0,'bts':0,'bbc':'#C0C0C0','bls':1,'ff':'Arial',
	 'tw':true,'fs':0,'brc':'#000000','hz':1,'bg':'#F0F0F0','fu':false,'ft':false,'gr':'F0F0F0,C0C0C0,14,90,0,100','bd':2,'btc':'#000000','bbs':1}},'am':{'v':{'nct':1,'ndp':0,'ncp':0,'nth':true},'sn':{},'a':{},'sv':{},'h':{}},'gb':{'blc':'#C0C0C0','bls':1,'brc':'#C0C0C0','brs':1,'bts':1,'bbs':1,'btc':'#C0C0C0','bd':1,'bbc':'#C0C0C0'}},
	 'showAttForms':false,'DEFAULT_GRAPH_MINOR_TYPE':1,'lastUpdate':'Last update: 1/15/10 10:16:57 AM','metricsPosInGrid':'2A1','thresholdsState':false,'drillKeepThreshValue':'1','parentFolderID':'2C1418AE42B18E256DAA70A6E1BDF494','startCol':1,'useLockset':false,'messageID':'4F0A495A49A6DACFD5E479A175CA0ACF','metricsOnRows':false,'DEFAULT_GRAPH_MAJOR_TYPE':4,
	 'gridWidthInfo':{'colScenario':2,'rowScenario':2,'rowHeight':''},'major':4,'overlapGridTitles':true,'allVisList':
	 {'visCustomProductAnalysisScorecardDocument':{'vm':50,'d':'Custom Product Analysis Scorecard'},'visChartwithinCrosstabGridCellsDocument':{'vm':50,'d':'Chart within Crosstab Grid Cells Visualization'},'visGaugeContainer':{'vm':50,'d':'Gauge','ip':'1'},'visWaterfall':{'vm':50,'d':'Waterfall','ip':'1'},'vistvwgt2Document':{'vm':50,'d':'TV Visualization'},'visFishEye':{'vm':50,'d':'Fish Eye Selector','ip':'1'},'visFunnel':
	 {'vm':50,'d':'Funnel','ip':'1'},'ReportGoogleGraphAjaxVisualizationStyle':{'vm':51,'d':'Google Graph Visualization'},'visSimpleGridReport':{'vm':50,'d':'Simple Grid','ip':'1'},'ReportMapSelectorAjaxVisualizationStyle':{'vm':51,'d':'USA Map'},'visBubbleGrid':{'vm':50,'d':'Bubble Grid'},'visWeightedList':{'vm':50,'d':'Weighted List Viewer','ip':'1'},'visSimpleGridRW':{'vm':50,'d':'Simple Grid','ip':'1'},'visMapSparklineReport':
	 {'vm':50,'d':'Sparkline on Image'},'visAutoPlayLineSeriesDocument':{'vm':50,'d':'Auto Play with Line Series'},'visWhatIf':{'vm':50,'d':'WhatIf Control'},'visMicrocharts':{'vm':50,'d':'Microcharts','ip':'1'},'vistestmapsampleReport':{'vm':50,'d':'Image Sample'},'visGridshowingGraphsAlignedinrowsReport':{'vm':50,'d':'Grid showing Graphs Aligned in rows'},'visLinkSampleReport':{'vm':50,'d':'Link Sample'},'visAddingSeriesOnTheFlyReport':
	 {'vm':50,'d':'Adding Series on the Fly to a Chart'},'visDrillingBubble':{'vm':50,'d':'Interactive Bubble Graph','ip':'1'},'visRSSWidget':{'vm':50,'d':'RSS Reader'},'ReportTimelineAjaxVisualizationStyle':{'vm':51,'d':'Timeline Sample'},'visProductRevenueAnalysisDocument':{'vm':50,'d':'Product Revenue Analysis'},'visCustomColorCodedGridDocument':{'vm':50,'d':'Custom Color Coded Grid'},'visMultiControlVisualizationDocument':
	 {'vm':50,'d':'Multi Control Visualization'},'visMediaWidget':{'vm':50,'d':'Media'},'visDatePicker':{'vm':50,'d':'Date Selection'},'vismediawgt1Document':{'vm':50,'d':'Media Visualization'},'visupdsparklineDocument':{'vm':50,'d':'Sales Dashboard'},'visDataCloud':{'vm':50,'d':'Data Cloud'},'ReportStoreLayoutSelectorAjaxVisualizationStyle':{'vm':51,'d':'Store Layout'},'visGraphMatrix':{'vm':50,'d':'Graph Matrix','ip':'1'},'visHeatMap':
	 {'vm':50,'d':'Heat Map'},'visSimpleDashboardReport':{'vm':50,'d':'Simple Dashboard'}},'drillRetainParentValue':'1','autostyleId':'ED9283EA49812F07861681B05E6398C4','reportID':'BBB7DED34670419D4F1A66987CE0ADF9','beanPath':'mstrWeb.report.frame.rb.vb','visualizationsEnabled':false,
	 'availGraphTypes':-1,'isVisualization':false,'metricsCount':2,'needSaveBeforeNotes':false,'isSaveBeforeDocCreate':false,'isReportRedoable':false,'endCol':7}}
		this.bones.push(this.gridBone);
		mstrTestCase.registerBones(this.bones);
	},
	testReportBean: function()
	{
		this.Assert.isTrue(microstrategy.bones.hasOwnProperty(this.gridBone.id),'bone ' + this.gridBone.id + ' should exsits');
	},
	
	testGridStructureInfo : function()
	{
		var gsi = microstrategy.bones[this.gridBone.id].gridStructureInfo
		this.Assert.isNotNull(gsi,'gridStructureInfo should be populated during gridReportBone.onload().');
		this.Assert.isTrue(gsi.hasMetrics,'gsi should contains metircs');
		this.Assert.isFalse(gsi.hasNoUnits,'gsi should contains template units');
		/*
			Test metric axis
		*/
		this.Assert.areEqual(2, gsi.metricAxis.units.length,'report has two metircs');
		var metrics = gsi.metricAxis.units;
		this.Assert.areEqual('Cost',metrics[0].alias);
		this.Assert.areEqual('Profit',metrics[1].alias);
		/*
			Test row axis
		*/
		this.Assert.areEqual(3, gsi.rowAxis.units.length,'report has 3 attributes at row');
		var metrics = gsi.rowAxis.units;
		this.Assert.areEqual('Year',metrics[0].alias);
		this.Assert.areEqual('Country',metrics[1].alias);
		this.Assert.areEqual('Category',metrics[2].alias);	
		/*
			TestPageBy
		*/	
		this.Assert.areEqual(0, gsi.pageAxis.units.length,'report has no pageby element');
		/*
			Test column axis
		*/	
		this.Assert.areEqual(1, gsi.colAxis.units.length,'report has 1 template unit at column, the Metrics');					
	}
});

mstrTestCase.runTest(mstrYUI.jstest.GRPsampleTestcase);