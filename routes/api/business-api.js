var express = require('express');
var router = express.Router();
const db = require('../../models');

/* GET home page. */
router.get('/', function(req, res) {
  db.Business.find()
    .then(function(dbBusiness) {
      res.json(dbBusiness);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

router.post('/new', function(req, res){
  db.Business.create(req.body)
    .then(function(dbBusiness) {
      res.json(dbBusiness);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


//create a survey
router.post("/:id", function(req, res){
  db.Survey.create(req.body)
    .then(function(dbSurvey){
      return db.Business.updateOne({ _id: req.params.id }, { $push: {surveys: dbSurvey._id, }});
    })
    .then(function(dbBusiness) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbBusiness);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;
