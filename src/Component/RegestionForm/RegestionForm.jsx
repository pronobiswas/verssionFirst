import React from 'react'
import './regStyle.css'
import { Button } from '@mui/material';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

const RegestionForm = () => {
  const formik = useFormik({
    initialValues: {
      signInMail: '',
      SigninPass:'',
    },
    validationSchema: Yup.object({
        signInMail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
        SigninPass: Yup.string()
         .max(8, 'Must be 10 characters or less')
         .min(6, 'Must be 6 characters or much')
         .required('Required'),
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <>
      <div id="Reg_form">
        <div className="login_warpper">
            <div className="loginform">
                <form onSubmit={formik.handleSubmit}>
                    <h2 className='loginHeading'>
                      Verify Your Creadential
                    </h2>
                  <div className="signInputs">

                    <TextField 
                    fullWidth 
                    label="Standard" 
                    variant="standard"
                    id="signInMail"
                    name="signInMail"
                    type="signInMail"
                    onChange={formik.handleChange}
                    value={formik.values.signInMail}
                     />
                     {formik.touched.signInMail && formik.errors.signInMail ? (
                      <div>{formik.errors.signInMail}</div>
                    ) : null}
                     <TextField 
                    fullWidth 
                    label="Standard" 
                    variant="standard"
                    id="SigninPass"
                    name="SigninPass"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.SigninPass}
                     />
                     {formik.touched.SigninPass && formik.errors.SigninPass ? (
                      <div>{formik.errors.SigninPass}</div>
                    ) : null}

                  </div>
                  <div className="signBtn">
                     <Button 
                     variant="contained" 
                     color="success"
                     type='submit'>Sign In</Button>
                     <span>forgot password?</span>
                  </div>
                     <p>
                      Dont Have Account ! <a href="#">SignUp here</a>
                     </p>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default RegestionForm

