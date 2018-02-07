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

//attach survey to user
router.post("/:businessId/:userName/:surveyId", function(req, res){
  db.Business.findOne({_id: req.params.businessId})
    .then(function(dbBusiness){
      return db.User.updateOne({ userName: req.params.userName }, { $push: {rewards: req.params.surveyId }});
    }).then((dbUser) => {
    	res.json(dbUser)
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//view user and rewards info
router.get("/:businessId/:userName/:surveyId", function(req, res){
  db.Business.findOne({_id: req.params.businessId})
    .then(function(dbBusiness){
      return db.User.updateOne({ userName: req.params.userName }, { $push: {rewards: req.params.surveyId }});
    }).then((dbUser) => {
    	res.json(dbUser)
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports = router;
