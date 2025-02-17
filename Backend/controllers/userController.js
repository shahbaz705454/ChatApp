const User =require("../Model/user");

exports.getUserForSidebar = async(req ,resp)=>{
    try{

        const loggedInUserId = req.user._id;
        
        const allUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");


        return resp.status(200).json(allUsers);

    }catch(err){
        return resp.status(500).json({
            success: false,
            message: `"Get all Messages Failed" ${err.message}`,
        });
    }


}