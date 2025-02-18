import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';



const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} =  useAuthContext();

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const toastId = toast.loading("Loading...");

        const success = handleInputErrors({ fullName, userName, password, confirmPassword, gender });
        if (!success) {
            toast.dismiss(toastId);
            return;
        }

        setLoading(true);
        try {
            console.log("Sending signup request...");
            const resp = await axios.post("/api/auth/signup", {
                fullName,
                userName,
                password,
                confirmPassword,
                gender
            });
            console.log("Response received:", resp.data.res);
            

            // local storage 
            localStorage.setItem("chat-user",JSON.stringify(resp.data.res))

            // set authcontext api
            setAuthUser(resp.data.res);

            toast.success("Signup successful!");

        } catch (err) {
            console.error("Signup error:", err);
            toast.error(err.response?.data?.message || "Signup failed");

        } finally {
            setLoading(false);
            toast.dismiss(toastId);
        }
    };

    return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({ fullName, userName, password, confirmPassword, gender }) => {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error("Please fill all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
};
