const express = require('express');
const {list_benchmark_scale_colors: model} = require('../../core/models');
const router = express.Router();

router.get('/', (req, res, next) => {
  model
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
