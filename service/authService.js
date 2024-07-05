const jwt = require("jsonwebtoken");
const config = require("../config");

const generateToken = (email) => {
  return jwt.sign({ email }, config.JWT_SECRET, { expiresIn: "1h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, config.JWT_SECRET, function (err, decoded) {
    return decoded;
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
