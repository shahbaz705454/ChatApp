const express=  require("express");
const router = express.Router();


const {getUserForSidebar}= require("../controllers/userController");
const { protectRoute } = require("../middleware/protectRoute");

router.get("/",protectRoute,getUserForSidebar)

module.exports = router;