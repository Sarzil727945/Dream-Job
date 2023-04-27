import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')
     const [passwordShown, setPasswordShown] = useState(false);

     const { user, signIn} = useContext(AuthContext)

      // passwordShown function start 
          const togglePassword = () => {
               setPasswordShown(!passwordShown);
          };
      // passwordShown function end

     const handelLogin = (event) =>{
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
               setSuccess('Sign in successFull')
               form.reset()
               console.log(currentUser);
             })
             .catch((error) => {
               const errorMessage = error.message;
               setError(errorMessage)
             });
             // Signed in part end
     }

     return (
          <div className='mt-5 py-5'>
               <h1 className='my-5 text-center'>This is Login Page</h1>
               <div className=' col-lg-5 p-5 mx-auto'>
               <Form onSubmit={handelLogin}>
                         <div className='border rounded px-5 py-4'>

                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control type="email" name='email'
                                        placeholder="Email" required />
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
                                        <small className='me-2'>Please are you now?</small>
                                        <Link to='/'>Register</Link>
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

export default Login;