###Using Karma+Mocha to start Unit Test
####Set up Test Framework
#####1. Install Node.js https://nodejs.org/ 
For Windows, click "Install" directly.
#####2. Prepare configuration files
(1). Copy all the folders and files under `\\chn-hojiang\WebAutomation\UnitTest\VizUnitTest` to your `MSTRWeb\` folder.
(2). Generate "jsfiledeps.properties" of your current build.
I just copy this file from "C:\Program Files\Apache Software Foundation\Tomcat 6.0\webapps\MicroStrategy\WEB-INF\classes" folder, for SE, you can generate your own version.
#####3. Configure RequireJS for loading Mojo (optional)
(1). Copy "jsfiledeps.properties" of your current build to `MSTRWeb\tool`
(2). cd to `MSTRWeb\tool`, run `convertDeps.js`, generating latest "test-main.js", it will appear under "VizUnitTest\"
```
$ node convertDeps.js
```
#####4. Install all the plugins
Use "Node.js command prompt", run
```
$ npm install
```
#####5. Install Karma in global environment
```
$ npm install -g karma-cli
```
Then, you can run karma simply by command "karma start" from anywhere and it will always run the local version.
#####6. Run unit test
```
$ karma start
```
If failed, please try to install all the plugins in global environment:
```
$ npm install -g karma mocha karma-mocha karma-chai karma-chrome-launcher karma-phantomjs-launcher karma-coverage requirejs karma-requirejs
```
(PS: Setting system proxy may cause fail.)
####How to write Unit Test cases
- Test file should be named as ****_test.js**
- All the test file are under `test\` folder, and their structure should be the same as mojo code. 
For example:
GMUtility.js is located in `MSTRWeb\javascript\mojo\js\source\gm`
GMUtility_test.js is located in `test\mojo\js\source\gm`


Mocha: http://mochajs.org/
Chai.js: http://chaijs.com/