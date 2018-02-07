const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/engage"
);

const companySeed = [
  {
    companyCreated: "2018-02-06T19:24:32.468Z",
    surveys: [],
    companyName: "Jarboe Studios",
    email: "contact@jarboestudios.com",
    password: "1234567",
    activeSurvey: '',
    rewards: []
  }
];

let surveySeed = [
    {
      questions : [ 
          "How was the food?", 
          "how was the cashier?", 
          "how was the waite?"
      ],
      feedback : [],
      title : "Awesome survey!",
      description : "You get a 5% discpount when completed!!!",
      customersCompleted: [],
      customersPending: [],
      reward: ''
  }
];

const customerSeed = [
  {
    customerName : 'jarboe_the_great',
    email : 'jarboe@jarboestudios.com',
    password : "password",
    phoneNumber : '5557778888',
    surveys: [],
    customerCreated: "2018-02-06T19:30:13.078Z"
  }
];

const rewardSeed = [
  {
    title : '50% off sub',
    description : 'BOGO off 50%',
    customers : [],
    company : '',
    surveys: [],
    rewardCreated: "2018-02-06T19:30:13.078Z"
  }
];

db.Customer
  .remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.insertedCount + " inserted into customer collection!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

let companyId;
db.Company
  .remove({})
  .then(() => db.Company.collection.insertMany(companySeed))
  .then(data => {
    bizId = data.ops[0]._id
    console.log(data.insertedCount + " inserted into company collection!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Reward
  .remove({})
  .then(() => db.Reward.create(rewardSeed))
    .then((dbReward) => {
      surveySeed.reward = dbReward._id;
      console.log(dbReward.length + " inserted into Reward collection!");
    }).catch((err) => {
      console.log(err);
      process.exit(1);
    });

db.Survey
  .remove({})
  .then(() => db.Survey.create(surveySeed))
    .then((dbSurvey) => {
      console.log(dbSurvey.length + " inserted into Survey collection!");
      return db.Company.updateOne({_id: companyId}, {$push: {surveys: db.survey[0]._id}})
    })
    .then(function(dbcompany) {
      // If we were able to successfully update an Article, send it back to the client
      console.log("Company collection updated!");
      
    })
    .catch(function(err) {
      console.error(err);
      process.exit(1);
    });
