import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from "react-router-dom";
import { FaSpider } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { BsPersonHeart } from "react-icons/bs";
import { MdPolicy } from "react-icons/md";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {FiMail, FiInstagram, FiFacebook, FiLinkedin} from 'react-icons/fi';
import { IoLogoYoutube } from "react-icons/io";
import './FooterStyles.css';

const Footer = () => {
    return  (
        <div className='footer'>

            <div className="container">

                <div className="top">

                    <div className="logo-footer">
                    <h2> Exo Solaria Union</h2>
                     
                    </div>
                    <ScrollLink activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <BsFillArrowUpCircleFill className='icon' alt="Scroll to Top" title="Scroll to Top" />
                    </ScrollLink>
                </div>

                <div className="col-container">

                    <div className="col">
                        <h3><FaSpider className='icon' alt="8 Legged Freak Company" title="8 Legged Freak Company" /> Menu</h3>
                        <p><RouterLink to='/aboutbrian'>Link</RouterLink></p>
                        <p><RouterLink to='/clientportfolio'>Link</RouterLink></p>
                        <p><RouterLink to='/howitworks'>Link</RouterLink></p>
                        <p><RouterLink to='/contact'>Link</RouterLink></p>
                    </div>

                    <div className="col">
                        <h3><GrServices className='icon' alt="Services" title="Services" /> Menu</h3>
                        <p><RouterLink to='/servicespackages'>Link</RouterLink></p>
                        <p>Link</p>
                        <p><RouterLink to='/servicespackages'>Link</RouterLink></p>
                        <p><RouterLink to='/servicespackages'>Link</RouterLink></p>
                    </div>

                    <div className="col">
                        <h3><BsPersonHeart className='icon' alt="Clients" title="Clients" /> Menu</h3>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <div className="col">
                        <h3><MdPolicy className='icon' alt="General" title="General" /> Menu</h3>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                        <p>Link</p>
                    </div>

                    <form>
                        <h3><BiSolidPhoneCall className='icon' alt="Call Brian Today" title="Call Brian Today" /> Text</h3>
                        <h4><FaLocationDot className='icon' alt="Location" title="Location" /> Text</h4>
                        <br/>
                        
                        
                        
                        <RouterLink to='/contact'>
                        <FiMail className='mail-icon' alt="Click Here to Contact Brian" title="Click Here to Contact Brian" />
                        </RouterLink>

                        <h4><MdOutlineFollowTheSigns className='icon' alt="Follow 8 Legged Freak" title="Follow 8 Legged Freak" /> Text </h4>
                        <div className="social-group">
                            <FiLinkedin className='social-icon' alt="Linkedin" title="Linkedin"/>
                            <FiFacebook className='social-icon' alt="Facebook" title="Facebook"/>
                            <FiInstagram className='social-icon' alt="Instagram" title="Instagram"/>
                            <IoLogoYoutube className='social-icon' alt="YouTube" title="YouTube"/>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Footer;