const router = require("express").Router();
const getData = require("./getData");

router.get("/", getData);

module.exports = router;
