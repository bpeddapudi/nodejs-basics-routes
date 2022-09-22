You need Node js installed
Reference: https://www.youtube.com/watch?v=SccSCuHhOw0
#### Initializing a node js project

`npm init -y`
-y is to skip few initial project setup question. Please remove -y and type 'npm init' if you want to see all the project setup questions
Documentation on basics of node and what is -y: https://www.vultr.com/docs/how-to-use-the-node-package-manager-npm-on-windows/#:~:text=The%20npm%20init%20command%20is,be%20stored%20in%20the%20package.

`npm i express`

`npm i --save-dev nodemon`

update your script code in package.json with below
note: there is no server.js yet in our project we will create it in the next step

```
"scripts": {
   "devStart": "nodemon server.js"
}
```

Create server.js under your project folder. You can name the file what ever you want, just update the package.json devStart script with respective js file name.

Start your server by running 'npm run devStart'

---

`console.log('something');`

when you enter some console.log in server.js and save it, you need to see the logs getting printed in your terminal automatically. This is due to nodemon

Add below code to initialize your react app.
```
const express = require('express');
const app = express();

app.listen(3000);
```

Cannot GET /
You initialized an app but no routes are defined.


---
## GET request
sending the response.
`res.send('Whats uppp!!!!!');`

sending the response code.
`res.sendStatus(500);`
10 Basic Error status codes:
https://www.moesif.com/blog/technical/monitoring/10-Error-Status-Codes-When-Building-APIs-For-The-First-Time-And-How-To-Fix-Them/

Chaining status with response.send
`res.status(500).send('Whats uppp!!!!!');`

Chaining status with json response
```
res.status(500).json({
        message: 'There is an internal server error. Something got screwed up in the Backend.'
});
```

```
res.json({
        message: 'There is an internal server error. Something got screwed up in the Backend.'
});
```

## Other Response options
Downloading a file
`res.download('server.js')`

Render a file
Create a folder views under your project. Add index.html
`res.render('./views/index');`

View Engine - ejs is your templating engine
`npm i ejs`

Add ejs to your code
```
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log('GET /');
    res.render('index');
});

app.listen(3001);
```
Rename index.html to index.ejs

Passing a variable:
`res.render('index', { text: 'world!!!'});`

Passing undefined variable:
`res.render('index', { text123: 'world!!!'});`

Multiple Routes:
- In the same app file
- seperate router file - refer routes/users.js








#### Day 02

# Dynamic Parameters in GET
```
app.get('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});

app.put('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});

app.delete('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});

app.post('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});
```
------------------------------------------------------------

### Student app

# Setup - react app
Download the react app from this repo and get started.
https://github.com/bpeddapudi/Studentapp-react

# Setup - Node app
https://github.com/bpeddapudi/nodejs-basics-routes

# POST request - Add new student
Once you fill and submit the form data has to be sent to Node JS server via POST

CORS error
https://expressjs.com/en/resources/middleware/cors.html

Response: send the same student data back. Access the data from req Obj
Goal: Teach students how data is sent from Front end to Back end. Later we will save data in mongo db atlas

# GET request - Add new Student
Send a get request to Node JS app and return some dummy json data for now from Node server

# PUT
Explalin where we would use PUT request which is to edit student's information in the table.
Sent put request to Node and return same data as response from Node for now

# DELETE
Explalin where we would use DELETE request which is to delete student's information in the table.
Sent DELETE request to Node and return success message in response







#### Pending Itesm which are not covered
# Chaining put, post and delete
```
app.get('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});
app.put('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("PUT request with ID:" + USER_ID);
});
app.delete('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("DELETE request with ID:" + USER_ID);
});

```

----
```
app.get('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});
app.put('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("PUT request with ID:" + USER_ID);
});
app.delete('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("DELETE request with ID:" + USER_ID);
});

```

```
app.get('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
}).put('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("PUT request with ID:" + USER_ID);
}).delete('users/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("DELETE request with ID:" + USER_ID);
});
```
## Adding gitignore
