const mongoose = require('mongoose')


const Product = require("../models/productsSchema")

const {sortingConsts,order} = require("../constants/common.constants")

//get all products
const getProducts = async (req,res)=>{
    try{
    console.log("Query",req.query)
    console.log("Body",req.body)
    console.log("Params",req.params)

    const {sort_by,category,title_search,rating} = req.query
    console.log("sortby",sort_by)
    console.log("category",category)
    console.log("title_search",title_search)
    console.log("rating",rating)



    let sortOrder = {}; // Default to no sorting

        // Determine the sort order based on the "sort_by" parameter
    if (sort_by === sortingConsts.PRICE_HIGH) {
        sortOrder.price =order.DESCENDING; // Descending order for price
    } else if (sort_by === sortingConsts.PRICE_LOW) {
        sortOrder.price = order.ASCENDING; // Ascending order for price
    }


    const products = await Product.find({}).sort(sortOrder)

    res.status(200).json(products)
}
    catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message:error.message });
    }

}


//get one product
const getoneProduct = async (req,res)=>{
    console.log("vaishnavi")
    const {id} = req.params
    console.log("id",id)
    console.log(mongoose.Types.ObjectId.isValid(id))

    const product = await Product.findOne({ id})
    console.log(product)
    if (!product){
        return res.status(404).json({error:"Product not found"})
    }
    res.status(200).json(product)
}


//post products
const postProducts = async (req,res)=>{
    const {id,
        image_url,
        title,
        price,
        brand,
        rating
        } = req.body
   
    try{
        const Productsnew = await Product.create({id,image_url,
            title,
            price,
            brand,
            rating})
        res.status(201).json(Productsnew) 
    }catch(error){
        res.status(404).json({error:error.message})
    }
}


//update product

const updateProduct = async (req,res)=>{
    const {id}  = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified product"})
    } 
    const product = await Product.findOneAndUpdate({_id:id},{...req.body})

    if (!product){
        return res.status(404).json({error:"the product not found"})
    }
    res.status(201).json(product)
}


//delete product 

const deleteProduct = async (req,res)=>{
    const {id} = req.params 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified workout"})
    } 

    const product = await Product.findOneAndDelete({_id:id})

    if (!product){
        return res.status(404).json({error:"the product not found"})
    }
    res.status(200).json(product)
}


module.exports = {postProducts,getProducts,getoneProduct,updateProduct,deleteProduct}