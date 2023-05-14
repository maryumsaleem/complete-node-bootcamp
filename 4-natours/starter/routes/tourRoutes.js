const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();
//param middleware
//val is value of parameter
router.param('id',tourController.checkID);

//
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody,tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
