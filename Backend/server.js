const { json } = require("body-parser");
const express = require("express");
const app  = express();
const {dbConnect} =require("./config/database");
require("dotenv").config();
const cookieParser = require("cookie-parser");




// const routes =require("./routes/route");
const authRoutes = require("./routes/authRoutes")
const messageRoute = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;
// middlewares
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/api/auth/",authRoutes);
app.use("/api/message/",messageRoute);
app.use("/api/user/",userRoutes);

app.listen(PORT,()=>{console.log("Server is started at port : ", PORT)})
dbConnect();


app.get("/",(req,resp)=>{
    resp.send(`<h1>This is home page </h1>`);
})
