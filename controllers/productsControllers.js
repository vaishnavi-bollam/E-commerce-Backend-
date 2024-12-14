const mongoose = require('mongoose')


const Product = require("../models/productsSchema")

const {sortingConsts,order} = require("../constants/common.constants")

/**
 * getProducts
 * 
 * @description : gets all products with applied filters 
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getProducts = async (req, res) => {
    try {
        // console.log("Query", req.query);
        // console.log("Body", req.body);
        // console.log("Params", req.params);

        const { sort_by, rating, title_search,category} = req.query;
        
        console.log("sortby", sort_by);
        console.log("rating", rating);
        console.log(typeof parseFloat(rating))

        let query = {};
        let sortOrder = {};

        // If rating is given then retrieve products with rating >= 3
        if (rating) {
            query.rating = { $gte: Number(rating)}; 
        }

        if (category){
            query.category = {$eq: Number(category) }
            
        }

        // Case-insensitive search
        if (title_search) {
            query.title = { $regex: title_search, $options: "i" }; 
        }

        if (sort_by === sortingConsts.PRICE_HIGH) {
            sortOrder.price = order.DESCENDING; // Descending order for price
        } else if (sort_by === sortingConsts.PRICE_LOW) {
            sortOrder.price = order.ASCENDING; // Ascending order for price
        }
        console.log(query) //{ rating: { '$gte': 3 } }

        // Fetch products based on the query and sort order
        const products = await Product.find(query).sort(sortOrder);

        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


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