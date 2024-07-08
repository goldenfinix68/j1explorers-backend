const express = require("express");
const router = express.Router();
const tourController = require("../controller/tourController");
const { validate, authenticate } = require("../middleware");
const { userValidation } = require("../validation");
const pick = require("../utils/pick");

router.get("/fetchTours", tourController.getAll);

router.get(
  "/fetchPackMembers",
  authenticate,
  tourController.getPackMembersByUserId
);

router.get("/fetchTourByUserId", authenticate, tourController.getTourByUserId);

router.get(
  "/fetchTourWithSchedules",
  authenticate,
  tourController.getTourWithSchedulesByUserId
);

router.put(
  "/update",
  authenticate,
  validate(userValidation.updateUser),
  tourController.updateTour
);

module.exports = router;
