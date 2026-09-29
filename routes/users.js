const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../Utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const usercontroler = require("../controllers/users");

router.route("/signup")
.get(usercontroler.renderSignupForm)
.post(wrapAsync(usercontroler.postSignup));

router.route("/login")
.get(usercontroler.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), usercontroler.Login);

router.get("/logout", usercontroler.Logout);

module.exports = router;
