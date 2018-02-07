const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  companyName: {
    type: String,
    unique: true
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  activeSurvey: String,
  // `date` must be of type Date. The default value is the current date
  companyCreated: {
    type: Date,
    default: Date.now
  },
  //rewards are defaulted to completed false and 
  surveys: [
    {
      type: Schema.Types.ObjectId,
      ref: "Survey"
    }
  ],
  rewards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Survey"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
const Company = mongoose.model("Company", CompanySchema);

// Export the Business model
module.exports = Company;
