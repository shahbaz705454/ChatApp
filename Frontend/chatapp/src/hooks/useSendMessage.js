import  { useState } from 'react'
import useConversations from '../store/useConversation'
import axios from 'axios';
import toast from 'react-hot-toast';


const useSendMessage = () => {
    const [loading ,setLoading] = useState(false);
    const {messages,setMessages ,selectedConversation} = useConversations();

    const sendMessage =async(message)=>{
        setLoading(true);
        console.log(selectedConversation._id)
        
        try{
            const resp = await axios.post(`/api/message/send/${selectedConversation._id}`,{
                message
            })
            // console.log("Messages that get ",resp);
            setMessages([...messages,resp.data.newMessage]);
        }catch(err){
            toast.error(err.message);
        }finally{
            setLoading(false);
        }

    }

    return{sendMessage,loading}


}

export default useSendMessage