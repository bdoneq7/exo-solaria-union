import React from 'react';
import {Link} from 'react-router-dom';
import './StarSystemsStyles.css';
import { GiSolarSystem } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { FaCircleRadiation } from "react-icons/fa6";
import { SiAlienware } from "react-icons/si";
import { FaCircle } from "react-icons/fa";
import { GrSolaris } from "react-icons/gr";
import { SiFireship } from "react-icons/si";
import { GiFlameSpin } from "react-icons/gi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaWeightHanging } from "react-icons/fa";
import { LuOrbit } from "react-icons/lu";
import { MdOutlineAir } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiFallingRocks } from "react-icons/gi";
import { FaVolcano } from "react-icons/fa6";
import { MdForest } from "react-icons/md";
import { GiSandstorm } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { GiEarthCrack } from "react-icons/gi";
import { BsCloudsFill } from "react-icons/bs";
import { GiIceCube } from "react-icons/gi";
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
import { TbGalaxy } from "react-icons/tb";
import { GiDustCloud } from "react-icons/gi";
import { GiBubbles } from "react-icons/gi";
import { HiViewGrid } from "react-icons/hi";
import { WiStars } from "react-icons/wi";
import SubBD from "../../assets/Sub BD Small.png";
import TClass from "../../assets/T Class  Smaller.png";
import LClass from "../../assets/L Class Medium.png";
import MClass from "../../assets/M Class Smaller.gif";
import KClass from "../../assets/K Class Small.gif";
import GClass from "../../assets/G Class Small.gif";
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

const StarSystems = () => {
    return  (
        <div className='starsystems'>
          <div className='container'>
            <div className='content'>

            <div className='centered-labeltitle'>
                <GiSolarSystem size='70' className='iconmain' alt="Star System List" title="Star System List" /><h2><span className="titleblue">Star System List</span>   0 - 50 Light Years</h2>
            </div>

                <div className='navigationsection'>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigationactive"> <Link to='/starsystems'>0 - 50 Light Years</Link></span>
                </div>
              <div className='centered-labelnavigation'>
                <WiStars size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyearsnavigation"><Link to='/starsystems51to200'> 51 - 200 Light Years</Link></span>
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
              
  {/* Sol Star System Start */}            
              <div className='starsystemsection'>

                {/* Sol Start */}
                <div className='starsection'>
                
                <img src={GClass} alt="Sol" title="Sol" />
                <div class="overlay-textgclass">Sol</div>

                <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G2V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 1.00</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,941 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmoderate"> Moderate Flares</span>
                </div>
                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.0122 %</span>
                </div>
                </div>
                {/* Sol End */}

                {/* Planet Mercury Start */}
                <div className='planetsection'>
                
                <div className='centered-label'>
                <GiFallingRocks size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassdesolate"> Desolate</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='9' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizemercurian"> Mercurian</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>
                <img src={Mercurian} alt="Mercury" title="Mercury" />
                <div class="overlay-textmercurian">Mercury</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.387 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 87.969 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 0.055 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> 0.38 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 3,032 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatehot"> Hot</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>
                {/* Planet Mercury End */}

                {/* Planet Venus Start */}
                <div className='planetsection'>
                <div className='centered-label'>
                <FaVolcano size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclasshellish"> Hellish</span>
                </div>
                <div className='centered-label'>
                <FaEarthAmericas size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeterran"> Terran</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>
                <img src={TerranHellish} alt="Venus" title="Venus" />
                <div class="overlay-textterran">Venus</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.723 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 224.701 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 0.815 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravityearthrelated"> 0.91 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetdiameterearthsimilar"> 7,520 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimateextremelyhot"> Extremely Hot</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>
                {/* Planet Venus End */}

                {/* Planet Earth Start */}
                <div className='planetsection'>
                <div className='centered-label'>
                <MdForest size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclasslush"> Lush</span>
                </div>
                <div className='centered-label'>
                <FaEarthAmericas size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeterran"> Terran</span>
                </div>
                <div className='centered-label'>
                <MdOutlineAir size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathable"> Breathable</span>
                </div>
                
                <img src={Terran} alt="Earth" title="Earth" />
                <div class="overlay-textterran">Earth</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzone"> 1.00 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzone"> 365.256 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmasstwin"> 1.00 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravityearthtwin"> 1.00 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetdiameterearthtwin"> 7,918 Miles</span>
                </div>
                
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatewarm"> Warm</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwateryes"> Liquid Water</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyes"> Humans</span>
                </div>
                </div>
                {/* Planet Earth End */}

                {/* Planet Mars Start */}
                <div className='planetsection'>
                <div className='centered-label'>
                <GiSandstorm size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassbarren"> Barren</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='12' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesubterran"> Sub Terran</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>

                <img src={SubTerranBarren} alt="Mars" title="Mars" />
                <div class="overlay-textsubterran">Mars</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzone"> 1.523 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 686.980 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 0.107 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> 0.38 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 4,220 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatecold"> Cold</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>
                {/* Planet Mars End */}
                        
                {/* Asteroid Belt Start */}        
                <div className='planetsection'>
                <img src={AsteroidBelt} alt="Earth" title="Earth" />
                <div class="overlay-textbelt">Asteroid Belt</div>
                <div className='centered-label'>
                <FaCircle size='7' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeasteroidan"> Asteroidan</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 2.2 - 3.2 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 2 Million +</span>
                </div>
                </div>   
                {/* Asteroid Belt End */}     
                
                {/* Planet Jupiter Start */}
                <div className='planetsection'>

                <div className='centered-label'>
                <BsCloudsFill size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassgasgiant"> Gas Giant</span>
                </div>
                <div className='centered-label'>
                <PiPlanetFill size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesuperjovian"> Super Jovian</span>
                </div>
                <div className='centered-labelbottom'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>
                <img src={SuperJovian} alt="Jupiter" title="Jupiter" />
                <div class="overlay-textsuperjovian">Jupiter</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 5.203 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 11.862 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 317.83 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> 2.40 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 177,692 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing"> Freezing</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>   
                {/* Planet Jupiter End */}       
                        
                {/* Planet Saturn Start */}        
                <div className='planetsection'>
                <div className='centered-label'>
                <BsCloudsFill size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassgasgiant"> Gas Giant</span>
                </div>
                <div className='centered-label'>
                <PiPlanetFill size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizejovian"> Jovian</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>
                
                <img src={Jovian} alt="Saturn" title="Saturn" />
                <div class="overlay-textjovian">Saturn</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 9.538 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 29.457 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 95.161 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravityearthrelated"> 0.91 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 74,898 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing"> Freezing</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>          
                {/* Planet Saturn End */}

                {/* Planet Uranus Start */}
                <div className='planetsection'>
                <div className='centered-label'>
                <GiIceCube size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassicegiant"> Ice Giant</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeneptunian"> Neptunian</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic</span>
                </div>
                
                <img src={IceGiant} alt="Uranus" title="Uranus" />
                <div class="overlay-textneptunian">Uranus</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 19.819 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 84.011 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 15.536 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravityearthrelated"> 0.90 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 31,518 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing"> Freezing</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>      
                {/* Planet Uranus End */}  

                {/* Planet Neptune Start */}
                <div className='planetsection'>
                <div className='centered-label'>
                <GiIceCube size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclassicegiant"> Ice Giant</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeneptunian"> Neptunian</span>
                </div>
                <div className='centered-label'>
                <FaCircleRadiation size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospheretoxic"> Toxic </span>
                </div>
                
                <img src={IceGiant} alt="Neptune" title="Neptune" />
                <div class="overlay-textneptunian">Neptune</div>
                
                <div className='centered-label'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 30.058 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 164.79 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 17.148 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravitynotsimilar"> 1.14 g</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetmassnotsimilar"> 30,598 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezing"> Freezing</span>
                </div>
                <div className='centered-label'>
                <GiEarthCrack size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwaterno"> Dry</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensno"> No Life</span>
                </div>
                </div>    
                {/* Planet Neptune End */}   
                        
                {/* Kuiper Belt Start */}        
                <div className='planetsection'>
                <img src={KuiperBelt} alt="Earth" title="Earth" />
                <div class="overlay-textbelt">Kuiper Belt</div>
                <div className='centered-label'>
                <FaCircle size='8' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeplutonian"> Plutonian</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 30 - 50 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 300,000 +</span>
                </div>
                </div>
                {/* Kuiper Belt End */}
              
              </div>
              {/* Sol Star System End */}
              

              {/* Sol Travel Start */}
              <div className='traveltimesection'>
              <div className='centered-label'>
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Sun Distance to Earth = 8.3 Light Minutes</span>
                </div>
                </div>
                {/* Sol Travel End */}

              {/* Sol Location Start */}
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
                {/* Sol Location End */}
          

              

              <div className='starsystemsection'>
              
                <div className='starsection'>
                  <img src={MClass} alt="Proxima Centauri" title="Proxima Centauri" />
                  <div class="overlay-textmclass">Proxima Centauri</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> M5.5 Class Sub Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> Luminosity = 0.0017</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmred"> 5,016 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassextreme"> Extreme Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.210 %</span>
                </div>
                </div>

                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='9' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesubterran"> Sub Terran</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={SubTerranBarren} alt="Proxima I" title="Proxima I" />
                <div class="overlay-textsubterran">Proxima I</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.028 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 5.122 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 0.200 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatehot"> Hot</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
         
                </div>

                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaEarthAmericas size='17' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizesubterran"> Super Terran</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={SuperTerran} alt="Proxima II" title="Proxima II" />
                <div class="overlay-textsuperterran">Proxima II</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 0.0485 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzone"> 11.2 Days</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 1.27 (EM)</span>
                </div>
                <div className='centered-label'>
                <BsDatabaseFillDown size='14' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <TbRulerMeasure size='16' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetunknown"> Est 8,710 Miles</span>
                </div>
                <div className='centered-label'>
                <FaTemperatureThreeQuarters size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatecold"> Cold</span>
                </div>
                <div className='centered-label'>
                <IoIosWater size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <SiAlienware size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
         
                </div>


                <div className='planetsection'>
                  </div>


                <div className='planetsection'>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <div className='centered-label'>
                <FaCircle size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeneptunian"> Neptunian</span>
                </div>
                <div className='centered-label'>
                <VscWorkspaceUnknown size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetunknown"> Unknown</span>
                </div>
                <img src={IceGiant} alt="Proxima III" title="Proxima III" />
                <div class="overlay-textsuperterran">Proxima III</div>

                <div className='centered-labeltop'>
                <CgArrowLongRightC size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 1.489 AU</span>
                </div>
                <div className='centered-label'>
                <LuOrbit size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancenohabzone"> 5.20 Years</span>
                </div>
                <div className='centered-label'>
                <FaWeightHanging size='13' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmassnotsimilar"> 12 (EM)</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance from Earth = 4.2421 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion Travel Time = 55,046 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion Travel Time = 85.37 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion Travel Time = 42.68 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion Travel Time = 21.34 Years</span>
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

              <div className='starsystemsection'>

                <div className='starsectiondouble'>
                  <img src={GClass} alt="Rigil Kentaurus A" title="Rigil Kentaurus A" />
                  <div class="overlay-textgclass">Rigil Kentaurus A</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> G2 Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> Luminosity = 1.5190</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassgyellow"> 9,962 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmoderate"> Moderate Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.20 %</span>
                </div>
                </div>

                <div className='starsection'>
                  <img src={KClass} alt="Rigil Kentaurus B" title="Rigil Kentaurus B" />
                  <div class="overlay-textgclass">Rigil Kentaurus B</div>
                  <div className='centered-label'>
                <GrSolaris size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> K1V Class Dwarf</span>
                </div>
                <div className='centered-label'>
                <BsFillBrightnessHighFill size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> Luminosity = 0.5002</span>
                </div>
                <div className='centered-labelbottom'>
                <SiFireship size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclasskorange"> 9,008 &deg; F</span>
                </div>
                <div className='centered-label'>
                <GiFlameSpin size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starclassmoderate"> Moderate Flares</span>
                </div>

                <div className='centered-label'>
                <GiMolecule size='18' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="starmetallicity"> Metallicity = 0.23 %</span>
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
                <MdRocketLaunch size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="lightyears"> Distance = 4.3650 Light Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiChemicalBolt size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Chemical Propulsion = 56, 641 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoIosNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fission Propulsion = 87.84 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <IoMdNuclear size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Fusion Propulsion = 43.92 Years</span>
                </div>

                <div className='centered-labeltraveltime'>
                <GiSail size='16' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="propulsion"> Solar Sail Propulsion = 21.96 Years</span>
                </div>

                </div>      


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

export default StarSystems;