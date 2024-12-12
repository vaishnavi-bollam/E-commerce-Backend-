const express = require("express")

const {postProducts,getProducts,getoneProduct,updateProduct,deleteProduct} = require("../controllers/productsControllers")
const {getoneProductDetails} = require("../controllers/productDetailsController")
const router = express.Router()


router.get("/",getProducts)

router.get("/:id",getoneProductDetails)

router.post("/",postProducts)

router.patch("/:id",updateProduct)

router.delete("/:id",deleteProduct)


module.exports = router