const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");

require("./helpers/dbconnect");
require("dotenv").config();
require("./helpers/passportSetup");

const PORT = process.env.PORT;
const routes = require("./routes");
const cookieSession = require("cookie-session");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const passport = require("passport");

const multer = require("multer");
const upload = multer();
app.use(upload.array("imageData"));

app.use(
  cookieSession({
    name: "user-session",
    keys: ["key1", "key2"],
  })
);

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Kalyan",
  });
});

app.listen(PORT, () => {
  console.log("Server started on Port", PORT);
});
