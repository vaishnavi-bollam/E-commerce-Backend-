const express = require("express") 

const {getoneProductDetails} = require("../controllers/productDetailsController")

const router = express.Router()


router.get("/:id",getoneProductDetails)


module.exports = router
