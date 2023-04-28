import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext)
     if (loading) {
          return (<div className='mt-5 pt-5'>
               <div className="text-center mt-5 pt-5">
               <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
               </div>
          </div>
          </div>
          )
     }
    else if (user) {
          return children
     }
     return (
          <div>
               <Navigate to='/login' replace={true}></Navigate>
          </div>
     );
};

export default PrivateRoute;