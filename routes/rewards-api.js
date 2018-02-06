var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/rewards', function(req, res) {
  res.send('rewards')
});

module.exports = router;
