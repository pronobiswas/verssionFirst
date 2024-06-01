import React from 'react'
import './loginStyle.css'
import { Button, Typography, styled } from '@mui/material';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const LoginForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <div id="login_form">
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
                     <span onClick={handleOpen}>forgot password?</span>
                  </div>
                     <p>
                      Dont Have Account ! <a href="#">SignUp here</a>
                     </p>
                </form>

                <div>        
                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        enter your recovery password
                      </Typography>
                      
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
                        <Button variant="contained" type='submit'>rest password</Button>
                    </Box>
                  </Modal>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default LoginForm
