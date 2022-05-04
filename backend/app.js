const express = require("express");
const app = express();
const public = require("./router/public");
const auth = require("./router/auth");
const db = require("./config/db");
require("dotenv").config();
app.use(express.json());
db();
const port = process.env.PORT || 3000;

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
};

app.use(allowCrossDomain);

app.use("/", public);
app.use("/auth", auth);

app.listen(port, () => console.log(`server is listening to port ${port}`));
