const faqService = require("../service/faqService");
const catchSync = require("../utils/catchSync");
const pick = require("../utils/pick");

const getFaqsByCategory = catchSync(async (req, res) => {
  const faqs = await faqService.getFaqsByCategory(req.query.category);

  res.json({ faqs });
});

const getFaqById = catchSync(async (req, res) => {
  const faq = await faqService.getFaqById(req.query.id);

  res.json({ ...faq.dataValues });
});

module.exports = {
  getFaqsByCategory,
  getFaqById,
};
