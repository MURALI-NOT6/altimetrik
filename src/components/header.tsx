import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return <>
        <div className="headerSection">
            <div >
                <img className='logo' src={logo} alt='logo' />
            </div>
            <div className='menuList'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/contactUs'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </>
}

export default Header;