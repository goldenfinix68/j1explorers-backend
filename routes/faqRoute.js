const express = require("express");
const router = express.Router();
const faqController = require("../controller/faqController");
const { validate } = require("../middleware");
const { faqValidation } = require("../validation");

router.get(
  "/fetchFaqsByCategory",
  validate(faqValidation.getFaqsByCategory),
  faqController.getFaqsByCategory
);

router.get("/fetchFaqById", faqController.getFaqById);

module.exports = router;
