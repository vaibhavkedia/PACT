const Schemas = require("../../models");

const createEvent = async (req, res) => {
  const {
    title,
    description,
    email,
    phone,
    pincode,
    longitude,
    latitude,
    target,
    current,
    userEmail,
  } = req.body;
  try {
    //check if all fields are present
    if (
      !title ||
      !description ||
      !email ||
      !phone ||
      !pincode ||
      !longitude ||
      !latitude ||
      !target ||
      !current ||
      !userEmail
    ) {
      throw new Error(
        `all fields are mandatory (i.e title,description,email,phone,pincode,longitude,latitude,target,current,userEmail)`
      );
    }

    const event = new Schemas.Event({
      title,
      description,
      email,
      phone,
      pincode,
      longitude,
      latitude,
      target,
      current,
      userEmail,
    });

    await event.save();

    res.status(201).json({
      success: true,
      message: "Event Created Successfully",
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = createEvent;
