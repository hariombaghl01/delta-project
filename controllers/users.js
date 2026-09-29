 const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.postSignup = async (req, res,next) => {
    try {
        let { username, email, password } = req.body;
    const newuser = new User({ username, email});
    let registeredUser = await User.register(newuser, password);
    console.log(registeredUser);
    req.login(registeredUser, err => {
        if (err) {
            return next(err);
        }
        req.flash("success", "Welcome to YelpCamp!");
        res.redirect("/listings");
    });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

 module.exports.renderLoginForm = async (req, res) => {
    res.render("users/login.ejs");
};

module.exports.Login = async (req, res) => {
    req.flash("success", "Welcome Back!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.Logout = (req, res , next) => {
    req.logout(function(err) {
        if (err) {
             next(err);
        }
        req.flash("success", "You have been logged out!");
        res.redirect("/listings"); 
    });
};