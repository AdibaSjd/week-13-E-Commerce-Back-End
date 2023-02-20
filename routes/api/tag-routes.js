const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({})
  .then(parsedData => {
    res.json(parsedData)
  })
  .catch(err=> res.status(500).json(err))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
  }).then((categoryData) => {
    res.json(categoryData);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
console.log(req.body)
Tag.create(req.body)
.then(newCategorie=>{
  res.json(newCategorie)
})
.catch(err=> res.status(500).json(err))
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(res.body, {
    where:{
      id: req.params.id,
    }
  })
  .then(newTags=>{
    res.json(newTags)
  })
  .catch(err=> res.status(500).json(err))
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTags) => {
      res.json(deletedTags);
    })
    .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
