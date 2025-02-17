const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User",

        }
    ],
    messages: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Message",
            default: [],


        }
    ],

}, { timestamps: true })

module.exports = mongoose.model("Conversation", conversationSchema);