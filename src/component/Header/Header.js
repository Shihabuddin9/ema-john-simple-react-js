import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar-style'>
            <div className='container header d-flex align-items-center justify-content-between'>
                <img src={logo} alt="" />
                <div className='link-style'>
                    <a href="/Order">Order</a>
                    <a href="/Order-Review">Order Review</a>
                    <a href="/Manage-Inventory">Manage Inventory</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;