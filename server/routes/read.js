const express = require('express');
const router = express.Router();
//Import Data Model
const TodoModel = require("../models/Todo");  

//Read all Todos from the Database
router.get("/", async (req, res)=>{  

    TodoModel.find({}, (err, result)=>{ 
        if(err){
            res.send(err);
        }
        res.send(result); 
    });
});

module.exports = router;