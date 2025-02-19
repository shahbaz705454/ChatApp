import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='border-r  w-[150px] md:w-[300px] border-slate-500 p-4 flex flex-col'>

        <SearchInput></SearchInput>

        <div className='divider px-3'></div>
        <Conversations/>
        <Logout/>
        

    </div>
  )
}

export default Sidebar