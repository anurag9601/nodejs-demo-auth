const userMongoose = require("../models/user.js");
const {v4 : uuidv4} = require('uuid');
const { setUser } = require("../services/auth.js");

async function handleCreatingNewUser(req, res) {
  const { name, email, password } = req.body;
  const newUser = await userMongoose.create({
    name,
    email,
    password,
  });
  return res.render("login.ejs");
}

async function handleLoginCheck(req, res) {
  const { email, password } = req.body;
  const findUser = await userMongoose.findOne({ email, password });
  if (!findUser) {
    return res.render("login.ejs", { msg: "Invalid user or password" });
  }
  const sessionId = uuidv4();

  res.cookie("uuid", sessionId);
  setUser(sessionId , findUser);
  return res.redirect("/url/");
}

module.exports = {
  handleCreatingNewUser,
  handleLoginCheck,
};
