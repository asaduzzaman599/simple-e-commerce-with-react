import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleForm =(event)=>{
        event.preventDefault()
    }
    return (
        <div className='form-container'>
        <h3 className='form-title'>SignUp</h3>

        <form onSubmit={handleForm}>
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
            </div>
            <div className='input-group'><label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
            </div>
            <div className='input-group'><label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" name="confirm-password" id="" />
            </div>
            
            <input type="submit" className='submit' value="Login" id="" />
            <p>Already have an account?  <Link to='/signin'>Login</Link></p>
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

export default SignUp;