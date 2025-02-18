import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

const useLogin = () => {
    const [loading ,setLoading] = useState(false);
    const {setAuthUser}= useAuthContext();

    const login =async(userName,password)=>{
        setLoading(true);
        const toastId = toast.loading("loading...")

        try{
            const resp = await axios.post("/api/auth/login",{
                userName,
                password
            }) 
            // console.log("this is login data ", resp);
            localStorage.setItem("chat-user",JSON.stringify(resp.data));
            setAuthUser(resp.data);

            toast.success("Login Successfull")

            
        }catch(err){
            toast.error(err.response?.data?.message);
            console.log(err)


        }finally{
            setLoading(false);
            toast.dismiss(toastId);
        }


    }

    return {loading,login};
  
}

export default useLogin