console.log("top router.js")

// import {Router} from "express" 
const {Router} = require("express")
const workoutRoutes = require("./routes/workouts")
const PrimeDeals = require("./routes/primedeals")
const Products = require("./routes/products")
const  SignUpForm = require("./routes/signupForm")


// Router that contains all the routes/endpoints in the application
const router = Router();

router.use("/workouts",workoutRoutes) // @todo : need to remove entire workout related code 
router.use("/primeProducts",PrimeDeals)
router.use("/products",Products)
router.use("/",SignUpForm)



// Export the router
module.exports = router

console.log("bottom router.js")
