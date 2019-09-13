var express = require('express');
var router = express.Router();

var authorization = require('./../utils/auth');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/login', function(request, response) {
  // get user data from form
  var email = request.body.email;
  var password = request.body.password;
  if (authorization.auth.authorize(email, password)){
    response.redirect(200, "/leagues");
  } else {
    response.redirect(403, "/error");
  }
});

router.post('/register', function(request, response) {
    // get user data from form
    var email = request.body.email;
    var password = request.body.password;
    if (authorization.auth.authorize(email, password)){
      response.statusCode = 200;

    } else {
      response.statusCode = 403;
    }
    response.end();
});

module.exports = router;
