const router = require("express").Router();
const createEvent = require("./createEvent");
const deleteEvent = require("./deleteEvent");
const getEventById = require("./getEventById");
const getEventsByPincode = require("./getEventsByPincode");

router.get("/:id", getEventById);
router.get("/pincode/:pincode", getEventsByPincode);
router.post("/create", createEvent);
router.delete("/delete/:id", deleteEvent);

module.exports = router;
