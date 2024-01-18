import React from 'react';
import './StarsStyles.css';
import { GrSolaris } from "react-icons/gr";

export const Stars = () => {
    

    return  (
        <div className='stars'>
            <div className='container'>
            <div className='content'>
                    <h2><GrSolaris className='iconmain' /><span> Star</span> Classes</h2>
                    <p>
                    Stars
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Stars;