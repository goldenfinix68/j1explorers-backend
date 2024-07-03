const db = require("../models");

const createNewUser = (user) => db.user.create(user);

const getAllUsers = () => db.user.findAll({ where: { deletedAt: null } });

module.exports = {
  createNewUser,
  getAllUsers,
};
