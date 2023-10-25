import React from 'react'
import logo from '../images/logo.svg'
import '../App.css'
export default function login() {
  return (
    <div className='parent-login'>
      <div className='child-1'>
        <div className='logo-wrapper'>
        <img className='logo-img' src={logo} alt=""/>
        <h1 className='logo-text'>Movies App</h1>
        </div>
        <div className='login-area-headline'>
            <h1>Login to Your Account</h1>
            </div>
            <div className='login-area-wrapper'>
            <input className='email' type='text' placeholder='  Email'></input>
            <input className='email' type='password' placeholder='  Password'></input>
            <button className='button-login'>Sign In</button>
        </div>
        </div>
        <div className='child-2'>
            <div className='right-wrapper'>
            <h1 className='right-wrapper-text1'>New Here?</h1>
            <p className='right-wrapper-text2'>Sign up and discover sea of<br/><br/> top rated movies and shows!</p>
            <button className='right-wrapper-btn'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
