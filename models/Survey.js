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
  customersCompleted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  customersPending: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  reward:{
    type: Schema.Types.ObjectId,
    ref: "Rewards"
  }
});

const Survey = mongoose.model("Survey", SurveySchema);

module.exports = Survey;

