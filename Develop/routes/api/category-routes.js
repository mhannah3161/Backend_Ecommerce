const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const catData = await Category.findAll({
    attributes: ["id", "category_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]
  }).catch((err => {
    res.json(err);
  }));
  res.json(catData);
  //  or
  // await Category.findAll({
  //   attributes: ["id", "category_name"],
  //   include: [{
  //     model: Product,
  //     attributes: ["id", "product_name", "price", "stock", "category_id"]
  //   }]
  // })
  // .then((categories) => {
  //   res.json(categories);
  // })
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: ["id"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]

  })
  res.json(catData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  await Category.create(req.body)
    .then((newCat) => res.status(200).json(newCat))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  // create a new category --issues^^
});

router.put('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: ["id"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]

  })
  res.json(catData);
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const catData = await Category.findAll({
    attributes: ["id"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"]
    }]

  })
  res.json(catData);
  // delete a category by its `id` value
});

module.exports = router;
