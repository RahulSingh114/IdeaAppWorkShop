const express = require('express');
const serverConfig=require('./config/server.config')
const mongoose=require("mongoose");
const dbConfig=require('./config/db.config')

const app=express();
// logic to connect to MongoDB abd Create an ADMIN user

mongoose.connect(dbConfig.DB_URL);
const db=mongoose.connection;

db.on('error',()=>{
    console.log("Error while Connecting DB");

    
});

db.once("open",()=>{
    console.log("DataBase is connected");
    
})


app.listen(serverConfig.port,()=>{
    console.log("server is running",serverConfig.port);
    
})