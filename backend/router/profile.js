const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const profile = require("../controller/profile");

router.post("/save", auth.validate, profile.save);
router.get("/get", auth.validate, profile.getProfile);

module.exports = router;
