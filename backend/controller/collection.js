require("dotenv").config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;

var MongoClient = require("mongodb").MongoClient;
const dbURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}.h6npx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

exports.getProfiles = (req, res) => {
  MongoClient.connect(dbURI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("myFirstDatabase");
    var query = {};
    dbo
      .collection("profiles")
      .find(query)
      .toArray(function (err, result) {
        if (err) {
          throw err;
        } else {
          res.status(200).json({
            status: "success",
            msg: "The collection data is ready!",
            data: result,
          });
          console.log("collection profiles results:", result);
          db.close();
        }
      });
  });
};

exports.getRewards = (req, res) => {
  MongoClient.connect(dbURI, function (err, db) {
    if (err) throw err;
    var dbo = db.db("myFirstDatabase");
    var query = {};
    dbo
      .collection("rewards")
      .find(query)
      .toArray(function (err, result) {
        if (err) {
          throw err;
        } else {
          res.status(200).json({
            status: "success",
            msg: "The collection data is ready!",
            data: result,
          });
          console.log("collection rewards results:", result);
          db.close();
        }
      });
  });
};
