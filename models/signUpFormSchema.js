console.log("top signup schema")


const mongoose = require("mongoose")

const Schema = mongoose.Schema 


const SignUpSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

module.exports = mongoose.model("SignUp", SignUpSchema)

console.log("bottom signup schema")
