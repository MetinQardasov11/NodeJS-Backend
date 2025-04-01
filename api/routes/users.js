var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('my users endpoint');
});

module.exports = router;
