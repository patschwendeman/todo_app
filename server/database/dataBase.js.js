const express = require('express');
const mongoose = require("mongoose");

//Connection to MongoDB Atlas Database Cluster
const db = mongoose.connect(
    "mongodb+srv://eap4d:m20biw0w@cluster0.uv4nr.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = db; 

