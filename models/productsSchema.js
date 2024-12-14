const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    title: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image_url: { type: String, required: true },
    rating: { type: Number, required: true },
    category:{type:Number,required:true}
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
