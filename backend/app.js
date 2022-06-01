const express = require("express");
const app = express();
const public = require("./router/public");
const auth = require("./router/auth");
const path = require("path");
const db = require("./config/db");
const profile = require("./router/profile");
const rewards = require("./router/rewards");
const avatar = require("./router/avatar");
const collection = require("./router/collection");
require("dotenv").config();
app.use(express.json());
db();
//console.log(db.profiles.find());
const port = 8080;
//process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));
let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
};

//console.log(db.getCollectionNames());
// for (var i = 0; i < collections.length; i++) {
//   print("Collection: " + collections[i]); // print the name of each collection
//   db.getCollection(collections[i]).find().forEach(printjson); //and then print the json of each of its elements
// }

app.use(allowCrossDomain);

app.use("/", public);
app.use("/auth", auth);
app.use("/profile", profile);
app.use("/rewards", rewards);
app.use("/collection", collection);
// app.use("/avatar", avatar);

app.listen(port, () => console.log(`server is listening to port ${port}`));
