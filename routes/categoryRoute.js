const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");

router.get("/fetchCategories", categoryController.getAll);

module.exports = router;
