const express = require("express");
const router = express.Router();

const public = require("../controller/public");

//router.get('/', public.main);

router.get("/about", public.about);

router.get("/contact", public.contact);

module.exports = router;
