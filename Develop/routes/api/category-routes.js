const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const catData = await Category.findAll({
    attributes: [ id, category_name],
    include: [{
      model: Product,
      attributes: [ id, product_name, price, stock, category_id ]
    }]
  }).catch((err => {
    res.json(err);
  }));
  res.json(catData);
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: [ id ],
    include: [{
      model: Product,
      attributes [ id, product_name, price, stock, category_id ]
    }]

  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  const catData = await Category.findAll({
    attributes: [ id, category_name],
    include: [{
      model: Product,
      attributes: [ id, product_name, price, stock, category_id ]
    }]
  }).catch((err => {
    res.json(err);
  }));
  res.json(catData);
  // create a new category
});

router.put('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: [ id ],
    include: [{
      model: Product,
      attributes [ id, product_name, price, stock, category_id ]
    }]

  })
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: [ id ],
    include: [{
      model: Product,
      attributes [ id, product_name, price, stock, category_id ]
    }]

  })
  // delete a category by its `id` value
});

module.exports = router;
