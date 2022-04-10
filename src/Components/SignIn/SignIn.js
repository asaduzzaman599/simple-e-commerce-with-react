import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../fierbase.init';
import './SignIn.css'
const SignIn = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    // let signInWithEmailAndPassword,signInWithGoogle,user, loading, error;
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    // [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const from = location?.state?.from?.pathname || '/'

    if(user){
        navigate(from);
    }
    if(error){
        console.log(error)
    }
    const handleForm = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
        if(email && password){
            console.log(email,password)
            signInWithEmailAndPassword(email,password)
        }
    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>SignIn</h3>

            <form onSubmit={handleForm}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className='input-group'><label htmlFor="email">Password</label>
                <input type="password" name="password" id="" />
                </div>
                {
                }
                <input type="submit" className='submit' value="Login" id="" />
                <p>New to Ema-john?  <Link to='/signup'>Create New Account</Link></p>
            </form>
            <div className='or'>
                <div className='hr'></div>
                 or 
                 <div className='hr'></div>
            </div>
            <button ><img src='https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png' />Continue with Google</button>

        </div>
    );
};

export default SignIn;