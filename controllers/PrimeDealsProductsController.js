const PrimeDeals = require("../models/primedealsSchema")


//get all prime products
const getPrimeProducts = async (req,res)=>{
    const PrimeProducts = await PrimeDeals.find({})  
    res.status(200).json(PrimeProducts)
}


const getonePrimeProduct = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified product"})
    }

    const primeProduct = await PrimeDeals.findById({id}) 
    if (!primeProduct){
        return res.status(404).json({error:"Product not found"})
    }
    res.status(200).json(primeProduct)
}


//post prime products

const postPrimeProducts = async (req,res)=>{
    const {image_url,
        title,
        style,
        price,
        description,
        brand,
        total_reviews,
        rating,
        availability} = req.body
   
    try{
        const PrimeProductsnew = await PrimeDeals.create({image_url,
            title,
            style,
            price,
            description,
            brand,
            total_reviews,
            rating,
            availability})
        res.status(200).json(PrimeProductsnew) 
    }catch(error){
        res.status(404).json({error:error.message})
    }
}


//update primeproduct 

const updatePrimeProduct = async (req,res)=>{
    const {id}  = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified product"})
    } 
    const primeProduct = await PrimeDeals.findOneAndUpdate({_id:id},{...req.body})

    if (!primeProduct){
        return res.status(404).json({error:"the product not found"})
    }
    res.status(201).json(primeProduct)
}


//delete primeProduct

const deletePrimeProduct = async(req,res)=>{
    const {id} = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified workout"})
    } 

    const primeProduct = await PrimeDeals.findOneAndDelete({_id:id})

    if (!primeProduct){
        return res.status(404).json({error:"the product not found"})
    }
    res.status(200).json(primeProduct)
}
 





module.exports = {
    getPrimeProducts,
    getonePrimeProduct,
    postPrimeProducts,
    updatePrimeProduct,
    deletePrimeProduct
}