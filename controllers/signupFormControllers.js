console.log("top signup controller")

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SignUpSchema = require("../models/signUpFormSchema") 

const JWT_SECRET = process.env.JWT_SECRET || "Vaishnavi";


//register route
const registerSignup = async (req,res) =>{
    const { username, password, email } = req.body;
    console.log(username)
    try {
      // Check if user already exists
      // console.log("in try block")
      const existingUser = await SignUpSchema.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      // Validate password length
      if (password.length < 6) {
        return res.status(400).json({ error: "Password should consists of atleast 6 characters" });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  

      const newUser = await SignUpSchema.create({
        username,
        password: hashedPassword,
        email,
      })
      
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
   
}


const loginSignup = async (req,res)=>{
    const { username, password } = req.body;

  try {
    // Find user in database
    const user = await SignUpSchema.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify password
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Generate JWT token
    const payload = { username: user.username, userId: user._id, name: user.name };
    const token = jwt.sign(payload, JWT_SECRET);
    console.log("JWT Payload:", payload);
    console.log("Generated Token:", token);
    res.status(200).json({ jwt_token: token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}







module.exports = {
    registerSignup,
    loginSignup
}

console.log("bottom signup controller")
