const express = require('express');
const mongoose = require("mongoose");

//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    "mongodb+srv://user:mongoPasswordDB@cluster0.0e13z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = db; 

