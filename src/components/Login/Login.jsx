import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')
     const [passwordShown, setPasswordShown] = useState(false);
     const navigate = useNavigate()

     const location = useLocation()
     console.log(location);

     const from = location.state?.from?.pathname || '/home';
     console.log(from);
     
     const { user, signIn, resetPassword } = useContext(AuthContext)

     const emailRef = useRef()

     // passwordShown function start 
     const togglePassword = () => {
          setPasswordShown(!passwordShown);
     };
     // passwordShown function end

     // main form part start 
     const handelLogin = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target
          const email = form.email.value;
          const password = form.password.value;

          // Signed in part start
          signIn(email, password)
               .then((userCredential) => {
                    const currentUser = userCredential.user;
                    form.reset()
                    navigate(from, {replace: true})
                    if (!currentUser.emailVerified) {
                         alert('your email did not verification')
                         return
                    }
                    setSuccess('Sign in successFull')
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
          // Signed in part end
     }
     // main form part end

     // Reset Password part start 
     const handelResetPassword = () => {
          const email = emailRef.current.value;
          if (!email) {
               alert('Please provide your email')
               return
          }

          resetPassword(email)
               .then(() => {
                    alert('Please check you email')
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });

     }
     // Reset Password part end

     return (
          <div className='mt-5 py-5'>
               <h1 className='my-5 text-center'>This is Login Page</h1>
               <div className=' col-lg-4  mx-auto'>
                    <Form onSubmit={handelLogin}>
                         <div className='border rounded px-5 py-4'>

                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email" name='email'
                                        placeholder="Email" required 
                                        ref={emailRef} />
                              </Form.Group>

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

                              <p className=' text-danger'>{error}</p>
                              <p className=' text-success'>{success}</p>
                              <div className="d-grid gap-2 mt-4">
                                   <Button variant="info" type="submit">
                                        Login
                                   </Button>
                                   <div>
                                        <small>Create your new Password?</small>
                                        <button onClick={handelResetPassword} className='btn btn-link'>Reset Password</button>
                                   </div>
                                   <div>
                                        <small className='me-2'>Please are you now?</small>
                                        <Link to='/'>Register</Link>
                                   </div>
                              </div>
                         </div>
                    </Form>
               </div>
          </div>
     );
};

export default Login;