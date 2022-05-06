const express = require('express');
const router = express.Router();
//Import Data Model
const TodoModel = require("../models/Todo"); 

//Clear done Todos from the Database
router.delete("/", async (req,res)=>{
    await TodoModel.deleteMany({ done:true }).exec();
    res.send("Todos cleared")
});

module.exports = router;