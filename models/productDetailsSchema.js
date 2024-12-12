const mongoose = require('mongoose');


const ProductDetailsSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true, 
        unique: true, 
        ref: 'products' // Referencing the Product schema's id field
    },
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    style: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    total_reviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    availability: { type: String, required: true },
    similar_products: [
        {
            id:{type:Number,required:true},
            image_url: { type: String, required: true },
            title: { type: String, required: true },
            style: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true },
            brand: { type: String, required: true },
            total_reviews: { type: Number, required: true },
            rating: { type: Number, required: true },
            availability: { type: String, required: true }
        }
    ]
});

const ProductDetails = mongoose.model('productDetails', ProductDetailsSchema);

module.exports = ProductDetails;
