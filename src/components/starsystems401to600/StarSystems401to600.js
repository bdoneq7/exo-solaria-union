import React from 'react';
import {Link} from 'react-router-dom';
import '../starsystems/StarSystemsStyles.css';
import { GiSolarSystem } from "react-icons/gi";
import { SiAlienware } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { GrSolaris } from "react-icons/gr";
import { SiFireship } from "react-icons/si";
import { GiFlameSpin } from "react-icons/gi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaWeightHanging } from "react-icons/fa";
import { LuOrbit } from "react-icons/lu";
import { IoIosWater } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
import { BsDatabaseFillDown } from "react-icons/bs";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { GiMolecule } from "react-icons/gi";
import { CgArrowLongRightC } from "react-icons/cg";
import { MdRocketLaunch } from "react-icons/md";
import { GiChemicalBolt } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { IoIosNuclear } from "react-icons/io";
import { IoMdNuclear } from "react-icons/io";
import { GiSail } from "react-icons/gi";
import { GiDustCloud } from "react-icons/gi";
import { GiBubbles } from "react-icons/gi";
import { HiViewGrid } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import { TbGalaxy } from "react-icons/tb";
import MClass from "../../assets/M Class Smaller.gif";
import MClassGiant from "../../assets/M Class.gif";
import KClass from "../../assets/K Class Small.gif";
import KClassGiant from "../../assets/K Class.gif";
import GClass from "../../assets/G Class Small.gif";
import AClass from "../../assets/A Class.gif";
import BClass from "../../assets/B Class.gif";
import SuperJovian from "../../assets/Super Jovian_small.png";
import InfernoGiant from "../../assets/inferno giant_small.png";

const StarSystems401to600 = () => {
    return  (
        <div className='starsystems'>
          <div className='container'>
            <div className='content'>

            <div className='centered-labeltitle'>
                <GiSolarSystem size='70' className='iconmain' alt="Star System List" title="Star System List" /><h2><span className="titleblue">Star System List</span>   401 - 600 Light Years</h2>
            </div>

                <div className='navigationsection'>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems'>0 - 50 Light Years</Link></span>
                </div>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigationactive"><Link to='/starsystems51to200'> 51 - 200 Light Years</Link></span>
                </div>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems201to400'>201 - 400 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems401to600'>401 - 600 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems601to800'>601 - 800 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems801to1000'>801 - 1,000 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 1,001 - 2,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 2,001 - 3,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 3,001 - 4,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 4,001 - 5,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 5,001 - 10,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 10,001 - 20,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 20,001 - 40,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 40,001 - 60,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 60,001 - 80,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 80,001 - 100,000 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 100,001 + Light Years</span>
                </div>
                </div>
              
               


    {/* Epsilon Bootes System Start */}
              <div className='starsystemsectionhigher'>

              <div className='starsection'>
                  <img src={BClass} alt="Delta Centaurus" title="Delta Centaurus" />
                  <div class="overlay-textbclass">Delta Centaurus</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> B2IVne Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> Luminosity = 5,129</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> 39,788 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                


                
                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                No Planets Discovered
                </div>

              </div>
                    

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 410.000 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = ? Years</span>
                </div>

                </div>   

                <div className='galacticlocationsection'>
              <div className='centered-labeldistance'>
                <GiDustCloud size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Interstellar Cloud</span>
                </div>
              <div className='centered-labeldistance'>
                <GiBubbles size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Bubble</span>
                </div>
              <div className='centered-labeldistance'>
                <TbGalaxy size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Milky Way Orion-Cygnus Arm</span>
                </div>
                <div className='centered-labeldistance'>
                <HiViewGrid size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Galactic Quadrant 4</span>
                </div>
                </div>
      {/* Epsilon Bootes System End */}             

      
      {/* Zaurak Start */}
              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={BClass} alt="Segin" title="Segin" />
                  <div class="overlay-textbclass">Segin</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> B3V Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> Luminosity = 3,059</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> 27,213 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.28 %</span>
                </div>
                </div>

                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                No Planets Discovered
                </div>

              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 420.000 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = ? Years</span>
                </div>

                </div>

                <div className='galacticlocationsection'>
              <div className='centered-labeldistance'>
                <GiDustCloud size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Interstellar Cloud</span>
                </div>
              <div className='centered-labeldistance'>
                <GiBubbles size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Bubble</span>
                </div>
              <div className='centered-labeldistance'>
                <TbGalaxy size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Milky Way Orion-Cygnus Arm</span>
                </div>
                <div className='centered-labeldistance'>
                <HiViewGrid size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Galactic Quadrant 4</span>
                </div>
                </div>

   {/* Zaurak System End */}

              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={KClass} alt="J1407" title="J1407" />
                  <div class="overlay-textkclass">J1407</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> K5IV Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> Luminosity = 0.34</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> 7,460 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                

                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                No Planets Discovered
                </div>

                

                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 420.000 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = ? Years</span>
                </div>

                </div>

                <div className='galacticlocationsection'>
              <div className='centered-labeldistance'>
                <GiDustCloud size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Interstellar Cloud</span>
                </div>
              <div className='centered-labeldistance'>
                <GiBubbles size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Bubble</span>
                </div>
              <div className='centered-labeldistance'>
                <TbGalaxy size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Milky Way Orion-Cygnus Arm</span>
                </div>
                <div className='centered-labeldistance'>
                <HiViewGrid size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Galactic Quadrant 4</span>
                </div>
                </div>
                    

              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={BClass} alt="Lamda Centaurus" title="Homam" />
                  <div class="overlay-textbclass">Lamda Centaurus</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> B9III Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> Luminosity = 739</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> 17,324 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.41 %</span>
                </div>
                </div>

    
                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                No Planets Discovered
                </div>

                

                


                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 420.000 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = ? Years</span>
                </div>

                </div>

                <div className='galacticlocationsection'>
              <div className='centered-labeldistance'>
                <GiDustCloud size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Interstellar Cloud</span>
                </div>
              <div className='centered-labeldistance'>
                <GiBubbles size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Bubble</span>
                </div>
              <div className='centered-labeldistance'>
                <TbGalaxy size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Milky Way Orion-Cygnus Arm</span>
                </div>
                <div className='centered-labeldistance'>
                <HiViewGrid size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Galactic Quadrant 4</span>
                </div>
                </div>
                          

              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={BClass} alt="Gamma Lupus" title="Gamma Lupus" />
                  <div class="overlay-textbclass">Gamma Lupus</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> B2IV Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> Luminosity = 5,000</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> 37,160 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 420.000 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = ? Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = ? Years</span>
                </div>

                </div>

                <div className='galacticlocationsection'>
              
              <div className='centered-labeldistance'>
                <GiBubbles size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Local Bubble</span>
                </div>
              <div className='centered-labeldistance'>
                <TbGalaxy size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Milky Way Orion-Cygnus Arm</span>
                </div>
                <div className='centered-labeldistance'>
                <HiViewGrid size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Galactic Quadrant 4</span>
                </div>
                </div>

                    
                
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default StarSystems401to600;