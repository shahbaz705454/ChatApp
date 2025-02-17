const jwt = require('jsonwebtoken');

exports.generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '12h'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,  //prevent xss attack cross-site scripting attack
        sameSite: "strict" , //CSRF attack cross-site request forguery attacks
        secure:process.env.NODE_ENV !== "development"

    })
    }