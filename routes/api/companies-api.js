import functions from '../../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/lodash-es/functions';

var express = require('express');
var router = express.Router();
const db = require('../../models');

/* GET home page. */
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

router.get('/:id', function(req, res) {
  db.Company.findOne({_id: req.params.id})
  .populate('surveys')
  .then(function(dbComapny) {
    res.json(dbComapny)
  })
  .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
  });
});

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


//create a survey /api/companies/survey/:id 
router.post('/survey/:id', function(req, res){
  db.Survey.create(req.body)
    .then(function(dbSurvey){
      return db.Company.updateOne({ _id: req.params.id }, { $push: {surveys: dbSurvey._id, }});
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

//create a survey /api/companies/reward/:id 
router.post('/reward/:id', function(req, res){
  db.Reward.create(req.body)
    .then(function(dbReward){
      return db.Company.updateOne({ _id: req.params.id }, { $push: {rewards: dbReward._id, }})
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
