const express = require('express');
const {checkAccessToken} = require('../../core/middleware/auth.js');
const {list_wqat_location_types: model} = require('../../core/models');
const {Op} = require('sequelize');
const router = express.Router();

// Attach middleware to ensure that user is authenticated & has permissions
router.use(
  checkAccessToken(process.env.AUTH0_DOMAIN, process.env.AUTH0_AUDIENCE)
);

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

router.patch('/:id', (req, res, next) => {
  model
    .update(req.body, {
      where: {
        location_type_ndx: req.params.id,
      },
      returning: true,
    })
    .then((data) => {
      const updatedRecord = data[1][0];
      res.json(updatedRecord);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/reviewed/:ids', (req, res, next) => {
  model
    .update(req.body, {
      where: {
        location_type_ndx: {
          [Op.in]: req.params.ids.split(','),
        },
      },
      returning: true,
    })
    .then((data) => {
      const updatedRecord = data[1][0];
      res.json(updatedRecord);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
