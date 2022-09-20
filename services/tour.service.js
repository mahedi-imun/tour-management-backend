const Tours = require('../model/tourModel')

exports.addTourService = async (data) => {
    return await Tours.create(data)
}
exports.getTourService = async (filter,queries) => {
    console.log(queries)
    const tours= await Tours.find(filter)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortsBy);
    const tourTotal = await Tours.countDocuments(filter)
    const totalPage = Math.ceil(tourTotal/queries.limit)
    return {tourTotal,totalPage,tours}
}
exports.getTourServiceById = async (id) => {
    const exist = await Tours.findOne({_id:id})
    if(exist.viewCount){
        console.log(exist.viewCount);
        exist.viewCount = exist.viewCount +1 
        return await exist.save()
    }
    const result = await Tours.updateOne({_id:id},{
        $set:{
            viewCount:1
        }
    })
    return await Tours.findOne({_id:id})
}
exports.updateTourServiceById = async (id,data) => {
    return await Tours.updateOne({ _id: id }, { $set: data },{ runValidators: true })
}
exports.getTourTrendingService = async () => {
   return trending = await Tours.find({}).sort('-viewCount').limit(3)
}
exports.getTourCheapestService = async () => {
   return trending = await Tours.find({}).sort('price').limit(3)
}