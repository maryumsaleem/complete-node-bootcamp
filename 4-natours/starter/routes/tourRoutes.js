const express = require('express');
const tourController = require('./../controllers/tourController');
const {importData} = require('../dev-data/data/import-dev-data')
const router = express.Router();


//
router
  .route('/tours')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/tours/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);


  router.get('/mario', importData);
module.exports = router;
