const express = require('express');
const serverConfig=require('./config/server.config');
const mongoose=require("mongoose");
const dbConfig=require('./config/db.config');
const userModel=require("./model/user.model");
const bcrypt=require('bcrypt')

const app=express();
// logic to connect to MongoDB abd Create an ADMIN user

mongoose.connect(dbConfig.DB_URL + dbConfig.DB_NAME);
const db=mongoose.connection;

db.on('error',()=>{
    console.log("Error while Connecting DB");

    
});

db.once("open",()=>{
    console.log("DataBase is connected");
    
    init();
})

async function init(){

    let admin=await userModel.findOne({
        userId:"adimn"
    })

    if(admin){
        console.log("Admin user Allready Present")
        return;
    }
    /**
     * Initialize the mongoDB
     * 
     * need to create ADMIN USER
     */

     admin = await userModel.create({
        name:"Rahul Kumar Singh",
        userId:"adimn",
        email:"rahul@gmail.com",
        userType:"ADMIN",
        password:bcrypt.hashSync("welcome1",8)
    })
    console.log(admin);
    
}


app.listen(serverConfig.port,()=>{
    console.log("server is running",serverConfig.port);
    
})