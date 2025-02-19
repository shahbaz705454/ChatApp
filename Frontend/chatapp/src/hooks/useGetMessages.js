import React, { useEffect, useState } from 'react';
import useConversations from '../store/useConversation';
import axios from 'axios';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`/api/message/${selectedConversation._id}`);
                setMessages(res.data);

            } catch (err) {
                toast.error(err.message); 
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();

    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};

export default useGetMessages;
