import {Router} from "express" 

const workoutRoutes = require("./routes/workouts")

// Router that contains all the routes/endpoints in the application
const router = Router();

router.use("/workouts",workoutRoutes)





// Export the router
export default router;