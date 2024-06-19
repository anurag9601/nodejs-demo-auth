const { getUser } = require("../services/auth.js");

async function checkUserLogin(req, res, next) {
  const sessionId = req.cookies?.uuid;
  console.log(req)

  if (!sessionId) {
    return res.redirect("/login");
  }

  const user = getUser(sessionId);

  if (!user) {
    return res.redirect("/login");
  }

  req.user = user;
  next();
}

module.exports = { checkUserLogin };
