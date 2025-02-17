const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect =async ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("Database Connected Succesfuuly")})
    .catch((err)=>{console.log("Error while connecting database",err)})
}

