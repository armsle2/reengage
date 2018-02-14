var express = require('express');
var router = express.Router();
const db = require('../../models');

//GET all rewards
router.get('/', function(req, res) {
  db.Reward.find()
  .populate('customers')
  .populate('company')
  .then((dbRewards) => res.json(dbRewards))
  .catch((err) => console.log(err))
});

//GET specific rewards
router.get('/:id', function(req, res) {
  db.Reward.findOne({_id: req.params.id})
  .populate('customers')
  .populate('company')
  .then((dbRewards) => res.json(dbRewards))
  .catch((err) => console.log(err))
});



module.exports = router;
