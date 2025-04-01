var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    })
});


router.get('/:id', function (req, res, next) {
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    })
});

module.exports = router; 