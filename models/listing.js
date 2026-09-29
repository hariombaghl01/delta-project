const { default: string } = require("figlet/fonts/babyface-lame");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require ("./reviews.js")

const listingSchem = new Schema({
    title: {
        type: String, 
        //required: true,
    },
    description: String,
    
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

listingSchem.post("findOneAndDelete", async (listing) => {
    if (listing){
        await Review.deleteMany({_id : {$in: listing.reviews}});
    }
    
});

const Listing = mongoose.model("Listing", listingSchem);
module.exports = Listing;