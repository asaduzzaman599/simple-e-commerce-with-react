import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../fierbase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {

    let signInWithGoogle,createUserWithEmailAndPassword, user, loading, error;
     [ createUserWithEmailAndPassword,user, loading, error] =useCreateUserWithEmailAndPassword(auth);
    
     [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const handleForm =(event)=>{
        event.preventDefault()
        
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmpassword.value
        console.log(email,password,confirmPassword)
        if(email && password){
            if(password===confirmPassword){
                createUserWithEmailAndPassword(email,password)
            }
        }
    }
    if(user){
        console.log(user)
    }
    const googlSignUp = ()=>{
        signInWithGoogle()
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
            <div className='input-group'><label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" name="confirmpassword" id="" />
            </div>
            
            <input type="submit" className='submit' value="Login" id="" />
            <p>Already have an account?  <Link to='/signin'>Login</Link></p>
        </form>
        <div className='or'>
            <div className='hr'></div>
             or 
             <div className='hr'></div>
        </div>
        <button onClick={googlSignUp}><img src='https://cdn.iconscout.com/icon/free/png-256/google-1772223-1507807.png' />Continue with Google</button>

    </div>
    );
};

export default SignUp;