const express = require("express");
const router = express.Router();
const scheduleController = require("../controller/scheduleController");
const { validate, authenticate } = require("../middleware");

router.get("/fetchSchedule", authenticate, scheduleController.getScheduleById);

module.exports = router;
