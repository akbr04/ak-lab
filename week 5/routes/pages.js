const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('INDEX');
});

router.get('/register', (req, res) => {
    res.render('REGISTER');
});

router.get('/login', (req, res) => {
    res.render('LOGIN');
});

module.exports = router;
