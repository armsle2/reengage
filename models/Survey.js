const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  questions:[],
  active: true
});

// This creates our model from the above schema, using mongoose's model method
const Survey = mongoose.model("Survey", SurveySchema);

// Export the Survey model
module.exports = Survey;
