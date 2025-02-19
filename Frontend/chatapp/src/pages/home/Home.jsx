import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-[600px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0 '>
      <Sidebar/>
      <MessageContainer/>
     </div>
  )
}

export default Home