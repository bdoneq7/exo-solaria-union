import React from 'react';
import './StarSystemsStyles.css';
import { GiSolarSystem } from "react-icons/gi";
import GClass from "../../assets/G Class.gif";
import Mercurian from "../../assets/mercurian.png";
import TerranHellish from "../../assets/terran hellish.png";
import Terran from "../../assets/terran earthlike.png";
import SubTerranBarren from "../../assets/sub terran barren.png";
import AsteroidBelt from "../../assets/Asteroid Belt 2.png";
import SuperJovian from "../../assets/Super Jovian.png";
import Jovian from "../../assets/Jovian.png";
import IceGiant from "../../assets/ice giant.png";
import KuiperBelt from "../../assets/Kuiper Belt.png";

const StarSystems = () => {
    return  (
        <div className='howitworks'>
          <div className='container'>
            <div className='content'>
                <h2><GiSolarSystem size='40' className='icon' alt="Star System List" title="Star System List" /><span> Star System</span> List</h2>
                <br/>
                        <img src={GClass} style={{ width: "15%", height: "15%" }} alt="Sol" title="Sol" />
                        <img src={Mercurian} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={TerranHellish} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={Terran} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={SubTerranBarren} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={AsteroidBelt} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={SuperJovian} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={Jovian} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={IceGiant} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={IceGiant} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                        <img src={KuiperBelt} style={{ width: "5%", height: "5%" }} alt="Earth" title="Earth" />
                    
                
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default StarSystems;