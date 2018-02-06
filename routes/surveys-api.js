var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/surveys', function(req, res) {
  res.send('surveys')
});

module.exports = router;
