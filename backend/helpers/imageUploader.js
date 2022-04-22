const cloudinary = require("cloudinary").v2;

const uploadImage = async (data) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  const base64Data = "data:image/jpeg;base64," + data.buffer.toString("base64");
  const result = await cloudinary.uploader.upload(base64Data);
  return result.secure_url;
};
module.exports = uploadImage;
