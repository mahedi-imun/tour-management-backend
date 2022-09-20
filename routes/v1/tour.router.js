const express = require("express");
const tourRouter = express.Router();
const toutController = require('../../controllers/tourController')
tourRouter.route('/')
    .get(toutController.getTour)
    .post(toutController.postTour)
tourRouter.route('/trending')
    .get(toutController.getTourTrending)
tourRouter.route('/cheapest')
    .get(toutController.getTourCheapest)

tourRouter.route('/:id')
    .get(toutController.getTourByID)
    .patch(toutController.updateTourById)

module.exports = tourRouter