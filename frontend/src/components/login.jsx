import React, { useState } from 'react'
import "./login.css"

const Login = () => {
    const[loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    
    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

    function handleLogin(event){
        event.preventDefault();
        if(loginData.email == ""){
            alert("Please enter email...");
            return;
        }

        if(loginData.password == ""){
            alert("Please enter password...")
            return;
        }

        alert("You are sucessfully logged in ")
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <lable htmlFor="">Email</lable>
            <input type="email" value={loginData.email} name='email' onChange={handleInput} placeholder='Email...'/>
            <lable>password</lable>
            <input type="password" value={loginData.password} name="password" onChange={handleInput} placeholder='password...'/>
            <input type="submit" />
      </form>
    </div>
  )
}

export default Login
