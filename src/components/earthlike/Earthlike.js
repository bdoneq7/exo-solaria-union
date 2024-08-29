import React from 'react';
import { FaEarthAmericas } from "react-icons/fa6";
import './EarthlikeStyles.css';
import Earth from "../../assets/planetearth_small.png";
import Ross128 from "../../assets/planetross128_small.png";
import GJ1061two from "../../assets/planetgj1061II_small.png";
import GJ1061three from "../../assets/planetgj1061III_small.png";
import Teegarden1 from "../../assets/planetteegardenI_small.png";
import Teegarden2 from "../../assets/planetteegardenII_small.png";


const Earthlike = () => {
    return  (
        <div className='earthlike'>
            <div className='container'>
                <div className='content'>
                    <h2><FaEarthAmericas className='iconmain' /><span> Earth-Like</span> Planets</h2>
                    
                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Earth} alt="Earth" title="Earth" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Earth 
                    </div>

                    </div>       

                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Ross128} alt="Ross 128 I" title="Ross 128 I" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Ross 128 I - 10.9190 LY
                    </div>

                    </div>  

                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={GJ1061two} alt="GJ1061 II" title="GJ1061 II" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    GJ 1061 II - 11.9910 LY
                    </div>

                    </div>  

                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={GJ1061three} alt="GJ 1061 III" title="GJ 1061 III" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    GJ 1061 III - 11.9910 LY
                    </div>

                    </div>  

                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Teegarden1} alt="Teegarden I" title="Teegarden I" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Teegarden I - 12.5140 LY
                    </div>

                    </div> 

                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Teegarden2} alt="Teegarden II" title="Teegarden II" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Teegarden II - 12.5140 LY
                    </div>

                    </div> 


                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Ross128} alt="Gliese 876 Planet?" title="Gliese 876 Planet?" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Gliese 876 I or Gliese 876 II Moon - 15.2 LY<br/>
                    Grays?
                    </div>

                    </div> 


                    <div className='earthlikeplanet'>
                    
                    <div className='earthlikeplanetimage'>
                    <img src={Ross128} alt="Zeta Reticuli Planet?" title="Zeta Reticuli Planet?" />
                    </div>

                    <div className='earthlikeplanetdetails'>
                    Zeta Reticuli Planet? - 39.3 LY<br/>
                    Grays?
                    </div>

                    </div> 

                    

                    
                    
                </div>
            </div>

        </div>
    )
}

export default Earthlike;