// this will hold the schema for the user
//  it explain the difference fields of usr and how it will be stored in the mongodb


const mongoose= require('mongoose')
const userSchema=new mongoose.schema({
     name:{
        type:string,
        require:true
     },
     userId:{
        type:String,
        require:true
     },
     password:{
        type:String,
        require:true,

     },
     email:{
        type:String,
        unique:true,
        require:true,
        minLenght:10,
        lowercase:true
     },
     userType:{
        type:String,
        require:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
     }
},{timestamps:true});

mongoose.model()