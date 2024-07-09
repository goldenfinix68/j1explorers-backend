const userService = require("../service/userService");
const authService = require("../service/authService");
const catchSync = require("../utils/catchSync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const db = require("../models");
const { userAttributes } = require("../consts");

const getAll = catchSync(async (req, res) => {
  const users = await userService.getAllUsers();

  res.json({ data: users });
});

const registerUser = catchSync(async (req, res) => {
  const user = await userService.createNewUser(req.body);

  res.json({ data: user });
});

const loginUser = catchSync(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await userService.getUserByUsername(username, [
    ...userAttributes.userEssential,
    ...userAttributes.userPrivacy,
  ]);

  if (!user) {
    return next(new ApiError(httpStatus.NOT_FOUND, "Invalid email"));
  }

  const passwordMatch = await user.comparePassword(password);

  if (!passwordMatch) {
    return next(new ApiError(httpStatus.BAD_REQUEST, "Invalid password"));
  }

  const token = authService.generateToken(user.email);

  res.json({ token });
});

const updateUser = catchSync(async (req, res) => {
  const user = req.body;

  await userService.updateUserById(user, req.user.id);

  res.json({ result: "success" });
});

const changePassword = catchSync(async (req, res, next) => {
  const { old_password, new_password } = req.body;
  const user = req.user;

  const passwordMatch = await bcrypt.compare(old_password, user.password);

  if (!passwordMatch) {
    return next(
      new ApiError(httpStatus.BAD_REQUEST, "Old password incorrect!")
    );
  }

  const hashedPassword = await db.user.encryptPassword(new_password);

  await userService.updateUserById({ password: hashedPassword }, user.id);

  res.json({ result: "success" });
});

module.exports = {
  getAll,
  registerUser,
  loginUser,
  updateUser,
  changePassword,
};
