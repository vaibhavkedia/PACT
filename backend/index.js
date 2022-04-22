const express = require("express");
const app = express();

require("./helpers/dbconnect");
require("dotenv").config();

const PORT = process.env.PORT;
const routes = require("./routes");

app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

const multer = require("multer");
const upload = multer();
app.use(upload.array("imageData"));

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server started on Port", PORT);
});
