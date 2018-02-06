const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
  type: business,
  businessName: {
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
  // `date` must be of type Date. The default value is the current date
  businessCreated: {
    type: Date,
    default: Date.now
  },
  //rewards are defaulted to completed false and 
  survey: [
    {
      type: Schema.Types.ObjectId,
      ref: "Survey",
      active: false
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
const Business = mongoose.model("Business", BusinessSchema);

// Export the Business model
module.exports = Business;
