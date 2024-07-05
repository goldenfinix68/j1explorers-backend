const httpStatus = require("http-status");
const authService = require("../service/authService");
const userService = require("../service/userService");
const ApiError = require("../utils/ApiError");

module.exports = async (req, _, next) => {
  const authorization = req.headers["authorization"];

  if (authorization === undefined) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate"));
  }

  const token = authorization.split(" ")[1];
  const payload = authService.verifyToken(token);

  if (payload === undefined) {
    return next(new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate"));
  }

  const user = await userService.getUserByEmail(payload.email);

  if (user === undefined) {
    return next(new ApiError(httpStatus.NOT_FOUND, "Invalid email"));
  }

  req.user = user.dataValues;

  next();
};
