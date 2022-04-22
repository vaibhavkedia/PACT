const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  document: String,
  email: String,
  phone: String,
  pincode: String,
  longitude: String,
  latitude: String,
  target: String,
  current: String,
  userEmail: String,
});
module.exports = mongoose.model("Events", eventSchema);
