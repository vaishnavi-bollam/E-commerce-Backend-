console.log("top server.js")
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/signUpFormSchema'); 
const routes = require("./router")
const cookieSession = require("cookie-session")
dotenv.config();



const app = express()


app.use(bodyParser.json());
app.use(cors());


app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI_PRODUCTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
  
  // Passport Config
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({ email: profile.emails[0].value });
      if (existingUser) {
        return done(null, existingUser);
      }
      const newUser = new User({
        username: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
      });
      await newUser.save();
      done(null, newUser);
    } catch (error) {
      done(error, null);
    }
  }));
  
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
  
  // Google OAuth Routes
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  app.get('/auth/google/callback', passport.authenticate('google', { session: false }),
    async (req, res) => {
      const payload = { id: req.user.id, username: req.user.username, email: req.user.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.redirect(`http://localhost:3000/login?token=${token}`);
    }
  );
  

  

app.use("/",routes)

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  







console.log("bottom server.js")
