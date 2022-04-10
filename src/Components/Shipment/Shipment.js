import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../fierbase.init';

const Shipment = () => {

    const [user] = useAuthState(auth)
    const handleForm = (event) =>{
        event.preventDefault();
    }
    return (
       
        <div className='form-container'>
        <h3 className='form-title'>SignUp</h3>

        <form onSubmit={handleForm}>
        <div className='input-group'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
            </div>
            
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" value={user.email} readOnly />
            </div>
            <div className='input-group'>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="" />
            </div>
            <div className='input-group'>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="" />
            </div>
            <input type="submit" className='submit' value="Login" id="" />
            
        </form>
       

    </div>
    );
};

export default Shipment;