const db = require("../models");

const getAllCategories = () =>
  db.category.findAll({
    attributes: ["id", "title"],
    where: { deletedAt: null },
  });

module.exports = {
  getAllCategories,
};
