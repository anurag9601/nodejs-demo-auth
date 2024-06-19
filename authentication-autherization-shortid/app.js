const mongoose = require("mongoose");
const express = require("express");
const url = "mongodb://localhost/auth-authri-shortid";
const PORT = 8001;

const urlRouter = require("./routers/url.js");
const staticRouter = require("./routers/staticRoute.js");
const userRouter = require("./routers/user.js");

//middlewares
const {checkUserLogin} = require("./authentication/auth.js");
const cookieParser = require("cookie-parser");

mongoose.connect(url);

const myMongoose = mongoose.connection;

myMongoose.on("open", () => {
  console.log("Mongoose server is started");
});

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//this is for passing the cookie in the all files

app.use("/url",checkUserLogin, urlRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Express server is started on port: ${PORT}`);
});
