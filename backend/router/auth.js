const express = require("express");
const router = express.Router();
const auth = require("../controller/auth");
router.get("/", auth.test);
router.post("/login", auth.login);
router.post("/register", auth.register);

module.exports = router;
