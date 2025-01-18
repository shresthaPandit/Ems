import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,pass);



      
        setemail('');
        setpass('');
      

        
    }
  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center'>

        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
      <form className="flex flex-col ite" onSubmit={(e)=>{submitHandler(e)}}>
         <input required value={email} onChange={(e)=>{setemail(e.target.value)}} className='text-white bg-transparent outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-400' type="email" placeholder='email' />
         <input required value={pass} onChange={(e)=>{setpass(e.target.value)}}  className='text-white bg-transparent outline-none text-xl border-2 border-emerald-600  mt-3 rounded-full py-3 px-5 placeholder:text-gray-400' type="password" placeholder='enter password' />
<button className='text-white mt-5 bg-emerald-600 outline-none text-xl border-none rounded-full py-3 px-5 placeholder:text-white'>login</button>
      </form></div>
    </div>
  )
}

export default Login
