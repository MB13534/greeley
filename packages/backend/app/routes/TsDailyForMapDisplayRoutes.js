const express = require('express');
const {ts_daily_for_map_display: model} = require('../../core/models');
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

router.post('/:ndx', (req, res, next) => {
  const where = {};

  where.ndx = req.params.ndx;
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
