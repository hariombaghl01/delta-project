const express = require("express");
const router = express.Router();

//index- user
router.get("/" , (req, res) => {
    res.send("get for user");
});

//show - user
router.get("/:id" , (req,res) => {
    res.send("get for user id");
});

//post - user
router.post("/" , (req, res) => {
    res.send("post for users");
});

//DELETE - user
router.delete("/:id" , (req, res) => {
    res.send("delete users id");
});

module.exports = router;