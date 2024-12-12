console.log("top primedeals.js")

const express = require("express")
const {getPrimeProducts,postPrimeProducts,getonePrimeProduct, updatePrimeProduct,deletePrimeProduct} = require("../controllers/PrimeDealsProductsController")

const router = express.Router()


router.get("/",getPrimeProducts)

router.get("/:id",getonePrimeProduct)

router.post("/",postPrimeProducts)

router.patch("/:id",updatePrimeProduct)

router.delete("/:id",deletePrimeProduct)

module.exports = router
console.log("bottom primedeals.js")
