var express = require('express');
var router = express.Router();

router.post('/submit', (req, res) => {
  res.redirect('http://192.168.65.1:3000/login')
  console.log(req.body)
});

module.exports = router;