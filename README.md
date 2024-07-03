# j1explorers-backend


1. To install application, open the terminal and go into the given code's root directory and execute below command
```
npm install
```

2. Create a database with name ***`j1explorers`*** in MySQL

3. Run migrate:up command to create tables
```
npm run migrate:up
```

4. Start the API Server
```
npm start
```

5. This will start the API server on port defined in ***`/config/index.js`*** file (Default: ***3000***). Once the API server is started you will get the below message in your terminal console, this means your API server is started successfully.
```
Listening at "http://localhost:3000"
```

6. Now access below URL from your browser to test if your API is working or not
```
http://localhost:3000/api/test?name=goldenfinix68
```

7. If you see ***`Hello goldenfinix68`*** it means you are ready to go code...
