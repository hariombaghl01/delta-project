const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../Utils/wrapAsync.js");
const ExpressError = require("../Utils/ExpressErr.js");
const Review = require("../models/reviews");
const Listing = require("../models/listing"); 
const { reviewSchema } = require("../schema.js");
const { isLoggedIn,isReviewAuthor} = require("../middleware.js");


const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400 , errmsg);
    } else {
        next();
    }
};

const reviewController = require("../controllers/reviews.js");

//post route for review
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.createReview));

//Delete review route
router.delete("/:reviewId", isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;