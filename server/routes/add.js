const express = require('express');
const router = express.Router();
//Import Data Model
const TodoModel = require("../models/Todo");  

//Add new Todo to Database
router.post("/", async (req, res)=>{ 

    //Represents the value from the frontend 
    const _id = req.body._id;
    const describtion = req.body.describtion; 
    const done = req.body.done; 
    const time = req.body.id; 

    //Create new Todo based on defined schema
    const todo = new TodoModel({ _id: _id, describtion: describtion, done: done, time: time });

    try{
        await todo.save(); 
        res.send("Added new Coupon");
    }
    catch(err){
        console.log(err);
    }
});

module.exports = router;