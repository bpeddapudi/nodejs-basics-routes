const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user list');
});

router.get('/new', (req, res) => {
    res.send('new user');
});

module.exports = router;