import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/userContext';

const UserSignup = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    // const [userData,setUserData] = useState({});

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const {user , setUser} = React.useContext(UserDataContext);
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      const newUser = {
        firstname:firstName,
        lastname:lastName,
        email:email,
        password:password
      }
      console.log("USER DATA ==> ",newUser);
      console.log("ENV URL ==> ",import.meta.env.VITE_BASE_URL);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
      console.log("Response ===> ",response);
      if(response.status === 201){
        const data = response.data
        setUser(data.user)
        navigate('/login')
      }

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }

  return (
     <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-8' src='https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' alt=''/>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <h3 className='text-base font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
           <input value={firstName} onChange={(e)=>{
            setFirstName(e.target.value)
           }}
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' required type='text' placeholder='First name'/>
           
           <input value={lastName} onChange={(e)=>{
            setLastName(e.target.value)
           }}
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' required type='text' placeholder='Last name'/>
        </div>
        
        <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type='email' placeholder='email@example.com'/>
          
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
          <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} 
          className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type='password' placeholder='password'/>
          <button className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>Register</button>
        </form>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] leading'>This site is protected by reCAPATCH and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service apply.</span></p>
      </div>
    </div>
  )
}

export default UserSignup