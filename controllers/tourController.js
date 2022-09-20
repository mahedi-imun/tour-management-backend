const { addTourService, getTourService, getTourServiceById, updateTourServiceById, getTourTrendingService, getTourCheapestService } = require("../services/tour.service");

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
exports.getTour = async (req, res) => {
  try {
    let filters = { ...req.query }
    const includeFields = ['sorts', 'page', 'limit']
    includeFields.forEach(field => delete filters[field])
    let filterString = JSON.stringify(filters)
    filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
    filters = JSON.parse(filterString)
    const queries = {}
    if (req.query.sorts) {
      const sortsBy = req.query.sorts.split(',').join(' ')
      queries.sortsBy = sortsBy
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
    }
    if (req.query.page) {
      const { limit = 10, page = 1 } = req.query
      const skip = (page - 1) * parseInt(limit)
      queries.limit = parseInt(limit)
      queries.skip = skip
    }
    const product = await getTourService(filters,queries)
    res.status(200).json({
      status: "success",
      data: product
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};
exports.getTourByID = async (req, res) => {
  try {
    const id = req.params.id 
    const result = await getTourServiceById(id)
    res.status(200).json({
      success:true,
      data:result
    })
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};
exports.updateTourById = async (req, res) => {
  try {
    const id = req.params.id
    const result = await updateTourServiceById(id, req.body )
    res.status(200).json({
      success:true,
      data:result
    })
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};
exports.getTourTrending = async (req, res) => {
  try {
    const result = await getTourTrendingService()
    res.status(200).json({
      success:true,
      data:result
    })
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};
exports.getTourCheapest = async (req, res) => {
  try {
    const result = await getTourCheapestService()
    res.status(200).json({
      success:true,
      data:result
    })
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
};