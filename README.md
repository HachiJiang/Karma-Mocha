### Using Karma+Mocha to start Unit Test for Mojo

####Set up Test Framework
#####1. Install Node.js https://nodejs.org/ 
For Windows, click "Install" directly.
#####2. Install Karma & Mocha
Open command window "Node.js command prompt"
```
$ npm install -g karma mocha
```
#####3. InstalL all the plugins
```
$ npm install -g karma-mocha karma-chai karma-chrome-launcher karma-phantomjs-launcher karma-coverage requirejs karma-requirejs
```
#####4. Prepare configuration files
Copy all the folders and files from  `\\chn-hojiang\WebAutomation\UnitTest\VizUnitTest` to `Z:\BIWebApp`

#####5. Configure RequireJS for loading Mojo (optional)
(1). Copy latest "jsfiledeps.properties" to `Z:\BIWebApp\tool`
(2). Use nodejs to run "Z:\BIWebApp\tool\convertDeps.js", generating latest "test-main.js"

#####6. Run unit test
Use "Node.js command prompt", cd to `Z:\BIWebApp`
```
$ Z:\BIWebApp>karma start
```
####How to write Unit Test cases
Mocha: http://mochajs.org/
Chai.js: http://chaijs.com/
