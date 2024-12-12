console.log("top signupform")

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router()

const {registerSignup,loginSignup} = require("../controllers/signupFormControllers")


router.post("/register",registerSignup)

router.post("/login",loginSignup)

module.exports = router

console.log("bottom signupform")
