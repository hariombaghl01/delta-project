const Listing = require("./models/listing");
const Review = require("./models/reviews");
const { listingSchema, reviewSchema } = require("./schema.js");
const ExpressError = require("./Utils/ExpressErr.js");

module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()) {
        req.session.originalUrl = req.originalUrl;
        req.flash("error" , "You must be signed in first!");
        return res.redirect("/login");
    }
    next();
}; 

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.originalUrl) {
        res.locals.redirectUrl = req.session.originalUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;

        let listing = await Listing.findById(id);

         if (!listing) {
            req.flash("error", "Cannot find that listing");
            return res.redirect("/listings");
        }

        if (!listing.owner.equals (req.user._id)) {
            req.flash("error", "You are not the owner of this listing");
            return res.redirect(`/listings/${id}`);
        }
    
        next();

};


module.exports.validateListing = (req, res, next) => {
    const validateListing = (req, res, next) => {
            let { error } = listingSchema.validate(req.body);
            if (error) {
                throw new ExpressError(400, error.details[0].message);
            }
        }
        next();      
};



module.exports.validateReview = (req, res, next) => {
    const validateReview = (req, res, next) => {
        let {error} = reviewSchema.validate(req.body);
        if (error) {
            let errmsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400 , errmsg);
        } 
        
    }
    next();
};


module.exports.isReviewAuthor = async (req, res, next) => {
    let {id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req. flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }   
    next();

};