import React from 'react';
import './PortfolioStyles.css';
import { CgWebsite } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Portfolio = () => {
    return  (
        <div className='portfolio'>
          <div className='container'>
            <div className='content'>
                <h2><CgWebsite className='iconmain' /><span> Website</span> Portfolio</h2>
                <p>Creative Custom Web Sites that are designed to be Professional and Responsive using React and Modern CSS.<br/>
                  <br/>
                  Explore Brian's Portfolio of creative designs!
                </p>
                <div>
                
                    <button>
                    <Link to='/clientportfolio'>
                      Explore <FaArrowRightLong className='iconbutton' />
                    </Link>
                    </button>
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default Portfolio;