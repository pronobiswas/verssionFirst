import React, { useState } from 'react';
import './regestionStyle.css'
import { getDatabase, ref,set , onValue ,push} from "firebase/database";
import firebaseConfig from '../../Congigaration/FirebaseConfig';

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

  let [signUpValue , setSignUpValue] = useState([]);

  // ========HandleSingnUpInput========
  let signUpInput =(e)=> {
    let {name , value} = e.target;
  
    setSingUpInputValue({...signUpInputValue , [name] : value});
    
  };
  // ========HandleSingnUpInput Btn========
  // ========HandleSingnUpInput Btn========
  let handleSignUpBtn =()=> {

    const db = getDatabase();
    const starCountRef = ref(db, 'hori');

    if(signUpInputValue.signUpName == ""){
      setSignUpError({signUpName : "Name Fild is Required"});
    }
    if(signUpInputValue.signUpMail == ""){
      setSignUpError({signUpMail : "Name Fild is Required"});
    }
    
    let myarray = [...signUpValue];
    myarray.push({
      username : signUpInputValue.signUpName,
      usermali : signUpInputValue.signUpMail,
      passWord : signUpInputValue.signUpPass
    })
    setSignUpValue(myarray)

    set(push(ref(db, 'hori')), {
      Userdata : signUpInputValue
    });


    console.log(myarray);
    console.log(signUpInputValue);

  };


  return (
    <>
      <div id="regestionForm">
        <div className="container">
          <div className="signupWarpper">
            <h2>Sign Up</h2>

            <div className="signUpName">
              <input type="text" id='signUpName'name='signUpName' placeholder='Enter your name' onChange={signUpInput} value={signUpInputValue.signUpName}/>
              {signUpError.signUpName &&
                <p>{signUpError.signUpName}</p>
              }
            </div>

            <div className="signUpMail">
              <input type="email" id='signUpMail'name='signUpMail' placeholder='Enter your mail' onChange={signUpInput} value={signUpInputValue.signUpMail}/>
              {signUpError.signUpMail &&
                <p>{signUpError.signUpMail}</p>
              }
            </div>
            <div className="signUpPass">
              <input type="password" id='signUpPass'name='signUpPass' placeholder='enter your password' onChange={signUpInput} value={signUpInputValue.signUpPass}/>
              {signUpError.signUpPass &&
                <p>{signUpError.signUpPass}</p>
              }
            </div>

            <div className="SignUpConfirmPass">
              <input type="password" id='confirmSignUpPass'name='confirmSignUpPass' placeholder='enter your password' onChange={signUpInput}/>
            </div>
            <button onClick={handleSignUpBtn} id='signUpBtn'>signup</button>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default RegestionForm
