import React from 'react';
import './SpaceTechStyles.css';
import { ImRocket } from "react-icons/im";

export const SpaceTech = () => {
    

    return  (
        <div className='spacetech'>
            <div className='container'>
            <div className='content'>
                    <h2><ImRocket className='iconmain' /><span> Alien / UAP Technology</span></h2>
                    <p>
                    5 Observables, Materials, Propulsion, Blueprints
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default SpaceTech;