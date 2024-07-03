const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/fetchUsers", userController.getAll);

router.post("/add", userController.add);

module.exports = router;
