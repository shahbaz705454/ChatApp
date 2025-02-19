import React from "react";
import { useAuthContext } from "../../context/authContext";
import useConversations from "../../store/useConversation";

const Message = ({ message }) => {
  // console.log("inside message: ", message);

  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversations();

  // console.log("auth user",authUser);

  // Determine if the message is from the logged-in user
  const fromMe = message.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  // Determine the profile picture
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic 

  // Set bubble color based on sender
  const bubbleColor = fromMe ? "bg-blue-500" : "bg-gray-500"; // Add gray color for received messages

  // Convert timestamp to readable format
  const formattedTime = new Date(message.timestamp || Date.now()).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });


  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      {/* Profile Image */}
      <div className="chat-image avatar">
        <div className="md:w-10 w-7 rounded-full">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>

      {/* Message Bubble */}
      <div className={`chat-bubble w-fit text-white ${bubbleColor} ${shakeClass} text-sm h-fit`}>{message.message}</div>

      {/* Timestamp */}
      <div className="chat-footer opacity-50 text-[10px] md:text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
