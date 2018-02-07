var express = require('express');
var router = express.Router();
const db = require('../../models');

/* GET home page. */
router.get('/', function(req, res) {
  db.User.find()
  .then(dbUsers => {
  	res.json(dbUsers)
  })
  .catch(err => {
  	res.json(err)
  })
});

router.post('/:id', function(req, res) {
  db.User.find()
  .then(dbUsers => {
  	res.json(dbUsers)
  })
  .catch(err => {
  	res.json(err)
  })
});


module.exports = router;
