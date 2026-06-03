import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {

    const isLogin=Boolean(localStorage.getItem('isAuthenticated'));
    
    if(isLogin){
        return children;
    }else {
        return <Navigate to='/login'/>
    }
}

export default ProtectedRoute
