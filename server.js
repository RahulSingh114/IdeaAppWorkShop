const express = require('express');
const serverConfig=require('./config/server.config')

const app=express();



app.listen(serverConfig.port,()=>{
    console.log("server is running",serverConfig.port);
    
})