const router = require("express").Router();
const event = require("./event");
const user = require("./user");
const auth = require("./auth");

router.use("/event", event);
router.use("/user", user);
router.use("/auth", auth);

module.exports = router;
