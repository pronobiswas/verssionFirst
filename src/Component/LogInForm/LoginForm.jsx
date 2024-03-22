import React from 'react'
import './loginStyle.css'

import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";

const LoginForm = () => {
  return (
    <>
      <div id="loginForm">
            <h2>Log In</h2>
            <br />
            <input type="text" />
            <br />
            <input type="password" />
            <br />
            <div className="loginHelp">
                <p>
                    <input type="checkbox" id='rememberMe'/>
                    <label htmlFor="rememberMe">remember me</label>
                </p>
                <p><a href="#">Forgot Account</a></p>
            </div>
            <button className='loginBtn'>Log in</button>
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
    </>
  )
}

export default LoginForm
