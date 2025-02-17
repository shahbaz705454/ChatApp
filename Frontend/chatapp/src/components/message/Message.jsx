import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
      <div className='chat-image avatar'>
        <div className='w-9 rounded-full' >
          <img src='https://cdn2.iconfinder.com/data/icons/avatars-60/5985/28-School_Girl-512.png' alt='user Image'></img>
        </div>

      </div>


      <div className={`chat-bubble text-white bg-blue-500 text-sm`}> Hi! What is upp?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:47</div>



    </div>
  )
}

export default Message