var express = require('express');
var router = express.Router();
const db = require('../../models');
/* GET users listing. */
router.get('/', function(req, res) {
  db.Reward.find()
  .then((dbRewards) => res.json(dbRewards))
  .catch((err) => console.log(err))
});



module.exports = router;
