import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';
import { useAuthContext } from '../../context/authContext';

const Logout = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className=' flex items-center  text-center pt-10 mt-6 gap-2'>
      <div className=' items-center flex'><TbLogout2 className='w-6 h-6 text-white cursor-pointer'
        onClick={logout} />

      </div>
      <div><img src={authUser.profilePic} width={40}></img></div>
    </div>
  )
}

export default Logout