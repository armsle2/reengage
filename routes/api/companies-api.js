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
router.post('/:companyId/reward', function(req, res){
  db.Reward.create(req.body)
    .then(function(dbReward){
      return db.Company.updateOne({ _id: req.params.companyId }, { $push: {rewards: dbReward._id}})
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

//add customer who hasn't completed survey to customersPending field on survey document - THIS WORKS TOO!!
router.post('/:companyId/:customerId/pending-survey', function(req, res){
  db.Company.findOne({_id: req.params.companyId}).then(dbCompany => {
    db.Survey.updateOne({_id: dbCompany.activeSurvey}, {$push: {customersPending: req.params.customerId}})
    .then(customersAdded => console.log('customer has been added to the pending list'))
    .catch(err => console.log(err))
    db.Customer.updateOne({_id: req.params.customerId}, {$push: {surveys: dbCompany.activeSurvey}})
    .then(surveyAddedToCustomer => console.log(surveyAddedToCustomer))
    .catch(err => console.log(err))
  }).then(dbCustomerPending => res.json(dbCustomerPending))
    .catch(err => res.json(err))
})



module.exports = router;
