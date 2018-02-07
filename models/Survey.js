const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SurveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  questions: {
    type: [String],
    required: true
  },
  feedback: [],
  description:{
    type: String,
    required: true
  },
  completed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  reward:{
    type: String,
  }
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;

