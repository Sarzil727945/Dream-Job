import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)

     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const emailVerification = ()=>{
          return sendEmailVerification(auth.currentUser)
     }

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     

     const authInfo = {
          user,
          createUser,
          emailVerification,
          signIn,
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;