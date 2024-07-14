const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { validate, authenticate } = require("../middleware");
const { userValidation } = require("../validation");
const pick = require("../utils/pick");
const { userAttributes } = require("../consts");

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

router.post(
  "/fingerprint/login",
  validate(userValidation.loginByFingerprint),
  userController.loginByFingerprint
);

router.get("/me/fingerprint", authenticate, userController.checkFingerprint);

router.put(
  "/me/fingerprint/update",
  authenticate,
  validate(userValidation.updateFingerprint),
  userController.updateFingerprint
);

router.get("/me", authenticate, (req, res) => {
  const user = pick(req.user, [
    ...userAttributes.userEssential,
    ...userAttributes.userDetail,
  ]);

  res.json({ ...user });
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
