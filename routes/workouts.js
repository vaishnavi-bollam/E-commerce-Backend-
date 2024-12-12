const express = require("express")
const Workout = require("../models/workoutSchemas")
const {getworkouts,getworkout,createWorkout,deleteworkout,updateworkout} = require("../controllers/workoutControllers")

const router = express.Router()

router.get("/",getworkouts)


router.get("/:id",getworkout)



router.post("/",createWorkout)



router.delete("/:id",deleteworkout)


router.patch("/:id",updateworkout)



module.exports = router