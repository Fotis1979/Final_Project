// // Step 5 - set up multer for storing uploaded files
// const avatarModel = require("../model/avatar");
// var multer = require("multer");
// const path = require("path");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });
// // Step 7 - the GET request handler that provides the HTML UI

// exports.get = (req, res) => {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred", err);
//     } else {
//       res.render("imagesPage", { items: items });
//     }
//   });
// };
