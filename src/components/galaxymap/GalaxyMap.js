import React from 'react';
import './GalaxyMapStyles.css';
import { GiGalaxy } from "react-icons/gi";
import MilkyWayMap from "../../assets/milkywaymap.jpg";


const GalaxyMap = () => {
    return  (
        <div className='clientportfolio'>
          <div className='container'>
            <div className='content'>
                <h2><GiGalaxy className='iconmain' /><span> Milky Way Galaxy</span> Map</h2>
                <br/>
                <img src={MilkyWayMap} style={{ width: "100%", height: "84%" }} alt="Nova Ash Artistry" title="Nova Ash Artistry" />
                  
                

                
                
            </div>

          </div>

          

          </div>

    )
}

export default GalaxyMap;