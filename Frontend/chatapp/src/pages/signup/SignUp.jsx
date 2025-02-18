import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",

  })

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const { loading, signup } = useSignup();
  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);

    setInputs({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })

  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
       backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
          <span className='text-blue-500 '>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>FullName</span>
            </label>
            <input value={inputs.fullName} required={true} onChange={handleChange} name='fullName' type='text' placeholder='John Doe' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input value={inputs.userName} required={true} onChange={handleChange} name='userName' type='text' placeholder='Enter username' className='w-full input input-bordered h-10'></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input value={inputs.password} required={true} onChange={handleChange} name='password' type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>

          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input value={inputs.confirmPassword} required={true} onChange={handleChange} name='confirmPassword' type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>

          </div>

          <div>
            <GenderCheckbox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} ></GenderCheckbox>


          </div>

          <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button className='btn  btn-block btn-sm mt-4'
            disabled={loading}>{loading ? "Loading..." : "SignUp"}</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default SignUp