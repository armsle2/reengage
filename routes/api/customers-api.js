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
router.post('/:customerId/:surveyId/completed', function(req, res){
	const customerId = req.params.customerId;
	const surveyId = req.params.surveyId;
	const surveyFeedback = req.body.feedback;
  db.Survey.findOne({_id: surveyId}).then(dbSurvey => {
  	if(dbSurvey.customersPending.length > 0){
	  	dbSurvey.customersPending.forEach((surveyCustomerId, index) => {
	  		if (surveyCustomerId == customerId){
	  			db.Survey.updateOne({_id: surveyId}, {
	  				$push: {customersCompleted: customerId, feedback: surveyFeedback}, 
	  				$pull: {customersPending: {$in: [customerId]}}
	  			})
	  			.then(dbUpdatedSurvey => console.log('Survey Document Updated!'))
	  			.catch(err => console.log(err))
	  			db.Reward.updateOne({_id: dbSurvey.reward}, {$push: {customers: customerId}})
	  			.then(dbRewardUpdated => console.log('Reward Document Updated!'))
	  			.catch(err => console.log(err))
	  			db.Customer.updateOne({_id: customerId}, {$push: {rewards: dbSurvey.reward}})
	  			.then(dbCustomerComplete => res.json(dbCustomerComplete))
	  			.catch(err => res.json(err))
	  		}
	  	})
	}else{
		res.json('no customers pending')
	}
  }).catch(err => res.json(err));
})

module.exports = router;
