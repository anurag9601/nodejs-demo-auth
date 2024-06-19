//now static is the tearm we use to locate that this is of frontend like these routes

const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => {
  return res.render("signin.ejs");
});

router.get("/login", (req, res) => {
  return res.render("login.ejs");
});

module.exports = router;
