//Import modules
const express = require("express");
const cors = require("cors");
const db = require("./database/dataBase.js"); 

//Server Settings
const HOST = 'localhost';
const PORT = '8000';

//Create Server
const app = express(); 

app.use(express.json()); //Allows to receive information from the frontend in JSON format
app.use(cors()); //Allows Cross Origin Requests, connecting frontend and backend


//Import Routes
const readRoute = require('./routes/read');
const addRoute = require('./routes/add');
const clearRoute = require('./routes/clear');
const updateRoute = require('./routes/update');
const deleteRoute = require('./routes/delete');

//Middleware
app.use('/read', readRoute);
app.use('/add', addRoute);
app.use('/clear', clearRoute);
app.use('/update/', updateRoute);
app.use('/delete/', deleteRoute);


//run Server
const server = app.listen(PORT, () =>{
    console.log(`Server runs:http://${HOST}:${PORT}`);
});