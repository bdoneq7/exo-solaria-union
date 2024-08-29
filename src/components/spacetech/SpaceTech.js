import React from 'react';
import './SpaceTechStyles.css';
import { TbUfo } from "react-icons/tb";

export const SpaceTech = () => {
    

    return  (
        <div className='spacetech'>
            <div className='container'>
            <div className='content'>
                    <h2><TbUfo className='iconmain' /><span> Alien / UAP Technology</span></h2>
                    <p>
                    Observable #1: Sudden and Instantaneous Acceleration
                    </p>
                    <p>
                    Observable #2: Hypersonic Velocities without Signatures
                    </p>
                    <p>
                    Observable #3: Low Observability
                    </p>
                    <p>
                    Observable #4: Trans-Medium Travel
                    </p>
                    <p>
                    Observable #5: Positive Life Resisting Gravity
                    </p>
                    <p>
                    Materials
                    </p>
                    <p>
                    Propulsion
                    </p>
                    <p>
                    Fuel (Element 115)
                    </p>
                    <p>
                    Blue Prints
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default SpaceTech;