import React from 'react'
import Conversation from './Conversation'

import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading,conversations}= useGetConversation();
  // console.log("this is conversation ",conversations);
  // console.log(loading)
  return (
    <div className='py-2 flex flex-col gap-2 overflow-auto'>
        
        {
          conversations.map((item,idx)=>{
            return(
             
                < Conversation key={item._id} item={item} 
                emoji={getRandomEmoji()}
                lastIdx={idx===conversations.length-1}/>
              
            )
          })
        }
        
    </div>
  )
}

export default Conversations