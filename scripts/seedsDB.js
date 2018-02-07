const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/engage"
);

const businessSeed = [
  {
    businessCreated: "2018-02-06T19:24:32.468Z",
    surveys: [
    "5a7a0a80224e0d304c3b16cc"
    ],
    _id: "5a7a00f0efa6d009c8b6815b",
    businessName: "Jarboe Studios",
    email: "contact@jarboestudios.com",
    password: "1234567"
  },
  {
    businessCreated: "2018-02-06T19:30:13.078Z",
    surveys: [ ],
    _id: "5a7a0245efa6d009c8b6815d",
    businessName: "random ",
    email: "random@jarboestudios.com",
    password: "123456"
  }
];

const surveySeed = [
    {
      _id : "5a7a0a80224e0d304c3b16cc",
      questions : [ 
          "How was the food?", 
          "how was the cashier?", 
          "how was the waite?"
      ],
      feedback : [],
      title : "Awesome survey!",
      description : "You get a 5% discpount when compleated!!!"
  }
];

const userSeed = [
  {
    _id: '5a7a930cf2630246217ba6d0',
    userName : 'jarboe_the_great',
    email : 'jarboe@jarboestudios.com',
    password : "password",
    phoneNumber : '5557778888',
    rewards: [],
    userCreated: "2018-02-06T19:30:13.078Z"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Survey
  .remove({})
  .then(() => db.Survey.collection.insertMany(surveySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
db.Business
  .remove({})
  .then(() => db.Business.collection.insertMany(businessSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
