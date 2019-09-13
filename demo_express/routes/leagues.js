var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('leagues', { title: 'Leagues' });
});

/* GET users listing. */
router.get('/data', function(req, res, next) {
    res.end(fs.readFileSync('./data/leagues.json'));
  });

module.exports = router;
