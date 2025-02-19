import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../store/useConversation';
import useGetConversation from "../../hooks/useGetConversation"
import toast from 'react-hot-toast';


const SearchInput = () => {
 

  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
  

  const handleSubmit =(e)=>{
 
    e.preventDefault();
    if(!search)return;
    // console.log(search)
    if(search.length<3){
      return toast.error("Must be more than 3 Character");
    }

    const conversation = conversations.find((c)=> c.userName.toLowerCase().includes(search.toLowerCase()));
   
     
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');

    }else {toast.error("user not found!");}
     

  }
  return (
    
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search...' className='input input-bordered rounded-full'></input>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch className='w-5 h-5 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput