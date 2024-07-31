import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    let isLogin = true
    return isLogin ? <Outlet /> : <Navigate replace to="/" />
}

export default Auth