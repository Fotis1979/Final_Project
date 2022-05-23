const mongoose = require("mongoose");
const { stringify } = require("uuid");

const rewards = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  Hints: String,
  HeighScore: String,
  Diamonds: String,
});

module.exports = mongoose.model("rewards", rewards);
