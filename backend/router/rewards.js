const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const rewards = require("../controller/rewards");

router.post("/save", auth.validate, rewards.save);
router.get("/get", auth.validate, rewards.getRewards);

module.exports = router;
