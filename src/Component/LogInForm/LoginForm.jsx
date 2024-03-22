import React, { useState } from 'react'
import './loginStyle.css'

import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {

    let [userInput, setUserInput] = useState(" ")
    let handleLoginInput = (e)=>{
        setUserInput = e.target.value;
        console.log(e.target.value);
    };

    let handleloginBtn = ()=>{
        console.log(userInput);
    };
  return (
    <>
    <div className="loginMain">
      <div id="loginForm">
            <h2>Log In</h2>

            <div className="userMail">
                <span className='inputUserIconIcon'><FaRegUser /></span>
                <input onChange={handleLoginInput} type="text" placeholder='Enter your Email/UserName'/>
            </div>

            <div className="userPassword">
                <span className='inputPassIcon'><RiLockPasswordLine /></span>
                <input type="password" placeholder='Confirm your passWord'/>
            </div>
            
            <div className="loginHelp">
                <p>
                    <input type="checkbox" id='rememberMe'/>
                    <label htmlFor="rememberMe">remember me</label>
                </p>
                <p><a href="#">Forgot Account</a></p>
            </div>
            <button onClick={handleloginBtn} className='loginBtn'>Log in</button>
            <br />
            <p>Don't have account? <a href="#">Sign Up here</a></p>

            <div className="loginWith">
                <div className="loginWithGoogle">
                    <button className='loginWithGoogleBtn'>
                        <span><FcGoogle /></span>
                        <span>login with google</span>
                    </button>
                </div>
                <div className="loginWithFacebook">
                    <button className='loginWithFacebookBtn'>
                        <span className='facebookIcon'><FaSquareFacebook /></span>
                        <span>login with Facebook</span>
                    </button>
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default LoginForm
