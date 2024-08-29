import React from 'react';
import {Link} from 'react-router-dom';
import '../starsystems/StarSystemsStyles.css';
import { GiSolarSystem } from "react-icons/gi";
import { SiAlienware } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { GrSolaris } from "react-icons/gr";
import { SiFireship } from "react-icons/si";
import { FaCircleRadiation } from "react-icons/fa6";
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
import BClass from "../../assets/B Class.gif";
import AClass from "../../assets/A Class.gif";
import GClass from "../../assets/G Class.gif";
import KClassGiant from "../../assets/K Class.gif";
import SuperJovianInferno from "../../assets/Super Jovian_small_inferno.png";
import SuperJovianExtremelyHot from "../../assets/Super Jovian_small_extremelyhot.png";
import WarmGiant from "../../assets/warm giant_small.png";

const StarSystems601to800 = () => {
    return  (
        <div className='starsystems'>
          <div className='container'>
            <div className='content'>

            <div className='centered-labeltitle'>
                <GiSolarSystem size='70' className='iconmain' alt="Star System List" title="Star System List" /><h2><span className="titleblue">Star System List</span>   601 - 800 Light Years</h2>
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

              <div className='starsectiondoublewider'>
                  <img src={KClassGiant} alt="Avior A" title="Avior A" />
                  <div class="overlay-textkclass">Avior A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> K3III Class Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> ? &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = ? %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={BClass} alt="Avior B" title="Avior B" />
                  <div class="overlay-textbclass">Avior B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> B2Vp Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> Luminosity = ?</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassbblue"> ? &deg; F</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 610.000 Light Years</span>
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
      {/* Epsilon Bootes System End */}             

      
      {/* Zaurak Start */}
              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={GClass} alt="HAT P-15" title="HAT P-15" />
                  <div class="overlay-textgclass">HAT P-15</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G5V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 1.00</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,771 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> ? Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.272 %</span>
                </div>
                </div>

                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Gas Giant ?</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesuperjovian"> Super Jovian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown </span>
                </div>
                
                <img src={SuperJovianExtremelyHot} alt="HAT P-15 I" title="HAT P-15 I" />
                <div class="overlay-textsuperjovian">HAT P-15 I</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.0964 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 10.86 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 1.946 (JM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 190,485 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimateextremelyhot"> Extremely Hot</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> Not Likely</span>
                </div>
                </div>    
                  

              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 617.500 Light Years</span>
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

                <div className='starsectiondouble'>
                  <img src={AClass} alt="Kelt 9" title="Kelt 9" />
                  <div class="overlay-textaclass">Kelt 9</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> A0 Class Sub Giant</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> Luminosity = 50</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassawhite"> 17,846 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassflareunknown"> Unknown</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.03 %</span>
                </div>
                </div>

                

                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Gas Giant ?</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesuperjovian"> Super Jovian</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic </span>
                </div>
                
                <img src={SuperJovianInferno} alt="Kelt 9 I" title="Kelt 9 I" />
                <div class="overlay-textsuperjovian">Kelt 9 I</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.0034 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 1.48 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 2.88 (JM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 336,015 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimateinferno"> Inferno</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> Not Likely</span>
                </div>
                </div>    
                  

                

                
              
              </div>

              <div className='traveltimesection'>
              <div className='centered-labeldistance'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 620.000 Light Years</span>
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
                    

              <div className='starsystemsectionhigher'>

                <div className='starsection'>
                  <img src={GClass} alt="Kepler 22" title="Kepler 22" />
                  <div class="overlay-textgclass">Kepler 22</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G5V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 0.79</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,613 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmoderate"> Moderate</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = - 0.255 %</span>
                </div>
                </div>

    
                <div className='planetsection'>
                
                </div>

                <div className='planetsection'>
                
                </div>

                
                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeneptunian"> Neptunian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown </span>
                </div>
                
                <img src={WarmGiant} alt="Kepler 22 I" title="Kepler 22 I" />
                <div class="overlay-textneptunian">Kepler 22 I</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzone"> 0.849 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 289.8623 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 34.92 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 19,003 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatewarm"> Warm</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 620.000 Light Years</span>
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

export default StarSystems601to800;