const { Category } = require('../database/models');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });

  res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await Category.findAll();

  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};
