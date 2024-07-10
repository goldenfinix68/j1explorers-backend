const db = require("../models");

const createNewUser = (user) => db.user.create({ ...user, salt: "" });

const getAllUsers = () => db.user.findAll({ where: { deletedAt: null } });

const getUserById = (id, attributes = [], include = []) =>
  db.user.findOne({ attributes, where: { id }, include });

const getUserByEmail = (email, attributes = [], include = []) =>
  db.user.findOne({
    attributes,
    where: { email },
    include,
  });

const getUserByUsername = (username, attributes = [], include = []) =>
  db.user.findOne({
    attributes,
    where: { username },
    include,
  });

const updateUserById = (user, id) => db.user.update(user, { where: { id } });

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  getUserByUsername,
};
