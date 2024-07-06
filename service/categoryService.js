const db = require("../models");

const getAllCategories = () =>
  db.category.findAll({
    attributes: ["id", "title"],
    where: { deletedAt: null },
  });

const getCategoryById = (id) =>
  db.category.findOne({
    attributes: ["id", "title"],
    where: { deletedAt: null, id: Number(id) },
  });

module.exports = {
  getAllCategories,
  getCategoryById,
};
