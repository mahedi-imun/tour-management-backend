const { addTourService } = require("../services/tour.service");

exports.postTour = async (req, res) => {
    try {
      const product = await addTourService(req.body)
      res.status(200).json({
        status: "success",
        message: "data a insert successfully ",
        data: product
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  };