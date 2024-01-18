import React from 'react';
import './AliensStyles.css';
import { SiAlienware } from "react-icons/si";

export const Aliens = () => {
    

    return  (
        <div className='aliens'>
            <div className='container'>
            <div className='content'>
                    <h2><SiAlienware className='iconmain' /><span> Alien</span> Species</h2>
                    <p>
                    Aliens
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Aliens;