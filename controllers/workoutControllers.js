const mongoose = require("mongoose")
const Workout = require("../models/workoutSchemas")


//get all workouts
const getworkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}


//get only 1 workout
const getworkout = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified workout"})
    }

    const workout =await Workout.findById({id})

    if (!workout) {
        return res.status(404).json({error:"cannot find the specified workout"})
    }

    res.status(200).json(workout)
}



//create workout
const createWorkout = async (req,res) =>{
    const {title,reps,load} = req.body

    try{
      const workout = await Workout.create({title,reps,load})
      res.status(200).json(workout)
    }catch(error){
      res.status({error:error.message})
    }
}


//delete workout 
const deleteworkout = async(req,res)=>{
    const {id} = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified workout"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})


    if (!workout){
        return res.status(404).json({error:"No such workout"})
    }

    res.status(200).json(workout)
}


//update workout
const updateworkout = async (req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"cannot find the specified workout"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})

    if (!workout){
        return res.status(404).json({error:"Cannot find the workout"})
    }

    res.status(200).json(workout)

}



module.exports ={
    getworkouts,
    getworkout,
    createWorkout,
    deleteworkout,
    updateworkout
}