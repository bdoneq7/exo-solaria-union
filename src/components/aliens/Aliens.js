import React from 'react';
import './AliensStyles.css';
import { GiAlienBug } from "react-icons/gi";

export const Aliens = () => {
    

    return  (
        <div className='aliens'>
            <div className='container'>
            <div className='content'>
                    <h2><GiAlienBug className='iconmain' /><span> Alien</span> Species</h2>
                    <p>
                    Humans
                    </p>
                    <p>
                    Grays, J-Rods (origins, intent, biology)
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Aliens;