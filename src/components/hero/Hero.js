import React from 'react';
import './HeroStyles.css';
import AlienContact from "../../assets/aliencontact.mp4";


const Hero = () => {
    return  (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                <h2><span>Exo Solaria </span> Union</h2>
                    
        
                    <p>
                    The Exo Solaria Union is dedicated to providing an accurate visual display of the stars and planets in the
                    Milky Way Galaxy based upon current astronomical data, in an effort to identify where alien civilizations exist,
                    how to establish contact with these alien civilizations, and identify exo-planets that humanity can colonize
                    in the future. 
                    <br/>
                    <br/>
                    We are also dedicated to uncovering the truth about UFO/UAP on Earth, in relation to crashed
                    alien spacecraft that are in the possession of the United States government and Defense Contractors, the United States 
                    legacy reverse engineering program dedicated to researching captured alien spacecraft, and also the specific alien
                    species that piloted these spacecraft, and our relations with these alien species.
                    </p>
                    <br/>

                    <video src={AlienContact} width="100%" height="400" loop muted autoPlay controls />
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;
