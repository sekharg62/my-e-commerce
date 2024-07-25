import React from 'react'
import './CSS/LoginSignup.css'
export default function LoninSignup() {
  return (
    <div className='loginsignup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className="login">Already have an account?<span>Login</span></p>
        <div className="agree">
          <input type="checkbox" name='' id=' ' />
          <p>By continuning,i agree to the terms of use & privacy policy;</p>
        </div>
      </div>

    </div>
  )
}
