const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../Model/user");

exports.protectRoute = async (req, resp, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return resp.status(403).json({
                error: "Unathorized - No token Provided"

            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return resp.status(403).json({
                error: "Unathorized - Invalid TOken"

            })

        }
        const user = await User.findById(decode.userId).select("-password");

        if (!user) {
            return resp.status(403).json({
                error: "User Not Found"

            })

        }
        req.user = user;

        next();


    } catch (err) {
        return resp.status(400).json({
            success:false,
            message:"authentication failed",err
        })

    }
}