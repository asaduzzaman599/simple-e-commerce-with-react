import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='nav'>
            <img src={logo} alt="" />
            <div className='menu'>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/order">Order</CustomLink>
                <CustomLink to="/inventory">Manage Inventory</CustomLink>
                <CustomLink to="/signin">SignIn</CustomLink>
            </div>
            </nav>
        </div>
    );
};

export default Header;