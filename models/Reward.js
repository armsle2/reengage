const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RewardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Customer"
    }
  ],
  company:{
      type: Schema.Types.ObjectId,
      ref: "Company"
    },
  rewardCreated: {
    type: Date,
    default: Date.now
  }
});

const Reward = mongoose.model("Reward", RewardSchema);

module.exports = Reward;

