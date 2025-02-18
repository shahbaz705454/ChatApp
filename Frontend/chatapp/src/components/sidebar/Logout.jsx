import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const {logout} = useLogout();
  return (
    <div className='mt-auto'><TbLogout2 className='w-6 h-6 text-white cursor-pointer' 
    onClick={logout}/>
</div>
  )
}

export default Logout