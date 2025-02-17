const { profile } = require("console");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female"]
    },
    profilePic:{
        type:String,
        default:""
    },
   
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);