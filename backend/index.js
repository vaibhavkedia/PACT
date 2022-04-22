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

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server started on Port", PORT);
});
