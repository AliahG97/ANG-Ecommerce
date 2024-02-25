const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: Product });
    res.json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: Product });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.beforeBulkCreate(req.body);//create.(req.body)
    res(201).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      await category.update(req.body);
      res.status(200).json({ message: 'Category updated succefully' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404)({ message: 'Category not found' });
    } else {
      await category.destroy();
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
