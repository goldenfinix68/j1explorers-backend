const { faqAttributes } = require("../consts");
const db = require("../models");

const getFaqsByCategory = (categoryId) =>
  db.faq.findAll({
    attributes: [...faqAttributes.faqDetail],
    where: { deletedAt: null, categoryId },
  });

const getFaqById = (id) =>
  db.faq.findOne({
    attributes: [...faqAttributes.faqDetail],
    where: { deletedAt: null, id },
  });

module.exports = {
  getFaqsByCategory,
  getFaqById,
};
