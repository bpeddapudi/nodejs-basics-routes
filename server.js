const express = require('express');
const app = express();

app.get('students/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("Get request with ID:" + USER_ID);
});

app.put('students/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("PUT request with ID:" + USER_ID);
});

app.delete('students/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("DELETE request with ID:" + USER_ID);
});

app.post('students/:id', (req, res) => {
    const USER_ID = req.params.id;
    res.send("POST request with ID:" + USER_ID);
});

app.listen(3001);