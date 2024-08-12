const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const { validate, authenticate } = require("../middleware");
const { categoryValidation } = require("../validation");

router.get("/fetchCategories", authenticate, categoryController.getAll);

router.get(
  "/fetchCategory",
  authenticate,
  validate(categoryValidation.getCategory),
  categoryController.getCategoryById
);

module.exports = router;
