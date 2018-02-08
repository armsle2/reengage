var express = require('express');
var router = express.Router();
const db = require('../../models');

//GET all customers
router.get('/', function(req, res) {
  db.Customer.find()
  .then(dbCustomers => res.json(dbCustomers))
  .catch(err => res.json(err))
});

//create customer
router.post('/new', function(req, res) {
  db.Customer.create(req.body)
  .then(dbCustomer => res.json(dbCustomer))
  .catch(err => res.json(err))
});

//view Customer info
router.get("/:userName/", function(req, res){
  db.Customer.findOne({ userName: req.params.userName })
  	.populate('rewards')
  	.populate('surveys')
    .then(dbUserRewards => res.json(dbUserRewards))
    .catch(err => res.json(err));
});

//add customer to customersCompleted field - YOU ALREADY KNOW WHAT IM GONNA SAY!
router.post('/:customerId/:surveyId', function(req, res){
  db.Survey.findOne({_id: req.params.surveyId}).then(dbSurvey => {
  	dbSurvey.customersPending.forEach((customerId, index) => {
  		if (customerId == req.params.customerId){
  			db.Survey.updateOne({_id: req.params.surveyId}, {$push: {customersCompleted: req.params.customerId}})
  			.then(dbCustomerComplete => res.json(dbCustomerComplete))
  			.catch(err => res.json(err))
  		}
  	})
  }).catch(err => res.json(err));
})

// remove them from customersPending field - OH YEA BY THE WAY, THIS ONE WORKS TOO!
router.post('/:customerId/:surveyId/remove', function(req, res){
  db.Survey.findOne({_id: req.params.surveyId}).then(dbSurvey => {
  	dbSurvey.customersPending.forEach((customerId, index) => {
  		if (customerId == req.params.customerId){
  			db.Survey.updateOne({_id: req.params.surveyId}, {$pull: {customersPending: {$in: [req.params.customerId]}}})
  			.then(dbRemoveCustomer => res.json(dbRemoveCustomer))
  			.catch(err => res.json(err))
  		}
  	})
  }).catch(err => res.json(err))
})

module.exports = router;
