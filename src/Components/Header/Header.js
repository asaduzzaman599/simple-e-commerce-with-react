import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../fierbase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { signOut } from 'firebase/auth'
const Header = () => {
    const [user] = useAuthState(auth)
    const [proOpen, setProOpen] = useState(false)
    return (
        <div className='header'>
            <nav className='nav'>
                <img src={logo} alt="" />
                <div className='menu'>
                    <CustomLink to="/shop">Shop</CustomLink>
                    <CustomLink to="/order">Order</CustomLink>
                    <CustomLink to="/inventory">Manage Inventory</CustomLink>
                    {!user && <CustomLink to="/signin">SignIn</CustomLink>}
                    {user &&
                        <div onClick={() => setProOpen(!proOpen)} className='pro-img'>
                            <img src={user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-Bg8QfXje9z1PYGUphPTOXUJohGpxKOrbx-I8nF-DFgJhUEquvm5uZZD82Wylu_fqn0&usqp=CAU'} alt="" />
                            {
                                proOpen && <div className='pro-info'>
                                    <h5>{user.displayName}</h5>
                                    <button onClick={() => signOut(auth)}>SignOut</button>
                                </div>
                            }
                        </div>}
                </div>
            </nav>
        </div>
    );
};

export default Header;