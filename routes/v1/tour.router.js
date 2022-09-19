const express = require("express");
const tourRouter = express.Router();
const toutController = require('../../controllers/tourController')
tourRouter.route('/')
.post(toutController.postTour)

module.exports = tourRouter