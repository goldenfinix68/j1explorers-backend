const express = require("express");
const router = express.Router();
const faqController = require("../controller/faqController");

router.get("/fetchFaqsByCategory", faqController.getFaqsByCategory);

router.get("/fetchFaqById", faqController.getFaqById);

module.exports = router;
