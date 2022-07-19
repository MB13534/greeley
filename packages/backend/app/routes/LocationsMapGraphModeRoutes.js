const express = require('express');
const {locations_map_graph_mode: model} = require('../../core/models');
const {Op} = require('sequelize');
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

router.post('/', (req, res, next) => {
  const where = {};

  where.stats_period = req.body.periodOfRecord;
  where.parameter_ndx = {
    [Op.in]: req.body.parameters,
  };

  model
    .findAll({where: where})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
