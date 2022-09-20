const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourSchema = new Schema({
    name: {
        type: String,
        require: [true, 'please provide a valid name'],
        trim: true,
        unique: [true, 'Name must be unique'],
        minLength: [5, 'Name must be 5 character'],
        maxLength: [150, 'Name is too long']
    },
    description: {
        type: String,
        require:true
    },
    price: {
        type: Number,
        require:true,
        min: [0, 'price can not negative']
    },
    status: {
        type: String,
        require: true,
        enum: {
            values: ['available', 'not-available'],
            message: 'status cant be {value}'
        }
    },
    location:{
        type: String,
        require: [true, 'please provide a valid location'],
        trim: true,
        unique: [true, 'location must be unique'],
        minLength: [5, 'location must be 5 character'],
        maxLength: [50, 'location is too long']
    },
    packageType:{
        type: String,
        require: [true, 'please provide a valid package name'],
        trim: true,
    },
    features:[{
        type:String,
        require: [true, 'please provide a valid package features name'],
        trim: true,
    },
  
    ],
    viewCount:{
        require:false,
        type:Number
    }
}, { timestamps: true });

module.exports = mongoose.model('Tours', tourSchema);