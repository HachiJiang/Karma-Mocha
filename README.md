####Set up Test Framework
#####1. Install Node.js https://nodejs.org/ 
For Windows, click "Install" directly.
#####2. Prepare configuration files
(1). Copy all the folders and files from  `\\chn-hojiang\WebAutomation\UnitTest\VizUnitTest` to your `BIWebApp\` folder.
(2). Generate "jsfiledeps.properties" of your current build.
I just copy this file from "C:\Program Files\Apache Software Foundation\Tomcat 6.0\webapps\MicroStrategy\WEB-INF\classes" folder, for SE, you can generate your own version.
#####3. Configure RequireJS for loading Mojo (optional)
(1). Copy "jsfiledeps.properties" of your current build to `BIWebApp\tool`
(2). Use nodejs to run "BIWebApp\tool\convertDeps.js", generating latest "test-main.js", it will appear under "BIWebApp\"
(3). Use "Node.js command prompt", cd to `BIWebApp\`
#####4. Install all the plugins
Open command window "Node.js command prompt", using Package.json
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
$ Z:\BIWebApp>karma start
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
GMUtility.js is located in `BIWebApp\code\html\MSTRWeb\javascript\mojo\js\source\gm`
GMUtility_test.js is located in `test\javascript\mojo\js\source\gm`


Mocha: http://mochajs.org/
Chai.js: http://chaijs.com/
