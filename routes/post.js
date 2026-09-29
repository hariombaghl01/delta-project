const express = require("express");
const { route } = require("./user");
const router = express.Router();


//index
router.get("/" , (req, res) => {
    res.send("get for post")
});

//show 
router.get("/:id" , (req,res) => {
    res.send("get for post id");
});

//post
router.post("/" , (req, res) => {
    res.send("post for post");
});

//DELETE 
router.delete( "/:id", (req, res) => {
    res.send("delete post id");
});

module.exports = router;