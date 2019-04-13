const router = require('express').Router();
const controller = require('./controller.js');

router.route('/restaurant/:id').get(controller.getReviews);

module.exports = router;
