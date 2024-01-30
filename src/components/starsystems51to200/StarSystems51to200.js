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
import { IoIosNuclear } from "react-icons/io";
import { IoMdNuclear } from "react-icons/io";
import { GiSail } from "react-icons/gi";
import { GiDustCloud } from "react-icons/gi";
import { GiBubbles } from "react-icons/gi";
import { HiViewGrid } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import { TbGalaxy } from "react-icons/tb";
import SubBD from "../../assets/Sub BD Small.png";
import TClass from "../../assets/T Class  Smaller.png";
import LClass from "../../assets/L Class Medium.png";
import MClass from "../../assets/M Class Smaller.gif";
import KClass from "../../assets/K Class Small.gif";
import KClassGiant from "../../assets/K Class.gif";
import GClass from "../../assets/G Class Small.gif";
import AClass from "../../assets/A Class.gif";
import Mercurian from "../../assets/mercurian small.png";
import TerranHellish from "../../assets/terran hellish small.png";
import Terran from "../../assets/terran earthlike small.png";
import SuperTerran from "../../assets/super terran small.png";
import SubTerranBarren from "../../assets/sub terran barren small.png";
import AsteroidBelt from "../../assets/Asteroid Belt 2.png";
import SuperJovian from "../../assets/Super Jovian_small.png";
import Jovian from "../../assets/Jovian_small.png";
import SubNeptunian from "../../assets/Sub Neptunian Small.png";
import IceGiant from "../../assets/ice giant_small.png";
import KuiperBelt from "../../assets/Kuiper Belt.png";

const StarSystems51to200 = () => {
    return  (
        <div className='starsystems'>
          <div className='container'>
            <div className='content'>

            <div className='centered-labeltitle'>
                <GiSolarSystem size='70' className='iconmain' alt="Star System List" title="Star System List" /><h2><span className="titleblue">Star System List</span>   51 - 200 Light Years</h2>
            </div>

                <div className='navigationsection'>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems'>0 - 50 Light Years</Link></span>
                </div>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigationactive"><Link to='/starsystems51to200'> 51 - 200 Light Years</Link></span>
                </div>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 201 - 400 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 401 - 600 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 601 - 800 Light Years</span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> 801 - 1,000 Light Years</span>
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

              <div className='starsectiondoublewider'>
                  <img src={KClassGiant} alt="Epsilon Bootes A" title="Epsilon Bootes A" />
                  <div class="overlay-textkclass">Epsilon Bootes A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> K0II-III Class Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> Luminosity = 501</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> 7,730 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmoderate"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 13 %</span>
                </div>
                </div>


                <div className='starsection'>
                  <img src={AClass} alt="Epsilon Bootes B" title="Epsilon Bootes B" />
                  <div class="overlay-textaclass">Epsilon Bootes B </div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> A2V Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> Luminosity = 44.8</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> 15,756 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> ? Flares</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = ? Light Years</span>
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

      
              <div className='starsystemsection'>

                <div className='starsection'>
                  <img src={MClass} alt="Barnards Star" title="Barnards Star" />
                  <div class="overlay-textmclass">Barnards Star</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> M4V Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = 0.0035</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> 5,182 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> Extreme Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.10 %</span>
                </div>
                </div>

                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='17' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesubneptunian"> Sub Neptunian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={SubNeptunian} alt="Barnard I" title="Barnard I" />
                <div class="overlay-textsuperterran">Barnard I</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.40 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 233 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 3.2 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing"> Freezing</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                </div>

                

                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 5.9630 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = 77, 377 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = 120.00 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = 60.00 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = 30.00 Years</span>
                </div>

                </div>

              <div className='starsystemsection'>

                <div className='starsection'>
                  <img src={LClass} alt="Rigil Kentaurus A" title="Rigil Kentaurus A" />
                  <div class="overlay-textbrowndwarfl">Wise 1049-5319 A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> L7.5 Brown Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> 1,970 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={TClass} alt="Rigil Kentaurus B" title="Rigil Kentaurus B" />
                  <div class="overlay-textbrowndwarft">Wise 1049-5319 B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> T0.5 Brown Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> 1,718 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> Unknown</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 6.5200 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = 84, 605 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = 131.21 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = 65.60 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = 32.80 Years</span>
                </div>

                </div>
                    

              <div className='starsystemsection'>

                <div className='starsection'>
                  <img src={SubBD} alt="Rigil Kentaurus A" title="Rigil Kentaurus A" />
                  <div class="overlay-textbrowndwarfsubbd">Wise 0855-0714</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> Sub-BD Brown Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> 8 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> Unknown</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 7.5300 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = 97, 711 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = 151.53 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = 75.77 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = 37.88 Years</span>
                </div>

                </div>
                          

              <div className='starsystemsection'>

                <div className='starsection'>
                  <img src={MClass} alt="Rigil Kentaurus A" title="Rigil Kentaurus A" />
                  <div class="overlay-textmclass">Wolf 359</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> M6.5Ve Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = 0.0014</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> 4,580 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.25 %</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 7.7825 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = 100, 987 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = 156.61 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = 78.31 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = 39.15 Years</span>
                </div>

                </div>

                    
                
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default StarSystems51to200;