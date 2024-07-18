const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");
const { validate, authenticate } = require("../middleware");
const { tourValidation } = require("../validation");

router.get("/fetchTours", authenticate, tourController.getAll);

router.get(
  "/fetchPackMembers",
  authenticate,
  tourController.getPackMembersByUserId
);

router.get("/fetchTourByUserId", authenticate, tourController.getTourByUserId);

router.get(
  "/fetchTourWithSchedules",
  authenticate,
  validate(tourValidation.getTourSchedules),
  tourController.getTourWithSchedulesByUserId
);

module.exports = router;
