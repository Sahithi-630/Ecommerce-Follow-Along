import React, { useState } from 'react'
import "./login.css"
import axios from 'axios';

const Login = () => {
    const[loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    
    function handleInput(e){
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }

   async function handleLogin(event){
        event.preventDefault();
        if(loginData.email == ""){
            alert("Please enter email...");
            return;
        }

        if(loginData.password == ""){
            alert("Please enter password...")
            return;
        }

        try {
            const checkUser = await axios.post("http://localhost:8080/user//login",loginData);
            console.log(checkUser)
            localStorage.setItem("follow-along-auth-token",JSON.stringify(checkUser.data.token))
            alert("You are sucessfully logged in ")
        } catch (error) {
            console.log(error);
            alert("Something went wrong while logging in")
        }

        
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
