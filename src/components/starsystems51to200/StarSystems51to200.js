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
import TClass from "../../assets/T Class  Smaller.png";
import MClass from "../../assets/M Class Smaller.gif";
import GClass from "../../assets/G Class Small.gif";
import AClass from "../../assets/A Class.gif";
import FireGiant from "../../assets/fire giant_small.png";
import SuperJovian from "../../assets/Super Jovian_small.png";

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
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"><Link to='/starsystems201to400'> 201 - 400 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems401to600'>401 - 600 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"><Link to='/starsystems601to800'> 601 - 800 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"><Link to='/starsystems801to1000'> 801 - 1,000 Light Years</Link></span>
                </div>
                <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"> <Link to='/starsystems1001to2000'>1,001 - 2,000 Light Years</Link></span>
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
              
               


    {/* HR 8323 System Start */}
              <div className='starsystemsectionhigher'>

              <div className='starsection'>
                  <img src={GClass} alt="HR 8323" title="HR 8323" />
                  <div class="overlay-textgclass">HR 8323</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G2V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 10,160 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.15 %</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 51.000 Light Years</span>
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
      {/* HR 8323 System End */}             

      
      {/* Gliese 758 Start */}
              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={GClass} alt="Gliese 758 A" title="Gliese 758 A" />
                  <div class="overlay-textgclass">Gliese 758 A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G8V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,089 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 18 %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={TClass} alt="Gliese 758 B" title="Gliese 758 B" />
                  <div class="overlay-textgclass">Gliese 758 B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> T8 Brown Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbrowndwarf"> 620 &deg; F</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 51.400 Light Years</span>
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

   {/* Gliese 758 System End */}

              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={GClass} alt="104 Tauri" title="104 Tauri" />
                  <div class="overlay-textgclass">104 Tauri</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G4V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 2.41</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,830 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 22 %</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 51.800 Light Years</span>
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
                  <img src={GClass} alt="Gliese 777 A" title="Gliese 777 A" />
                  <div class="overlay-textgclass">Gliese 777 A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G6IV Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 1.127</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,946 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.20 %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={MClass} alt="Gliese 777 B" title="Gliese 777 B" />
                  <div class="overlay-textmclass">Gliese 777 B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> M4.5 Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                

                {/* Planet Gliese 777 I Start */}
                <div className='planetsection'>
                
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeneptunian"> Neptunian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={FireGiant} alt="Gliese 777 I" title="Gliese 777 I" />
                <div class="overlay-textneptunian">Gliese 777 I</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.1304 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 17.1110 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 19.05 (EM)</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimateextremelyhot">Extremely Hot</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unlikely</span>
                </div>
                </div>
                {/* Planet Gliese 777 I End */}

                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                
                </div>

                

                


                {/* Planet Gliese 777 II Start */}
                <div className='planetsection'>
                
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <PiPlanetFill size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesuperjovian"> Super Jovian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={SuperJovian} alt="Gliese 777 II" title="Gliese 777 II" />
                <div class="overlay-textsuperjovian">Gliese 777 II</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 4.01 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 7.98 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 1.56 (JM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing">Freezing</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unlikely</span>
                </div>
                </div>
                {/* Planet Gliese 777 II End */}


                

                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 51.800 Light Years</span>
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
                  <img src={AClass} alt="Castor A" title="Castor A" />
                  <div class="overlay-textaclass">Castor A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> A1V Class Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={MClass} alt="Castor B" title="Castor B" />
                  <div class="overlay-textmclass">Castor B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> dM1e Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={AClass} alt="Castor C" title="Castor C" />
                  <div class="overlay-textaclass">Castor C</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> Am Class Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={MClass} alt="Castor D" title="Castor D" />
                  <div class="overlay-textmclass">Castor D</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> dM1e Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={MClass} alt="Castor E" title="Castor E" />
                  <div class="overlay-textmclass">Castor E</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> dM1e Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={MClass} alt="Castor F" title="Castor F" />
                  <div class="overlay-textmclass">Castor F</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> dM1e Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>
                

                

                <div className='planetsection'>
                No Planets Discovered
                </div>

                

                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 52.000 Light Years</span>
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

                    
                
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default StarSystems51to200;