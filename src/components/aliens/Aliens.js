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
                    Humans Species<br/>
                    Biology: 5-7 foot tall bodies, various skin colors, proportionate heads, arms, and legs with hair, not generally telepathic<br/>
                    Origins: Earth in Sol Star System<br/>
                    Intent: Curious, Creative, War-Like 
                    </p>
                    <p>
                    Greys, J-Rod Species<br/>
                    Biology: Small, 3-4 foot tall thin humanoid bodies, smooth, grey-colored skin; enlarged, hairless heads; large, almond shaped black eyes,
                    small noses, lips, and ears, telepathic<br/>
                    Origins: Gliese 876 I, Gliese 876 II undiscovered Moon, or Zeta Reticuli undiscovered planet?<br/>
                    Intent: Unknown - Neutral? Negative?<br/>
                    Sources: Roswell, Betty and Barney Hill, Whitley Strieber, 
                    </p>
                    <p>
                    Pleiadian or Nordic Species<br/>
                    Biology: 6-7 foot tall humanoid bodies with long blond hair, blue eyes, fair skin, and telepathic<br/>
                    Origins: Planet in the Pleiades Star Cluster?<br/>
                    Intent: Unknown - Positive? Spiritual Growth?<br/>
                    Sources: Unknown
                    </p>
                    <p>
                    Reptilian Species<br/>
                    Biology: Unknown<br/>
                    Origins: Unknown<br/>
                    Intent: Unknown
                    Sources: Unknown
                    </p>
                    
                    
                </div>
        </div>
        </div>
    );
};

export default Aliens;