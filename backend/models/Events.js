const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  document: String,
  contactEmail: String,
  contactPhone: String,
  pincode: String,
  longitude: String,
  latitude: String,
  target: String,
  currentFund: String,
  userEmail: String,
});
module.exports = mongoose.model("Events", eventSchema);
