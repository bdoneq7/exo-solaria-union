import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Logo from "../../assets/logowhite.png";
import { GiSolarSystem } from "react-icons/gi";
import { FaEarthAmericas } from "react-icons/fa6";
import { SiAlienware } from "react-icons/si";
import { ImRocket } from "react-icons/im";
import { IoPlanetSharp } from "react-icons/io5";
import { GrSolaris } from "react-icons/gr";
import { GiGalaxy } from "react-icons/gi";
import { GiMoonOrbit } from "react-icons/gi";
import { GiBlackHoleBolas } from "react-icons/gi";
import { IoStatsChart } from "react-icons/io5";
import { GiAlienBug } from "react-icons/gi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


import {Link} from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
    const [nav,setNav] =useState(false);
    const handleNav = () => setNav(!nav);

    return  (
        <div name='top' className='navbar'>
            <div className='container'>
                <div className='logo'>
                
                <Link to='/'>
                <img src={Logo} style={{ width: "20%", height: "20%"}} alt="Exo Solaria Union" title="Exo Solaria Union" />
                </Link>
                
                   
                    
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/arealiensreal'><SiAlienware size='33' className='icon' alt="Are Aliens Real - Yes or No" title="Are Aliens Real - Yes or No" /></Link></li>
                    
                    <li><Link to='/galaxystats'><IoStatsChart size='33' className='icon' alt="Milky Way Galaxy Stats" title="Milky Way Galaxy Stats" /></Link></li>
                    

                    <li><Link to='/galaxymap'><GiGalaxy size='38' className='icon' alt="Milky Way Galaxy Map" title="Milky Way Galaxy Map" /></Link></li>
                    
                    <li><Link to='/starsystems'><GiSolarSystem size='40' className='icon' alt="Star System List" title="Star System List" /></Link></li>
                    
                    <li><Link to='/earthlike'><FaEarthAmericas size='30' className='icon' alt="Earth-Like Planet List" title="Earth-Like Planet List" /></Link></li>
                    <li><Link to='/objects'><GiMoonOrbit size='35' className='icon' alt="Object Classes" title="Object Classes" /></Link></li>
                    
                    <li><Link to='/stars'><GrSolaris size='35' className='icon' alt="Star Classes" title="Star Classes" /></Link></li>
                    
                    <li><Link to='/planets'><IoPlanetSharp size='35' className='icon' alt="Planet Classes" title="Planet Classes" /></Link></li>
                    
                    <li><Link to='/aliens'><GiAlienBug size='31' className='icon' alt="Alien Species" title="Alien Species" /></Link></li>
                    <li><Link to='/spacetech'><ImRocket size='30' className='icon' alt="Space Tech Levels" title="Space Tech Levels" /></Link></li>
                    <li><Link to='/terms'><GiBlackHoleBolas size='35' className='icon' alt="Space Term Definitions" title="Space Term Definitions" /></Link></li>
                    <li><Link to='https://www.instagram.com/exosolariaunion/'><FaSquareInstagram size='35' className='icon' alt="Follow Us on Instagram" title="Follow Us on Instagram" /></Link></li>
                    <li><Link to='https://www.facebook.com/exosolariaunion/'><FaFacebook size='35' className='icon' alt="Like Us on Facebook" title="Like Us on Facebook" /></Link></li>
                    
                    
                </ul>

                <div className='hamburger'onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
                  
                </div>

            </div>

        </div>
    )
}

export default Navbar;