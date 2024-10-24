import { SignIn } from '@clerk/clerk-react';
import './login.css'
import React from 'react'

const Login = () => {
  return (
    <div className='login'><SignIn path="/log-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard"/></div>
  )
}

export default Login;