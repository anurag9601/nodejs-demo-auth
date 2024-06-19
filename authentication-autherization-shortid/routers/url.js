const express = require("express");
const router = express.Router();
const {
  handleAllUrlViewPage,
  handleNewPostEntry,
  handleRedirectVisitsUrl,
} = require("../controllers/url.js");

router.get("/", handleAllUrlViewPage);

router.post("/generate", handleNewPostEntry);

router.get("/:shortid", handleRedirectVisitsUrl);

module.exports = router;
