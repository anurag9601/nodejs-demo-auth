const urlMongoose = require("../models/url.js");
const shortID = require("shortid");

async function handleAllUrlViewPage(req, res) {
  const allData = await urlMongoose.find({});
  try {
    res.render("home.ejs", {
      urls: allData,
    });
  } catch (err) {
    res.end("Error: ", err);
  }
}

async function handleNewPostEntry(req, res) {
  const shortid = shortID();
  const url = req.body.url;

  const newEntry = urlMongoose.create({
    shortURL: shortid,
    redirectURL: url,
    visitList: [],
  });
  return res.render("home.ejs", {
    id: shortid,
  });
}

async function handleRedirectVisitsUrl(req, res) {
  const shortid = req.params.shortid;
  const currentURL = await urlMongoose.findOneAndUpdate(
    {
      shortURL: shortid,
    },
    {
      $push: {
        visitList: {
          time: Date.now(),
        },
      },
    }
  );
  // console.log(currentURL)
  return res.redirect(currentURL.redirectURL);
}

module.exports = {
  handleAllUrlViewPage,
  handleNewPostEntry,
  handleRedirectVisitsUrl,
};
