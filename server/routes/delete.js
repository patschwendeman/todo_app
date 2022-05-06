const express = require('express');
const router = express.Router();
//Import Data Model
const TodoModel = require("../models/Todo"); 

//Delete a Todo from the Database
router.delete("/:_id", async (req,res)=>{

    const _id = req.params._id; 
    await TodoModel.findByIdAndRemove(_id).exec();
    res.send("Todo deleted");
});

module.exports = router;