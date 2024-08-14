const express = require("express");
const router = express.Router();
const faqController = require("../controller/faqController");
const { validate, authenticate } = require("../middleware");
const { faqValidation } = require("../validation");

router.get(
  "/fetchFaqsByCategory",
  authenticate,
  validate(faqValidation.getFaqsByCategory),
  faqController.getFaqsByCategory
);

router.get("/fetchFaq", authenticate, faqController.getFaqById);

module.exports = router;
