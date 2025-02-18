import axios from 'axios';
import React, { useState,useEffect } from 'react'
import toast from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/user");
                // console.log("user side bar data", res.data);

              setConversations(res?.data);


            } catch (err) {
                toast.error(err.message);
                console.log(err);

            } finally {
                setLoading(false);
            }
        }

        getConversations();


    }, []);

    return {loading,conversations};



}

export default useGetConversation