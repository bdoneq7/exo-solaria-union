import React from 'react';
import './PlanetsStyles.css';
import { IoPlanetSharp } from "react-icons/io5";

export const Planets = () => {
    

    return  (
        <div className='planets'>
            <div className='container'>
            <div className='content'>
                    <h2><IoPlanetSharp className='iconmain' /><span> Planet</span> Classes</h2>
                    <p>
                    Planets
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Planets;