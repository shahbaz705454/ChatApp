import React, { useRef,useEffect } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  // console.log("messages", messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
      
    }, 100);
   
  }, [messages])
  

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((item,idx) => (
        <div key={idx} ref={lastMessageRef}> 
          <Message  message={item} /> 
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => (
        <MessageSkeleton key={idx} />
      ))}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
