const faqService = require("../service/faqService");
const catchSync = require("../utils/catchSync");
const picker = require("../utils/picker");

const getFaqsByCategory = catchSync(async (req, res) => {
  const faqs = await faqService.getFaqsByCategory(req.query.category);

  res.json({ faqs });
});

const getFaqById = catchSync(async (req, res) => {
  const faq = await faqService.getFaqById(req.query.id);

  res.json({ ...picker(faq, ["id", "question", "answer"]) });
});

module.exports = {
  getFaqsByCategory,
  getFaqById,
};
