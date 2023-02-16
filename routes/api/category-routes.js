const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {

  Category.findAll({})
  .then(parsedData => {
    res.json(parsedData)
  })
  .catch(err=> res.status(500).json(err))
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
  }).then((categoryData) => {
    res.json(categoryData);
  });
});
  // find one category by its `id` value
  // be sure to include its associated Products


router.post('/', (req, res) => {
console.log(req.body)
Category.create(req.body)
.then(newCategorie=>{
  res.json(newCategorie)
})
.catch(err=> res.status(500).json(err))
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(res.body, {
    where:{
      id: req.params.id,
    }
  })
  .then(newCategorie=>{
    res.json(newCategorie)
  })
  .catch(err=> res.status(500).json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
  // delete a category by its `id` value
});

module.exports = router;
