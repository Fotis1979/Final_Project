const mongoose = require("mongoose");

const profiles = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
  name: String,
  birthDate: Number,
  // avatarName: String,
});

module.exports = mongoose.model("profiles", profiles);