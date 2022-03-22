import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <nav className='nav'>
            <img src={logo} alt="" />
            <div className='menu'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
            </div>
            </nav>
        </div>
    );
};

export default Header;