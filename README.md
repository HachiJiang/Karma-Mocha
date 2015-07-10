####Set up Karma+Mocha to start Unit Test for Mojo
#####1. Install Node.js https://nodejs.org/ 
For Windows, click "Install" directly.
#####2. Prepare configuration files
Copy all the folders and files from  `\\chn-hojiang\WebAutomation\UnitTest\VizUnitTest` to `Z:\BIWebApp`
#####3. Configure RequireJS for loading Mojo (optional)
(1). Copy latest "jsfiledeps.properties" to `Z:\BIWebApp\tool`
(2). Use nodejs to run "Z:\BIWebApp\tool\convertDeps.js", generating latest "test-main.js"
(3). Use "Node.js command prompt", cd to `Z:\BIWebApp`
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
If it failed, please try to install all the plugins in global environment:
```
$ npm install -g karma mocha karma-mocha karma-chai karma-chrome-launcher karma-phantomjs-launcher karma-coverage requirejs karma-requirejs
```

####How to write Unit Test cases
Mocha: http://mochajs.org/
Chai.js: http://chaijs.com/
