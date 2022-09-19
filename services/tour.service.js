const Tours = require('../model/tourModel')

exports.addTourService = async (data) => {
    return await Tours.create(data)
}