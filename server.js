console.log("top server.js")
require("dotenv").config()
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require("./router")



const app = express()
app.use(cors());

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})


app.use("/",routes)



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected to database and listening to port on",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})


console.log("bottom server.js")
