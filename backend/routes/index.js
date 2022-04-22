const router = require("express").Router();
const event = require("./event");
const user = require("./user");

router.use("/event", event);
router.use("/user", user);

module.exports = router;
