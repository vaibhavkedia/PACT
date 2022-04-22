const Schemas = require("../../models");

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  const user = "dummyuser@gmail.com";
  try {
    //check if event exist and belongs to this user
    const event = await Schemas.Event.findOne({ _id: eventId, user });
    if (!event) {
      throw new Error("Event doesn't exist");
    }
    await Schemas.Event.deleteOne({ _id: eventId });
    res
      .status(200)
      .json({ success: true, message: "event deleted Successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = deleteEvent;
