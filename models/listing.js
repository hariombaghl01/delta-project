const { default: string } = require("figlet/fonts/babyface-lame");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchem = new Schema({
    title: {
        type: String, 
        //required: true,
    },
    description: String,
    
    image: {
    filename: {
        type: String,
        default: "listingimage",
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    },
},
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchem);
module.exports = Listing;