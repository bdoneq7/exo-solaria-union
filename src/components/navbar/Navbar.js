import React, {useState} from 'react';
import {SiDatabricks} from 'react-icons/si';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
    const [nav,setNav] =useState(false);
    const handleNav = () => setNav(!nav);

    return  (
        <div name='top' className='navbar'>
            <div className='container'>
                <div className='logo'>
                <SiDatabricks className='icon' />
                    <h1>Exo Solaria Union</h1>
                    
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Star Systems</Link></li>
                    <li><Link to='/cloud'>Earth-Like Planets</Link></li>
                    <li><Link to='/contact'>Alien Species</Link></li>
                    <button>Sign in</button>
                </ul>

                <div className='hamburger'onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                  
                </div>

            </div>

        </div>
    )
}

export default Navbar;