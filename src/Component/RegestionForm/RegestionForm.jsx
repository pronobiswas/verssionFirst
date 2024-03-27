import React, { useState } from 'react';
import './regestionStyle.css'

const RegestionForm = () => {
  let [signUpInputValue , setSingUpInputValue] = useState({
    signUpName : "" ,
    signUpMail : "" ,
    signUpPass : ""
  });

  let [signUpError , setSignUpError] = useState({
    signUpName : "" ,
    signUpMail : "" ,
    signUpPass : ""
  })
  // ========HandleSingnUpInput========
  let signUpInput =(e)=> {
    let {name , value} = e.target;
  
    setSingUpInputValue({...signUpInputValue , [name] : value});
    if(signUpInputValue.)
  };
  // ========HandleSingnUpInput========
  let handleSignUpBtn =()=> {
    if(!signUpInputValue.signUpName){
      console.log("nam dite hobe");
    };
  };


  return (
    <>
      <div id="regestionForm">
        <div className="container">
          <div className="signupWarpper">
            <h2>Sign Up</h2>

            <div className="signUpName">
              <input type="text" id='signUpName'name='signUpName' placeholder='Enter your name' onChange={signUpInput}/>
            </div>

            <div className="signUpMail">
              <input type="email" id='signUpMail'name='signUpMail' placeholder='Enter your mail' onChange={signUpInput}/>
            </div>
            <div className="signUpPass">
              <input type="password" id='signUpPass'name='signUpPass' placeholder='enter your password' onChange={signUpInput}/>
            </div>

            <div className="SignUpConfirmPass"></div>
            <button onClick={handleSignUpBtn} id='signUpBtn'>signup</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default RegestionForm
