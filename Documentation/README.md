# NDIRA-QA PROJECT SETUP
0. Run: npm install
1. Work code through nodemon http://hardcoded.se/2014/06/16/getting-webstorm-to-use-nodemon/ *live node module reload on change, **NB**
2. Have mongoDB installed and working on default port
3. Run: npm install -g webdriver-manager
4. Run: webdriver-manager update
5. Run: webdriver-manager start

# IMPORTANT (familiarise yourself with the libraries used here and the project structure)
0. Core system components are:
    - Selenium (browser based testing/ black box testing)
    - Mongoose (for DB modelling)  *Made available as global.mongoose and global.schema in app.js*
    - Other libraries: such as async, moment, request, node-cron and etc. are used in project where and when required
    
1. Framework is structured with folder per system domain (think MVC with no view):
    - [configs] are configurations *ENV dependent, mostly loaded/ used in app.js 
    - [cronjobs] for cron jobs that are automatically loaded and run
    - [mocks] are mock data (used for demos/ tests
    - [models] are mongoose data models
    - [scripts] is for scripts that are used directly by developers
    - [tests] is for test script (using Chai, Should and Supertest as they are newrelic compatible)
    - [utilities] are functions/ abstracts that would be common/ shared by many applications: controllers/ scripts/ services use them
    
2. Globals declared in app: 
    - mongoose (mongoose)
    - schema (mongoose schema)
    - cron (node-cron) 
    - ENV

3. Naming convention:
    - Folders are lowercase i.e. configs
    - Files are Caps Camel Case i.e. User or UserAuthentication
    - Functions are Camel Case  *descriptive on action i.e. updateTicket or getUserById
    - Variables are Camel Case i.e. user or userName
    - Constants are uppercase i.e. ENV

4. This project uses git flow as branching stategy

5. Avoiding the structure/ framework debate:
    - If you feel strongly about some aspect or see a way to improve it, then discuss or change and discuss post fact

6. Environments: we have development, qa and production (SET PER http://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x )