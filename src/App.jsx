import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { getLocalstorage, setLocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvide'

const App = () => {
  const[user , setUser]=useState(null)
  const[loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData]= useContext(AuthContext)
  useEffect(()=>{const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
setUser(userData.role) 
setLoggedInUserData(userData.data)     
    }
    
},[]);



  const handleLogin=(email,pass)=>{
    if(email=='admin@example.com' && pass=='123'){setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
else if(userData){
  const employee=userData.find((e)=>email==e.email && e.password==pass)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))}} 
  else{alert("invalid credentials")}
}



 
  return (
    <>
    {!user?    <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin'? <Admindashboard changeUser={setUser}/> :( user== 'employee'? <EmployeeDashboard  changeUser={setUser}a data={loggedInUserData}/> : null) }
    
  
        
    </>
      
  
  )
}

export default App
