const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  userName: {
    type: String,
    unique: true,
    required:true
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
    required:true    
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
  phoneNumber: {
    type: String,
    minlength: 10,
    maxlength: 11
  },
  // `date` must be of type Date. The default value is the current date
  customerCreated: {
    type: Date,
    default: Date.now
  },
  surveys: [
    { 
      type: Schema.Types.ObjectId,
      ref: "Survey"
    }
  ],
});

// This creates our model from the above schema, using mongoose's model method
const Customer = mongoose.model("Customer", CustomerSchema);

// Export the Customer model
module.exports = Customer;
