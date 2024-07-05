const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { validate, authenticate } = require("../middleware");
const { userValidation } = require("../validation");

router.get("/fetchUsers", userController.getAll);

router.post(
  "/new",
  validate(userValidation.createNewUser),
  userController.registerUser
);

router.post(
  "/login",
  validate(userValidation.loginUser),
  userController.loginUser
);

router.get("/me", authenticate, (req, res) => {
  res.json({ ...req.user });
});

router.put(
  "/me/update",
  authenticate,
  validate(userValidation.updateUser),
  userController.updateUser
);

router.put(
  "/me/changePassword",
  authenticate,
  validate(userValidation.changePassword),
  userController.changePassword
);

module.exports = router;
