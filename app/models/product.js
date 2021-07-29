const mongoose = require('mongoose')

const product_schema = new mongoose.Schema({
    id: {type:Number,require:true},
    name:{type:String,require:true},
    vendor:{type:String,require:true}
})

module.exports = mongoose.model('Product',product_schema)