const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "setup is required"]
    },
    price: {
        type: Number,
        required: [true, "setup is required"]
    },
    description: {
        type: String,
        required: [true, "setup is required"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema)