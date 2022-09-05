var express = require('express');
var router = express.Router();
var db = require('../database/database');
var session = require('express-session');
const bcrypt = require("bcrypt");

router.use(session({ 
  secret: 'login!@#Sessefi2398',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


router.post('/submit', (req, res) => {
  // res.send("Successful");
  var username = req.body.username;
  var password = req.body.password;
  
  var sql = `SELECT username FROM accounts`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    var exists = false;
    for(const row of result){
      const existingUsername = row.username;
      if(existingUsername === username){
        exists = true;
        var sql = `SELECT password FROM accounts WHERE username = "${username}"`;
        db.query(sql, function(err, result) {
          const validPassword = bcrypt.compare(result[0].password);
          if(validPassword){
            res.send("Successful");
          }else{
            res.send("Unsuccessful")
          }
        })
        break;
      }
    }
  })
})

module.exports = router;