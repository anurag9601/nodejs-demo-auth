const express = require("express");
const router = express.Router();
const {
  handleCreatingNewUser,
  handleLoginCheck,
} = require("../controllers/user.js");

router.post("/signin", handleCreatingNewUser);

router.post("/login", handleLoginCheck);

module.exports = router;
