const router = require('express').Router();
const controller = require('./controller.js');

router.route('/navbar').get(controller.getNavbar);
router.route('/navbar/:id').get(controller.getNavbarAndId);

router.route('/reservation').get(controller.getReservation);
router.route('/reservation/:id').get(controller.getReservationAndId);

router.route('/description').get(controller.getDescription);

router.route('/reviews/:id').get(controller.getReviews);

module.exports = router;
