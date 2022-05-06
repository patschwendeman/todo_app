//Define the schema of the collection (data table) in the code 

const mongoose = require("mongoose"); 

//Object as the representation of the data schmema
const TodoSchema = new mongoose.Schema( {
    _id: String,
    describtion: String,
    done: Boolean,
    time: String

});

//Representation of the insatnce of the collection in the DB
const TodoModel = mongoose.model('todos', TodoSchema); 

module.exports = TodoModel; 