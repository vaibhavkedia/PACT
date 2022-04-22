const Schemas = require("../../models");

const getEventById = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Schemas.Event.findOne({ _id: eventId });
    if (!event) {
      throw new Error("Event doesn't exist");
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = getEventById;
