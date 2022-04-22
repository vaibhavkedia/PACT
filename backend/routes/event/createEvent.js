const Schemas = require("../../models");
const uploader = require("../../helpers/imageUploader");
const createEvent = async (req, res) => {
  const {
    title,
    description,
    contactEmail,
    contactPhone,
    pincode,
    longitude,
    latitude,
    target,
    userEmail,
  } = req.body;
  const imageData = req.files;
  try {
    //check if all fields are present
    if (
      !title ||
      !description ||
      !contactEmail ||
      !contactPhone ||
      !pincode ||
      !longitude ||
      !latitude ||
      !target ||
      !userEmail ||
      imageData.length != 2
    ) {
      throw new Error(
        `all fields are mandatory (i.e title,description,contactEmail,contactPhone,pincode,longitude,latitude,target,userEmail,imageData,document)`
      );
    }

    const event = new Schemas.Event({
      title,
      description,
      contactEmail,
      contactPhone,
      pincode,
      longitude,
      latitude,
      target,
      currentFund: "0",
      userEmail,
    });

    //upload image to cloudinary and get url
    const imageUrl = await uploader(imageData[0]);
    const documentUrl = await uploader(imageData[1]);
    event.image = imageUrl;
    event.document = documentUrl;
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
