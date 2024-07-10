var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/register', function (req, res, next) {
  res.render("register");
});
router.post('/register', function (req, res, next) {

  res.redirect("/");
});

router.get('/login/', function (req, res, next) {
  res.render("login.ejs");
});
module.exports = router;
