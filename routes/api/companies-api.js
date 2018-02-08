var express = require('express');
var router = express.Router();
const db = require('../../models');

//view all companies
router.get('/', function(req, res) {
  db.Company.find()
    .then(function(dbComapny) {
      res.json(dbComapny);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//view company info with associated surveys and rewards
router.get('/:id', function(req, res) {
  db.Company.findOne({_id: req.params.id})
  .populate('surveys')
  .populate('rewards')
  .then(function(dbCompanyInfo) {
    res.json(dbCompanyInfo)
  })
  .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
  });
});


//create a new company
router.post('/new', function(req, res){
  db.Company.create(req.body)
    .then(function(dbComapny) {
      res.json(dbComapny);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


//create a survey and push it to specific company document
router.post('/:companyID/survey', function(req, res){
  db.Survey.create(req.body)
    .then(function(dbSurvey){
      return db.Company.updateOne({ _id: req.params.companyID }, { $push: {surveys: dbSurvey._id, }});
    })
    .then(function(dbComapny) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbComapny);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//create a reward and push it to specific company document
router.post('/:companyID/reward', function(req, res){
  db.Reward.create(req.body)
    .then(function(dbReward){
      return db.Company.updateOne({ _id: req.params.companyID }, { $push: {rewards: dbReward._id, }})
    })
    .then(function(dbComapny) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbComapny);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


module.exports = router;
