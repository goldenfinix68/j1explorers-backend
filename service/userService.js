const db = require("../models");

const createNewUser = (user) => db.User.create(user);

const getAllUsers = () => db.User.findAll({ where: { deletedAt: null } });

module.exports = {
  createNewUser,
  getAllUsers,
};
