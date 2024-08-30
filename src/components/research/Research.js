import React from 'react';
import './ResearchStyles.css';
import { GiArchiveResearch } from "react-icons/gi";

export const Research = () => {
    

    return  (
        <div className='research'>
            <div className='container'>
            <div className='content'>
                    <h2><GiArchiveResearch className='iconmain' /><span> Alien / UFO / UAP</span> Researchers & Journalists</h2>
                    <p>
                    Ross Coulthart (Journalist)
                    </p>
                    <p>
                    Gary Nolan (Scientist)
                    </p>
                    <p>
                    Jeremy Corbel (Researcher)
                    </p>
                    <p>
                    Night Shift (YouTube Researcher)
                    </p>
                    <p>
                    Brian Done (Researcher)
                    </p>
                    
                   
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Research;