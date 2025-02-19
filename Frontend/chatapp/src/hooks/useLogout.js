

import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext';
import axios from 'axios';
import toast from 'react-hot-toast';


const useLogout = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL; // For Vite

    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout =async()=>{
        setLoading(true);
        const toastId = toast.loading("loading...")
        try{
            const resp =await axios.post(`${baseUrl}/api/auth/logout`);

            if(resp.error){
                throw new Error(resp.error)
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);



            toast.success("Logout Successfull");



        }catch(err){
            console.log(err);
            toast.error(err.message);

        }finally{
            setLoading(false);
            toast.dismiss(toastId);
            
        }
    }

    return{logout,loading};


}

export default useLogout