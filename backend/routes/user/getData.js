const Schemas = require("../../models");

const getData = async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await Schemas.User.findOne({ email: userEmail });
    if (!user) {
      throw new Error("user doesn't exist");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = getData;
