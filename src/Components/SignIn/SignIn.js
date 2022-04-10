import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'
const SignIn = () => {
    const handleForm = (event) => {
        event.preventDefault();

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
                
                <input type="submit" className='submit' value="Login" id="" />
                <p>New to Ema-john?  <Link to='/signup'>Create New Account</Link></p>
            </form>
            <div className='or'>
                <div className='hr'></div>
                 or 
                 <div className='hr'></div>
            </div>
            <button><img src='https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png' />Continue with Google</button>

        </div>
    );
};

export default SignIn;