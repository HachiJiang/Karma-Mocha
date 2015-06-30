// Mock setTimeout, clearTimeout
// Contributed by Pivotal Computer Systems, www.pivotalsf.com

var Clock = {
    timeoutsMade: 0,
    scheduledFunctions: {},
    nowMillis: 0,
    reset: function() {
        this.scheduledFunctions = {};
        this.nowMillis = 0;
        this.timeoutsMade = 0;
    },
    /*
    	Added by Haifeng
    	Similar to tick(), but without parameters.
    	If the scheduled function is set to be run repeatly after every specified interval,
    	then tick() should be used.
    */
    tickMstr: function() {
        this.runFunctionsWithinRangeMstr();
        /*
        	actually I like the following one more. in this case, I don't need to
        	define a new function like runFunctionsWithinRangeMStr,which is almost 
        	the same as runFunctionsWithinRange.
        	to use the following one, maybe we need to mofiy the setTimeout() function
        	by set the paramter mills to be a fixed number(fixedTimoutMills) like 0 no matter how much this 
        	mills really is when other functions call setTimeout()
        */
        //this.runFunctionsWithinRange(this.nowMills,this.nowMills + fixedTimeoutMills);
    },   
    tick: function(millis) {
        var oldMillis = this.nowMillis;
        var newMillis = oldMillis + millis;
        this.runFunctionsWithinRange(oldMillis, newMillis);
        this.nowMillis = newMillis;
    },
    runFunctionsWithinRange: function(oldMillis, nowMillis) {
        var scheduledFunc;
        var funcsToRun = [];
        for (var timeoutKey in this.scheduledFunctions) {
            scheduledFunc = this.scheduledFunctions[timeoutKey];
            if (scheduledFunc != undefined &&
                scheduledFunc.runAtMillis >= oldMillis &&
                scheduledFunc.runAtMillis <= nowMillis) {
                funcsToRun.push(scheduledFunc);
                //modified by Haifeng
                //this.scheduledFunctions[timeoutKey] = undefined;
                delete this.scheduledFunctions[timeoutKey]
            }
        }

        if (funcsToRun.length > 0) {
            funcsToRun.sort(function(a, b) {
                return a.runAtMillis - b.runAtMillis;
            });
            for (var i = 0; i < funcsToRun.length; ++i) 
            {
                try {
                    this.nowMillis = funcsToRun[i].runAtMillis;
                    funcsToRun[i].funcToCall();
                    if (funcsToRun[i].recurring) {
                        Clock.scheduleFunction(funcsToRun[i].timeoutKey,
                                funcsToRun[i].funcToCall,
                                funcsToRun[i].millis,
                                true);
                    }
                } catch(e) {
                }
            }
            this.runFunctionsWithinRange(oldMillis, nowMillis);
        }
    },
    /*
    	Added by Haifeng
    	Similar to funFunctionsWithRange(),but without parameters
    */
    runFunctionsWithinRangeMstr: function() {
        var scheduledFunc;
        var funcsToRun = [];
        for (var timeoutKey in this.scheduledFunctions) {
            scheduledFunc = this.scheduledFunctions[timeoutKey];
            if (scheduledFunc != undefined) {
                funcsToRun.push(scheduledFunc);
                //modified by Haifeng
                //this.scheduledFunctions[timeoutKey] = undefined;
                delete this.scheduledFunctions[timeoutKey]
            }
        }

        if (funcsToRun.length > 0) {
           /* funcsToRun.sort(function(a, b) {
                return a.runAtMillis - b.runAtMillis;
            });*/
            for (var i = 0; i < funcsToRun.length; ++i) {
                try {
                    this.nowMillis = funcsToRun[i].runAtMillis;
                    funcsToRun[i].funcToCall();
                    if (funcsToRun[i].recurring) {
                        Clock.scheduleFunction(funcsToRun[i].timeoutKey,
                                funcsToRun[i].funcToCall,
                                funcsToRun[i].millis,
                                true);
                    }
                } catch(e) {
                }
            }
            this.runFunctionsWithinRangeMstr();
        }
    },
    scheduleFunction: function(timeoutKey, funcToCall, millis, recurring) {
      //added by Haifeng begin   
	    var param1 = funcToCall;
	    if(typeof param1 === 'string')
	    {
	    	funcToCall = function(){eval(param1)};
	    }	    
    //added by Haifeng end
        Clock.scheduledFunctions[timeoutKey] = {
            runAtMillis: Clock.nowMillis + millis,
            funcToCall: funcToCall,
            recurring: recurring,
            timeoutKey: timeoutKey,
            millis: millis
        };
    }
};

function setTimeout(funcToCall, millis) {
    Clock.timeoutsMade = Clock.timeoutsMade + 1;  
    Clock.scheduleFunction(Clock.timeoutsMade, funcToCall, millis, false);
    return Clock.timeoutsMade;
}

function setInterval(funcToCall, millis) {
    Clock.timeoutsMade = Clock.timeoutsMade + 1;
    Clock.scheduleFunction(Clock.timeoutsMade, funcToCall, millis, true);
    return Clock.timeoutsMade;
}

function clearTimeout(timeoutKey) {
    Clock.scheduledFunctions[timeoutKey] = undefined;        
}

function clearInterval(timeoutKey) {	
    Clock.scheduledFunctions[timeoutKey] = undefined;    
}
