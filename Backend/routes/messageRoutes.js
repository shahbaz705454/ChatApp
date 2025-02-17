const express = require("express");
const { route } = require("./authRoutes");
const router = express.Router();


const {sendMessage,getMessages} = require("../controllers/messageController");
const { protectRoute } = require("../middleware/protectRoute");



router.get("/:id",protectRoute,getMessages);
router.post("/send/:id",protectRoute,sendMessage);


module.exports =router;


