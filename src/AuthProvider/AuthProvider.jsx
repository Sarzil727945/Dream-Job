import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null)
     const [loading, setLoading] = useState(true)

     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const googlCreateUser = ()=>{
          return signInWithPopup(auth, provider)
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
          googlCreateUser,
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