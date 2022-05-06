const express = require('express');
const router = express.Router();
//Import Data Model
const TodoModel = require("../models/Todo");  

//change Status of Todo
router.patch("/:_id", async (req,res)=>{
    
    const _id = req.params._id;
    await TodoModel.findByIdAndUpdate(_id, { done:req.body.done }).exec();
    res.send("Changed Status")
});

module.exports = router;