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

//attach survey to Customer
// router.post("/:businessId/:CustomerName/:surveyId", function(req, res){
//   db.Business.findOne({_id: req.params.businessId})
//     .then(function(dbBusiness){
//       return db.Customer.updateOne({ CustomerName: req.params.CustomerName }, { $push: {rewards: req.params.surveyId }});
//     }).then((dbCustomer) => {
//     	res.json(dbCustomer)
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

//view Customer rewards
router.get("/:userName/:surveyId", function(req, res){
  db.Customer.findOne({ userName: req.params.userName })
  	.populate('rewards')
    .then(dbUserRewards => res.json(dbUserRewards))
    .catch(err => res.json(err));
});

module.exports = router;
