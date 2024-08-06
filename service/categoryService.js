const db = require("../models");
const { categoryAttributes } = require("../consts");

const getAllCategories = () =>
  db.category.findAll({
    attributes: [...categoryAttributes.categoryDetail],
    where: { deletedAt: null },
  });

const getCategoryById = (id) =>
  db.category.findOne({
    attributes: [...categoryAttributes.categoryDetail],
    where: { deletedAt: null, id: Number(id) },
  });

module.exports = {
  getAllCategories,
  getCategoryById,
};
