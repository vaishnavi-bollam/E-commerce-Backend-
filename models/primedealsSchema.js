
const mongoose = require("mongoose")

const Schema = mongoose.Schema


const primedealsSchema = new Schema({   
    image_url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    style:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    total_reviews:{
        type:String,
    },
    rating:{
        type:String,
    },
    availability:{
        type:String,
        required:true
    }

    
})


module.exports = mongoose.model("PrimeDeals", primedealsSchema)