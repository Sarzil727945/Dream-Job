import React, { useContext, useState } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
     const [passwordShown, setPasswordShown] = useState(false);
     const [error, setError] = useState('');
     const [success, setSuccess] = useState('');
     const [email, setEmail] = useState("")
     const [emailError, setEmailError] = useState('')

     const { user, createUser, emailVerification} = useContext(AuthContext)

     // passwordShown function start 
     const [conformPasswordShown, setConformPasswordShown] = useState(false);
     const togglePassword = () => {
          setPasswordShown(!passwordShown);
     };
     const toggleConformPassword = () => {
          setConformPasswordShown(!conformPasswordShown);
     }
     // passwordShown function end

     // main form part start 
     const handelRegister = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          const conformPassword = form.conformPassword.value;

          if (password !== conformPassword) {
               setError("Don't mach this password")
               return
          }
          else if (!/(?=.*[A-Z])/.test(password)) {
               setError('At least one upper case')
               return
          }
          // Signed up part start
          createUser(email, password)
          .then((userCredential) => {
               const currentUser = userCredential.user;
               console.log(currentUser);
               setSuccess('Create user account successFull')
               form.reset()
               setEmail('')
               Verification()
               console.log(currentUser);
               upDataUser(currentUser, name)
             })
             .catch((error) => {
               const errorMessage = error.message;
               setError(errorMessage)
             });
             // Signed up part end
         
     }
     // main form part end 

     // emailVerification part start 
     const Verification = ()=>{
          emailVerification()
          .then(() => {
              alert('Verification your email')
             });
     }


     // valid email function start 
     const handelEmail = (event) => {
          const emailInput = event.target.value
          if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
               setEmailError('Please provide a valid email')
          }
          else {
               setEmailError('')
          }
          setEmail(emailInput)
     }
     // valid email function end

     const upDataUser = (user, name)=>{
          updateProfile(user, {
               displayName: name
          })
          .then(() => {
               // Profile updated!
               // ...
             }).catch((error) => {
               setError(error.message)
             });
     }

     return (
          <div className=' mt-5 pt-5'>
               <h1 className=' my-5 text-center'>This is Resister Page</h1>
               <div className=' col-lg-4 mx-auto '>
                    <Form onSubmit={handelRegister}>
                         <div className='border rounded px-5 py-4'>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Name</Form.Label>
                                   <Form.Control type="text" name='name' placeholder="Name" required />
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email" name='email'
                                        defaultValue={email}
                                        onChange={handelEmail}
                                        placeholder="Email" required />
                              </Form.Group>
                              {
                                   emailError && <span className=' text-danger pb-2'>{emailError}</span>

                              }
                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>
                                   <div className='parentPasswordShow position-relative'>
                                        <div>
                                             <Form.Control type={passwordShown ? "text" : "password"} name='password' placeholder="Password"
                                                  required />
                                        </div>
                                        <div className='passwordShow position-absolute'>
                                             <p className=' fs-5' onClick={togglePassword} ><AiFillEyeInvisible /></p>
                                        </div>
                                   </div>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPassword">
                                   <Form.Label>Conform Password</Form.Label>
                                   <div className='parentPasswordShow position-relative'>
                                        <div>
                                             <Form.Control type={conformPasswordShown ? "text" : "password"} name='conformPassword' placeholder="Conform Password" required />
                                        </div>
                                        <div className='passwordShow position-absolute'>
                                             <p className=' fs-5' onClick={toggleConformPassword}><AiFillEyeInvisible /></p>
                                        </div>
                                   </div>
                              </Form.Group>

                              <p className=' text-danger'>{error}</p>
                              <p className=' text-success'>{success}</p>
                              <div className="d-grid gap-2 mt-4">
                                   <Button variant="info" type="submit">
                                        Register
                                   </Button>
                                   <div>
                                        <small className='me-2'>Already have Account?</small>
                                        <Link to='/login'>Login</Link>
                                   </div>
                              </div>
                         </div>
                         {/* <div className="d-grid gap-2 my-5 col-6 mx-auto">
                                   <Button onClick={handelGoogleLogin} className="btn btn-success" type="button"> <span className=' fs-5 text-light'><ImGoogle2 /></span> Sign in with Google</Button>
                              </div> */}
                    </Form>
               </div>
          </div>
     );
};

export default Register;