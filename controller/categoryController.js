const categoryService = require("../service/categoryService");
const catchSync = require("../utils/catchSync");

const getAll = catchSync(async (req, res) => {
  const categories = await categoryService.getAllCategories();

  res.json({ categories });
});

module.exports = {
  getAll,
};
