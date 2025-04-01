var express = require('express');
var router = express.Router();
const isAuthenticated = false

router.all('*', (req, res, next) => {
    if (isAuthenticated) {
        next()
    }
    else {
        res.json({ message: 'You are not authenticated', success: false })
    }
})


router.get('/', function (req, res, next) {
    res.send('my categories endpoint');
});

module.exports = router;
