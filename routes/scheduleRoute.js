const express = require("express");
const router = express.Router();
const scheduleController = require("../controller/scheduleController");
const { validate, authenticate } = require("../middleware");
const { scheduleValidation } = require("../validation");

router.get(
  "/fetchSchedule",
  authenticate,
  validate(scheduleValidation.getSchedule),
  scheduleController.getScheduleById
);

module.exports = router;
