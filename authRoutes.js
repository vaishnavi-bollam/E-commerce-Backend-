const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("./models/signUpFormSchema");

// Google OAuth login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);



router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: true }),
  async (req, res) => {
    console.log("checking",console.log(req))
    const { displayName, emails } = req.user;
    const email = emails[0].value;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        // Create a new user if not already in the database
        user = new User({
          username: displayName,
          email,
          googleId: id,
          isGoogleAuth: true, // Explicitly set isGoogleAuth
        });
        console.log("created user",user)
        await user.save();
      }
      // Redirect to the frontend after successful login
      res.redirect("http://localhost:3000/");
    } catch (err) {
      console.error("Error during Google OAuth callback:", err);
      res.redirect("/login"); // Redirect back to login on error
    }
  }
);




// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Error logging out");
    res.redirect("http://localhost:3000");
  });
});

// Check login status
router.get("/current_user", (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).send("Not authenticated");
  }
});

module.exports = router;
