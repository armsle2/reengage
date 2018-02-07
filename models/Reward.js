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
  users: [
    {
      type: Schema.Type.ObjectId,
      ref: "User"
    }
  ],
  company:{
      type: Schema.Type.ObjectId,
      ref: "User"
    },
  rewardCreated: {
    type: Date,
    default: Date.now
  }
});

const Reward = mongoose.model("Reward", RewardSchema);

module.exports = Reward;

