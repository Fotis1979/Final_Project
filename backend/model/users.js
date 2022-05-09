const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  pass: String,
});
module.exports = mongoose.model("users", users);
