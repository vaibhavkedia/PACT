const Schemas = require("../../models");

const getEventsByPincode = async (req, res) => {
  const pincode = req.params.pincode;
  try {
    const events = await Schemas.Event.find({ pincode });
    if (events.length == 0) {
      throw new Error("no events found for this pincode");
    }
    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = getEventsByPincode;
