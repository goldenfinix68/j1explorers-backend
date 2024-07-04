const db = require("../models");

const getFaqsByCategory = (categoryId) =>
  db.faq.findAll({
    attributes: ["id", "question", "answer"],
    where: { deletedAt: null, categoryId },
  });

const getFaqById = (id) =>
  db.faq.findOne({
    attributes: ["id", "question", "answer"],
    where: { deletedAt: null, id },
  });

module.exports = {
  getFaqsByCategory,
  getFaqById,
};
