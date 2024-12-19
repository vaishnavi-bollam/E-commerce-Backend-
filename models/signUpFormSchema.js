const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// const SignUpSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: {
//     type: String,
//     validate: {
//       validator: function (value) {
//         // Password is required only if isGoogleAuth is false
//         if (!this.isGoogleAuth && (!value || value.trim() === "")) {
//           return false;
//         }
//         return true;
//       },
//       message: "Password is required unless using Google Authentication.",
//     },
//     default: null, // Set a default value for password
//   },
//   googleId: { type: String },
//   isGoogleAuth: { type: Boolean, default: false },
// });


const SignUpSchema = new mongoose.Schema({
  username: { type: String, required: true ,unique: true},
  email: { type: String, required: true, unique: true,unique: true },
  password: {
    type: String,
    required: function () {
      // Require password only if the user is not using Google OAuth
      return !this.googleId;
    },
  },
  googleId: { type: String }, // For storing the Google OAuth ID
});


module.exports = mongoose.model("SignUp", SignUpSchema);
