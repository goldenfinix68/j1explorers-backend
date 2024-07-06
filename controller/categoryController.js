const categoryService = require("../service/categoryService");
const catchSync = require("../utils/catchSync");

const getAll = catchSync(async (req, res) => {
  const categories = await categoryService.getAllCategories();

  res.json({ categories });
});

const getCategoryById = catchSync(async (req, res) => {
  const category = await categoryService.getCategoryById(req.query.id);

  res.json({ ...category.dataValues });
});

module.exports = {
  getAll,
  getCategoryById,
};
