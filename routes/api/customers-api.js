var express = require('express');
var router = express.Router();
const db = require('../../models');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;



//Password check
router.post("/login", function(req, res){

	db.Customer.findOne({$or: [
	    {email: req.body.email},
	    {userName: req.body.userName}
	]})
	.then(dbCustomer => {
		const password = req.body.password;
		const hash = dbCustomer.password;
		console.log(hash);
		console.log(req.body);
		console.log("***************************");
		bcrypt.compare(password, dbCustomer.password, function(err, doesMatch){
			if (doesMatch){
				 //log him in
			 console.log(`match userID:`);
			 const token = jwt.sign({userID: dbCustomer._id},  process.env.SECRET, {expiresIn: 30});
			 res.json({ token: token, userId: dbCustomer._id });
			 
			}else{
				 //go away
			 console.log("DOES NOT match");
			}
		 });

	})
	.catch(err => res.json(err))
});

//GET all customers
router.get('/', function(req, res) {
  db.Customer.find()
  .then(dbCustomers => res.json(dbCustomers))
  .catch(err => res.json(err))
});

//create customer
router.post('/new', function(req, res) {
	bcrypt.genSalt(saltRounds, function(err, salt) {
	    bcrypt.hash(req.body.password, salt, function(err, hash) {
					// Store hash in your password DB.
					console.log("hash: "+hash);
					req.body.password = hash;
					console.log("req.body.password: "+req.body.password);
					db.Customer.create(req.body)
					.then(dbCustomer => res.json(dbCustomer))
					.catch(err => res.json(err))
	    });
	});
});

//view Customer info
router.get("/:id/", function(req, res){
  db.Customer.findOne({ _id: req.params.id })
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
	  			db.Customer.updateOne({_id: customerId}, {
	  				$push: {rewards: dbSurvey.reward},
	  				$pull: {surveys: {$in: [surveyId]}}
	  			})
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
