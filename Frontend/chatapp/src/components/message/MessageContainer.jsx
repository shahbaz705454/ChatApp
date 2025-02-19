import {React,useEffect} from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from "react-icons/ti"
import useConversations from '../../store/useConversation'
import { useAuthContext } from '../../context/authContext'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversations();
  // const {authUser} = useAuthContext();
  
  console.log("this is slected conversaions ",selectedConversation)
  
  useEffect(() => {
    // cleanup function
    setSelectedConversation(null)
    
    
    
  }, [setSelectedConversation]);
  
  
  return (
    <div className='md:min-w-[450px] flex flex-col'>

      {
        !selectedConversation ? <NoChatSelected/> :
        <>
        {/* Header */}
        <div className='bg-slate-500 flex gap-2 items-center px-4 py-2 mb-2'>
            <div><img src={selectedConversation.profilePic} width={30}></img></div>
            <span className='text-black underline font-bold'> {selectedConversation.userName}</span>
        </div>

        {/* Messages */}
        <Messages/>
        <MessageInput/>             
        </>
      }
        

    </div>
  )
}

export default MessageContainer;

const NoChatSelected =()=>{
  const {authUser} = useAuthContext();
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 <span className='text-yellow-500 md:text-2xl '>{authUser.fullName}</span> </p>
        <p>Select a chat to start messaging </p>
        <TiMessages className='text-2xl md:text-6xl text-center' />

      </div>
    </div>
  )
}