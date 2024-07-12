const userService = require("../service/userService");
const authService = require("../service/authService");
const catchSync = require("../utils/catchSync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const db = require("../models");
const { userAttributes } = require("../consts");
const pick = require("../utils/pick");
const { userPrivacy } = require("../consts/userAttributes");

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
    ...userAttributes.userDetail,
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

  res.json({
    token,
    user: pick(user.dataValues, [
      ...userAttributes.userEssential,
      ...userAttributes.userDetail,
    ]),
  });
});

const updateUser = catchSync(async (req, res) => {
  const user = req.body;

  const updatedUser = await userService.getUserById(req.user.id, [
    ...userAttributes.userEssential,
    ...userAttributes.userDetail,
  ]);

  updatedUser.set({ ...user });
  await updatedUser.save();

  res.json(updatedUser);
});

const loginByFingerprint = catchSync(async (req, res) => {
  const user = await userService.getUserByFingerprint(req.body.fingerprint, [
    ...userAttributes.userEssential,
    ...userAttributes.userDetail,
  ]);

  if (!user) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Such fingerprint does not exist!"
    );
  }

  const token = authService.generateToken(user.email);

  res.json({
    token,
    user,
  });
});

const checkFingerprint = catchSync(async (req, res) => {
  const user = await userService.getUserById(req.user.id, [...userPrivacy]);
  console.log(user);
  res.json({ result: user.fingerprint ? "yes" : "no" });
});

const updateFingerprint = catchSync(async (req, res) => {
  const user = req.body;

  const updatedUser = await userService.getUserById(req.user.id, [
    ...userAttributes.userEssential,
    ...userAttributes.userPrivacy,
  ]);

  updatedUser.set({ ...user });
  await updatedUser.save();

  res.json({ result: "success" });
});

const changePassword = catchSync(async (req, res, next) => {
  const { old_password, new_password } = req.body;

  const user = await userService.getUserByUsername(req.user.username, [
    ...userAttributes.userEssential,
    ...userAttributes.userPrivacy,
  ]);

  const passwordMatch = await bcrypt.compare(old_password, user.password);

  if (!passwordMatch) {
    return next(
      new ApiError(httpStatus.BAD_REQUEST, "Old password incorrect!")
    );
  }

  const hashedPassword = await db.user.encryptPassword(new_password);

  user.set({ password: hashedPassword });
  await user.save();

  res.json({ result: "success" });
});

module.exports = {
  getAll,
  registerUser,
  loginUser,
  loginByFingerprint,
  updateUser,
  changePassword,
  updateFingerprint,
  checkFingerprint,
};
