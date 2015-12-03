var mstrYUI = null;

YUI({bootstrap:false}).use("*",function(Y) {
    mstrYUI = Y;
    Y.namespace("jstest");
    });



mstrTestCase = (function()
{
	function mstrTestCase(template)
	{
		mstrYUI.Test.Case.apply(this,[template]);
		this.result = {'isPassed':true,errorMsg:''};
	}
	/*
		private function 
		to wrapper the assert framework provided by YUI
	*/ 
	wrapperAssertions = function()
	{
		Asserts = {};
		for(var func in mstrYUI.Assert)
			Asserts[func] = mstrYUI.Assert[func];
		for(var func in mstrYUI.ArrayAssert)
			Asserts[func] = mstrYUI.ArrayAssert[func];	
		return Asserts;
	}
	
	mstrTestCase.prototype = new mstrYUI.Test.Case(
	{
		// assign the assert framework you want to use.
		/*
			Please refer to 
			http://developer.yahoo.com/yui/3/api/Assert.html and
			http://developer.yahoo.com/yui/3/api/Test.ArrayAssert.html
		*/
		Assert : wrapperAssertions(),			
		/*
			put the code you need to exectue before the whole testcase here, 
			this will only be executed once.
			If needed override it in its instance.
			This will be excuted when yahoo testRunner meets a TEST_CASE_BEGIN_EVENT		
		*/
		setUpTestCase : function(){},
		/*
			clear everything setup at setCaseUp() here
			This will be excuted when yahoo testRunner meets a TEST_CASE_COMPLETE_EVENT	
			If you use different div id other than 'testAppendedHtml' when wrapper the html pieces,
			please follow the below format to overriden this function in the testcase.
		*/
		tearDownTestCase : function()
		{
			microstrategy.bones = [];
			microstrategy.controlVariables = {};
		},
		tearDown : function()
		{
			microstrategy.bones = [];
			microstrategy.controlVariables = {};
		}
		
		
	});
			
	mstrTestCase.registerBones = function(bones)
	{
		if(typeof microstrategy != 'undefined')
		{
			for(var i = 0; i < bones.length; i ++)
				microstrategy.bonesToRegister.push(bones[i])
			microstrategy.eventManager.executeFunction('microstrategy.eventManager.onload()');	
		}
	}
	
	mstrTestCase.unRegisterBones = function(bones)
	{
		if(typeof microstrategy != 'undefined')
		{
			for(var i = 0; i < bones.length; i ++)
				microstrategy.unRegisterBone(bones[i].id);			
		}
	}
	
	mstrTestCase.runTest = function(testObj)
	{
		if(typeof testObj == 'undefined' || !(testObj instanceof mstrTestCase))
			return;
		var mstrTest = TestCase(testObj.name);
		mstrTest.prototype.testMstrJS = function()
		{
			var runner = mstrYUI.Test.Runner;
			runner.clear();
			runner.add(testObj);					
			Clock.reset();
			runner.run();
			/*
				The mills for tick should be bigger enough to make every tick call
				in mstrTestCase.simulateEvt finished.
				It should be greater or equal to the sum of mills when call tick in 
				simulateEvt.
				like if we make two simulateEvt call and every time, we tick for 10 mills,
				so here the mills should be >= 10*2
				see Clock.tick @ jsUnitMockTimeout.js
			*/
			Clock.tickMstr();	
			/*
			 Handle test result
			*/
			if(!testObj.result.isPassed)
				fail(testObj.result.errorMsg);		
		}									
	}
	
		
	mstrTestCase.handleTestResult = function(data)
	{
        var TestRunner = mstrYUI.Test.Runner;
        switch(data.type) {
        	case TestRunner.TEST_CASE_BEGIN_EVENT:
        		data.testCase.setUpTestCase();        	
        		jstestdriver.console.log('TestCase named \''+ data.testCase.name + '\' begins');
        		break;
            case TestRunner.TEST_FAIL_EVENT:   
            	data.testCase.result.isPassed = false;                              
                jstestdriver.console.log("Test named '" + data.testName + "' failed with message: '" + data.error.message + "'.");
                data.testCase.result.errorMsg += "\n Test named '" + data.testName + "' failed with message: '" + data.error.message + "'."							
                break;
            case TestRunner.TEST_PASS_EVENT:
                jstestdriver.console.log("Test named '" + data.testName + "' passed.");
                break;
            case TestRunner.TEST_IGNORE_EVENT:
                jstestdriver.console.log("Test named '" + data.testName + "' was ignored.");
                break;
			case TestRunner.TEST_CASE_COMPLETE_EVENT:
				data.testCase.tearDownTestCase();
				jstestdriver.console.log(data.testCase.name + " Test Completed");
				jstestdriver.console.log("passed "+data.results.passed);
				jstestdriver.console.log("failed "+data.results.failed);
				break;
        }  	                                    
	}
	
	/*
		This method is used to do some initialization before all the test or
		testsuits runs.
		It will be called at the very begining of mstrTestCase.runTests();
		
	*/
	mstrTestCase.setAllUp = function()
	{
			mstrTestCase.initMstrJS();
			mstrTestCase.overridenMstrJS();	
			//mstrTestCase.wrapperAssertions();
			mstrTestCase.initRunner();							
	} 
	 
	/*
		This method is used to clear up everything setUp in the mstrTestCase.setUp()
		It will be called at the end of mstrTestCase.runTests();
	*/	
	mstrTestCase.tearAllDown = function()
	{
	}  
	mstrTestCase.initRunner = function()
	{
		var runner = mstrYUI.Test.Runner;
		runner.subscribe(runner.TEST_CASE_BEGIN_EVENT,mstrTestCase.handleTestResult);
		runner.subscribe(runner.TEST_FAIL_EVENT, mstrTestCase.handleTestResult); 			
    	runner.subscribe(runner.TEST_IGNORE_EVENT, mstrTestCase.handleTestResult); 
		runner.subscribe(runner.TEST_PASS_EVENT, mstrTestCase.handleTestResult); 
		runner.subscribe(runner.TEST_CASE_COMPLETE_EVENT, mstrTestCase.handleTestResult);
	}
	mstrTestCase.initMstrJS = function()
	{
		self.ITEM_SEPARATOR = '~';
		self.UNIT_SEPARATOR = '';
		self.EXPRESSION_SEPARATOR = '';
		self.ANSWER_SEPARATOR = '';
		self.SIMPLE_SEPARATOR = ';';
		self.SIMPLE_SEPARATOR_COMMA = ',';
		self.CLIPBOARD_ITEM_SEPARATOR = '';	 
	} 
	
	/*
		init global variable updateManager and microstrategy
		mstrTestCase.js provides initUM() and initMicrostrategy()
		and provides some default settings of this two variables.
		input the properties you want to override or add as an object 
		into these two functions.
	*/

	mstrTestCase.initUM = function(obj)
	{
		if (typeof(mstrUpdateManager) != 'undefined') 
		{
			mstrUpdateManager.UNIT_SEPARATOR = '';
			mstrUpdateManager.ITEM_SEPARATOR =  '';
			mstrUpdateManager.multipleEventArgName = "events";
			/*
			*	override the necessary properties
			*/
			for(var prop in obj)
			{				
				mstrUpdateManager[prop] = obj[prop];
			}
		}				
	}
	
	mstrTestCase.initMicrostrategy = function(obj)
	{
		if (typeof(microstrategy) != 'undefined') 
		{
			microstrategy.servletName = 'mstrWeb';
			microstrategy.pageName = 'my';
			microstrategy.waitPageDelay = "0";
			microstrategy.userPalette = "#1C93BA,#EBEBEB,#0099cc,#e0e0e0,#d7d7d7,#dcdcdc,#136682,#8463a5";
			microstrategy.pageScreenMode = "0"
			microstrategy.sessionId = ""; 	
			/*
			*	override the necessary properties
			*/
			for(var prop in obj)
			{				
				microstrategy[prop] = obj[prop];
			}
		}				
	}
	
	mstr.mockXHR = {
			status:200,
			readyState:4,
			responseText:{}
		};
	
	mstrTestCase.overridenMstrJS = function()
	{		
			var PUP = mstr.http.PUProcessor;
			/*
				Overriden the submit method of its superclass XHRProcesser
			*/
			PUP.prototype.submit = function PUPMock_submit()
			{
				this._xhr = mstr.mockXHR;
				this._onreadystatechange();
			}
			/*
				Overriden its own _processResponse method.
			*/
			PUP.prototype._processResponse = function PUPMock_processResponse(obj) 
			{
				this.props['response'] = {'data': obj};
			};	    
	}  
	
	mstrTestCase.setResponseJson = function(jsonObj)  
	{
		mstr.mockXHR['responseText'] = jsonObj;
	} 
	 
	 
	mstrTestCase.simulateEvt = function(target,evtName,context)  
	{
		if( typeof context != 'undefined')
			mstrYUI.Event.simulate(target,evtName,context);
		else
			mstrYUI.Event.simulate(target,evtName);
		/*
			in the govorner.submitRequest() call the window.setTimeout()
			which is overriden by jsUnitMockTimeout.js.
			in order to fire the govorner.go() successfully, we should manually call tickMstr();
			//because in submitRequest() it set the wait mills be 10, so here, the parameters transfer to tick should be >= 10
			see Clock.tickMstr() @ jsUnitMockTimeout.js
		*/
		Clock.tickMstr();		
	}   
	
	
  		
	return mstrTestCase;
} )();  

// Ready to digest testCases...
mstrTestCase.setAllUp(); 







