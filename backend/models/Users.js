const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  points: String,
});
module.exports = mongoose.model("Users", userSchema);
