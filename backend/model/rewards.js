const mongoose = require("mongoose");
const { stringify } = require("uuid");

const rewards = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  hints: Number,
  highScoreResult: Number,
  diamonds: String,
});

module.exports = mongoose.model("rewards", rewards);
