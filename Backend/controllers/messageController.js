const User = require("../Model/user");
const Conversation = require("../Model/conversationModel");
const Message = require("../Model/messageModel");

exports.sendMessage = async (req, resp) => {
    try {
        const { id: receiverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        
        conversation.messages.push(newMessage._id);
        // await newMessage.save();
        // await conversation.save();

        await Promise.all([conversation.save(),newMessage.save()]);

        return resp.status(200).json({
            success: true,
            newMessage,
        });
    } catch (err) {
        return resp.status(500).json({
            success: false,
            message: `"message send failed" ${err.message}`,
        });
    }
};

exports.getMessages =async(req,resp)=>{
    try{

        const {id:userToChatId} =req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");

        if(!conversation){
            return resp.status(200).json([]);

        }

        return resp.status(200).json(conversation.messages);
           
        



    }catch(err){
        return resp.status(500).json({
            success: false,
            message: `"Get all Messages Failed" ${err.message}`,
        });

    }
}