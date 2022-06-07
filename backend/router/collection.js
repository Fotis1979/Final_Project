const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const collection = require("../controller/collection");

//router.post("/save", collection.update);
router.get("/Profiles", collection.getProfiles);
router.get("/Rewards", collection.getRewards);

module.exports = router;
