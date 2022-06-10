const mongoose = require("mongoose");

const profiles = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  userName: String,
  birthDate: Number,
  avatarName: String,
  hints: Number,
  highScoreResult: Number,
  diamonds: Number,
});

module.exports = mongoose.model("profiles", profiles);
