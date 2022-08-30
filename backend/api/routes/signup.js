var express = require('express');
var router = express.Router();
var flash = require('express-flash');
var session = require('express-session');
var db = require('../database/database');

router.use(session({ 
  secret: '123456catr',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

router.use(flash());

router.post('/submit', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  console.log(req.body)
  var sql = `INSERT INTO accounts (username, password) VALUES ("${username}", "${password}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('http://192.168.65.1:3000/submitted');
  });
});

module.exports = router;