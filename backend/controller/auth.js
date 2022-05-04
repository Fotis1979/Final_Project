const users = require("../model/users");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;

exports.login = (req, res) => {
  //console.log(req.body);
  const { email, pass } = req.body;

  users.findOne({ email }, (err, doc) => {
    const response = {};
    if (err) {
      console.log(err);
      response.status = "fail";
      response.msg = `Oooops! There's an error please contact with support!`;
      res.status(503).send(response);
    } else {
      console.log(doc);
      if (doc) {
        if (bcrypt.compareSync(pass, doc.pass)) {
          //Correct password
          const token = jwt.sign(
            {
              msg: "Hello World!",
              foo: "moo",
              email: doc.email,
              userId: doc._id,
            },
            secretKey
          );
          console.log("token", token);
          response.status = "success";
          response.msg = `Authentication is success!`;
          response.token = token;
          res.status(200).send(response);
        } else {
          //Wrong password
          response.status = "fail";
          response.msg = `Wrong cridentials`;
          res.status(401).send(response);
        }
      } else {
        response.status = "fail";
        response.msg = `User is not registered`;
        res.status(401).send(response);
      }
    }
  });
};

exports.register = async (req, res) => {
  let { email, pass } = req.body;

  let userCheck = await users.findOne({ email: req.body.email });

  if (userCheck) {
    res.send("The user has registered already!");
  } else {
    bcrypt.hash(pass, saltRounds, function (err, hash) {
      if (err) {
        res.send(`Oooops! There's an error please contact with support!`);
      } else {
        pass = hash;
        const newUser = users({ email, pass });

        newUser.save((err, doc) => {
          if (err) {
            console.log(err);
            res.send(`Oooops! There's an error please contact with support!`);
          } else {
            console.log(doc);
            res.send(`${doc.email} is registered successfully!`);
          }
        });
      }
    });
  }
};
exports.test = (req, res) => res.send("Test is OK!");
