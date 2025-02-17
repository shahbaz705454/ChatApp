const User = require("../Model/user");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/generateToken");

exports.login = async (req, resp) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });

        if (!user) {

            return resp.status(500).json({
                success: false,
                message: "Invalid User Name"
            })

        }
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || " ");

        if (!isPasswordCorrect) {
            return resp.status(500).json({
                success: false,
                message: "Invalid Password"
            })
        }

        generateTokenAndSetCookie(user._id,resp);
        
        
        return resp.status(200).json({
            success:true,
            _id:user._id,
            fullName: user.fullName,
            userName:user.userName
        })


    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: "Failed to login", err
        })
    }



}
exports.signup = async (req, resp) => {
    try {

        const { fullName, userName, password, confirmPassword, gender } = req.body;

        const user = await User.findOne({ userName });
        if (user) {
            return resp.status(403).json({
                success: false,
                message: "user is already Present"
            })
        }
        if (password !== confirmPassword) {
            return resp.status(403).json({
                success: false,
                message: "Password does not match"
            })

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`


        const newUser = new User({
            fullName,
            userName,
            password: hashPassword,
            profilePic: gender === "Male" ? boyProfile : girlProfile,
            gender
        })


        if (newUser) {

            await generateTokenAndSetCookie(newUser._id, resp)

            const res = await newUser.save();

            return resp.status(200).json({
                success: true,
                message: "user Created Successfull",
                res
            })

        }







    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: `Failed to signup ${err.message}`
        })
    }



}

exports.logout = async (req, resp) => {
    try {
       
        resp.cookie("jwt","" ,{maxAge:0});
        resp.status(200).json({
            success:true,
            message:"logout successfully"
        })


    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: "Failed to Logout", err
        })
    }



}