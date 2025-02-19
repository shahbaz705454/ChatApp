import React from 'react'
import useConversations from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({item,emoji,lastIdx,}) => {

    const {selectedConversation, setSelectedConversation} = useConversations();

    const isSelected = selectedConversation?._id === item._id;
    const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(item._id);

    
    return (
        <>
            <div className={`flex gap-2 items-center text-sm md:text-lg hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
                ${isSelected? "bg-sky-500" : ""}`}
                onClick={()=>setSelectedConversation(item)}>
                <div className={`avatar ${isOnline ? "online" :""}`} >
                    <div className='w-6 md:w-12 rounded-full'>
                        <img src={item.profilePic} alt='profile pic'></img>
                    </div>

                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200 '>{item.userName}</p>
                        <span className='text-xl'>{emoji}</span>

                    </div>
                </div>
            </div>
            {
                !lastIdx && <div className='divider my-0 py-0 h-1'></div>
            }
            
        </>
    )
}

export default Conversation