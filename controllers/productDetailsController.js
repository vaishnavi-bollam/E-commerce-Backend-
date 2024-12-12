const ProductDetails = require("../models/productDetailsSchema")


//get 1 product detail
const getoneProductDetails = async (req,res)=>{
    const {id} = req.params
    // if (!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error:"cannot find the specified product"})
    // }

    const ProductDetail = await ProductDetails.findOne({id}) 
    console.log(ProductDetail)
    if (!ProductDetail){
        return res.status(404).json({error:"Product not found"})
    }
    res.status(200).json(ProductDetail)
}

module.exports = {getoneProductDetails}


