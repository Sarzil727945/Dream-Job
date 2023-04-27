import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const emailVerification = ()=>{
          return sendEmailVerification(auth.currentUser)
     }

     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(()=>{
          const unSubScript = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser)
               setLoading(false)
          })
          return () =>{
               unSubScript()
          }
     }, [])

     const logOut = () =>{
          return signOut(auth)
     }

     const resetPassword = (email)=>{
        return  sendPasswordResetEmail(auth, email)
     }

     const authInfo = {
          user,
          loading,
          createUser,
          emailVerification,
          signIn,
          logOut,
          resetPassword,
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