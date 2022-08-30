var express = require('express');
var router = express.Router();

router.post('/submit', (req, res) => {
  res.send("sent")
  console.log(req.body)
});

module.exports = router;