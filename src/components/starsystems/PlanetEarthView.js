import React from 'react';
import './PlanetView.css';
import { GiRingedPlanet } from "react-icons/gi";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaFlag } from "react-icons/fa";
import { GiAlienBug } from "react-icons/gi";
import { BiWater } from "react-icons/bi";
import { GiGreenhouse } from "react-icons/gi";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { GiInterceptorShip } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiSunRadiations } from "react-icons/gi";
import { SiAlienware } from "react-icons/si";
import { GiPlanetCore } from "react-icons/gi";
import { FaBacteria } from "react-icons/fa6";
import { GiMoonOrbit } from "react-icons/gi";
import { GiMagnet } from "react-icons/gi";
import { RxRocket } from "react-icons/rx";
import { MdOutlineFilterTiltShift } from "react-icons/md";
import { GiUndergroundCave } from "react-icons/gi";
import { GiShieldReflect } from "react-icons/gi";
import { MdSocialDistance } from "react-icons/md";
import { GiScoutShip } from "react-icons/gi";
import { GiMetalBar } from "react-icons/gi";
import { BsBullseye } from "react-icons/bs";
import { SiConstruct3 } from "react-icons/si";
import { WiTornado } from "react-icons/wi";
import { LuMountain } from "react-icons/lu";
import { TbRotate2 } from "react-icons/tb";
import { GiMeshBall } from "react-icons/gi";
import { TbOvalVertical } from "react-icons/tb";
import { IoIosSpeedometer } from "react-icons/io";
import { FaUnlock } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GiOrbitalRays } from "react-icons/gi";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWeightHanging } from "react-icons/fa";
import { LuOrbit } from "react-icons/lu";
import { MdOutlineAir } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiSpaceship } from "react-icons/gi";
import { GiPolarBear } from "react-icons/gi";
import { TbArrowsDiagonal } from "react-icons/tb";
import { PiCircleHalfTiltFill } from "react-icons/pi";
import { GiFallingLeaf } from "react-icons/gi";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaVolcano } from "react-icons/fa6";
import { BsFillLayersFill } from "react-icons/bs";
import { MdForest } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { PiPlantDuotone } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { BsDatabaseFillDown } from "react-icons/bs";
import { GiMolecule } from "react-icons/gi";
import { CgArrowLongRightC } from "react-icons/cg";
import { MdRocketLaunch } from "react-icons/md";
import { GiChemicalBolt } from "react-icons/gi";
import { IoIosNuclear } from "react-icons/io";
import { IoMdNuclear } from "react-icons/io";
import { GiSail } from "react-icons/gi";
import { GiDustCloud } from "react-icons/gi";
import PlanetEarth from "../../assets/planetearth_medium.png";


const PlanetEarthView = () => {
    return  (
        <div className='planetview'>
          <div className='container'>
            <div className='content'>

            <div className='centered-labeltitle'>
                <FaEarthAmericas size='40' className='iconmain' alt="Planet Earth View" title="Planet Earth View" /><h2><span className="titleblue"> Planet Earth</span>   View</h2>
            </div>

            <div className='planetimage'>
            Earth - Sol Prime
            <img src={PlanetEarth} alt="Earth" title="Earth" />
            </div>

            



            <div className='planetdetails'>

            <div className='centered-label'>
                <MdForest size='35' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclasslushview"> Lush Planet Class</span>
            </div>

            <h3>Earth Travel Time</h3>
            <div className='centered-label'>
                <MdRocketLaunch size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Distance from Sol = 8.3 Light Minutes</span>
                </div>
                <div className='centered-label'>
                <GiChemicalBolt size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Chemical Propulsion Travel Time to Sol= ?</span>
                </div>

                <div className='centered-label'>
                <IoIosNuclear size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Fission Propulsion Travel Time to Sol = ?</span>
                </div>

                <div className='centered-label'>
                <IoMdNuclear size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Fusion Propulsion Travel Time to Sol = ?</span>
                </div>

                <div className='centered-label'>
                <GiSail size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Solar Sail Propulsion Travel Time to Sol = ?</span>
                </div>

            <h3>Earth Orbital Data</h3>
            <div className='centered-labeltop'>
                
                <CgArrowLongRightC size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzoneview"> <span className="planetgray">Orbital Perihelion Distance =</span> 0.9940 Astronomical Units from Sol (92,398,072 Miles)</span>
            </div>
            <div className='centered-label'>
                
                <CgArrowLongRightC size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzoneview"> <span className="planetgray">Orbital Average Distance =</span> 1.00 Astronomical Units from Sol (92,955,807 Miles)</span>
            </div>
            <div className='centered-label'>
                
                <CgArrowLongRightC size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzoneview"> <span className="planetgray">Orbital Aphelion Distance =</span> 1.0167 Astronomical Units from Sol (94,508,169 Miles)</span>
            </div>
            
            <div className='centered-label'>
                <FaUnlock size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzoneview"> Not Tidally Locked with Sol</span>
            </div>
            <div className='centered-label'>
                <BiWater size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetdistancehabzoneview"> Orbits within the Potential Liquid Water Zone</span>
            </div>
            <div className='centered-label'>
                <LuOrbit size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbits Sol in 365.25636 Days to complete 1 Year</span>
            </div>
            <div className='centered-label'>
                
                <TbOvalVertical size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbital Eccentricity (Perfect Circle Equals 0) = 0.01671123</span>
            </div>
            <div className='centered-label'>

                <TbArrowsDiagonal size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbital Inclination to Ecliptic = 0.00005 &deg;</span>
            </div>
            <div className='centered-label'>
                
                <IoIosSpeedometer size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray">Orbital Average Velocity = 66,622 Miles per Hour</span>
            </div>
            <div className='centered-label'>

                <PiCircleHalfTiltFill size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Axial Tilt = 23.4393 &deg;</span>
            </div>
            <div className='centered-label'>

                <TbRotate2 size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Rotates on its Axis in 23.934 Earth Hours to complete 1 Day</span>
            </div>
            
            <div className='centered-label'>

                <GiMoonOrbit size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting Moons = 1</span>
            </div>
            <div className='centered-label'>

                <GiRingedPlanet size='20' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> No Orbiting Ring System</span>
            </div>

            <h3>Earth Atmospheric Properties</h3>
            <div className='centered-label'>
                <MdOutlineAir size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Significant Breathable Atmosphere </span>
            </div>
            <div className='centered-label'>
                <GiMolecule size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="nitrogen"> Primary Component = 78.08% Nitrogen </span>
            </div>
            <div className='centered-label'>
                <GiMolecule size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="oxygen"> Second Component = 20.95% Oxygen </span>
            </div>
            <div className='centered-label'>
                <GiMolecule size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="argon"> Tertiary Component = 0.93% Argon </span>
            </div>
            <div className='centered-label'>
                <GiMolecule size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="carbondioxide"> 4th Component = 0.0395% Carbon Dioxide (Currently Rising) </span>
            </div>
            <div className='centered-label'>
                <GiMolecule size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="watervapor"> 5th Component = Variable 1% Water Vapor </span>
            </div>
            <div className='centered-label'>
                <GiSunRadiations size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Stellar Flux Energy from Sol = 1.00</span>
            </div>
            <div className='centered-label'>
                <GiShieldReflect size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Bond Albedo = 0.068 Reflected Light</span>
            </div>
            <div className='centered-label'>
                <GiMagnet size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Global Magnetic Field = 0.25 to 0.65 Gauss </span>
            </div>
            <div className='centered-label'>
                <BsFillLayersFill size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Ozone Layer Present</span>
            </div>
            
            <div className='centered-label'>
                <TbArrowBigDownLinesFilled size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetatmospherebreathableview"> Atmospheric Surface Pressure = 1.00 Bar</span>
            </div>
            <div className='centered-label'>
                <WiTornado size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Wind Speed Range = 0 to 320 Miles per Hour</span>
            </div>
            


            <h3>Earth Physical Structure</h3>
            <div className='centered-label'>
                <GiDustCloud size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> 4.453 Billion Years Old</span>
            </div>
            <div className='centered-label'>
                <FaEarthAmericas size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetsizeterranview"> Terran Size Major Planet</span>
            </div>
            <div className='centered-label'>
            
                <FaWeightHanging size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetmasstwinview"> 1.00 Earth Mass (5.9736 Sectillion Kilograms)</span>
            </div>
            <div className='centered-label'>
                <TbRulerMeasure size='25' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetdiameterearthtwinview"> 7,918 Mile Diameter</span>
            </div>
            <div className='centered-label'>
                <GiMeshBall size='25' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetdiameterearthtwinview"> Density = 5.52</span>
            </div>
            <div className='centered-label'>
                <BsDatabaseFillDown size='25' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgravityearthtwinview"> Surface Gravity = 1.00 g</span>
            </div>
            <div className='centered-label'>
                <RxRocket size='25' className="iconmain" alt="Diameter" title="Diameter" /><span className="planetgray"> Escape Velocity = 25,000 Miles per Hour</span>
            </div>
            <div className='centered-label'>
                <FaVolcano size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetvolcano"> Moderate Surface Volcanic Activity</span>
            </div>
            <div className='centered-label'>
                <MdOutlineFilterTiltShift size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="tectonicplatesyes"> Active Tectonic Plates creating 7 Continents</span>
            </div>
            <div className='centered-label'>
                <IoIosWater size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwateryesview"> Primary Surface Liquid = 71% Water Oceans and Frozen Water Glaciers</span>
            </div>
            <div className='centered-label'>
                <GiUndergroundCave size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetwateryesview"> Primary Sub-Surface Liquid = Water</span>
            </div>
            <div className='centered-label'>
                <LuMountain size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="tectonicplatesyes"> Surface Land = 29% </span>
            </div>
            <div className='centered-label'>
                <FaRegCircle size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetcrustsilicon"> Silicate Oceanic Rock Crust = 3 to 6 Miles Thick</span>
            </div>
            <div className='centered-label'>
                <FaRegCircle size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetcrustsilicon"> Silicate Continental Rock Crust = 20 to 50 Miles Thick</span>
            </div>
            <div className='centered-label'>
                <GiCrystalGrowth size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetcrustsilicon"> Primary Crust Mineral = 74.3% Silicates</span>
            </div>
            <div className='centered-label'>
                <GiMetalBar size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Secondary Crust Mineral = 8.23% Aluminum</span>
            </div>
            <div className='centered-label'>
                <GiMetalBar size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Tertiary Crust Mineral = 5.63% Iron</span>
            </div>
            <div className='centered-label'>
                <BsBullseye size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="mantle"> Solid and Semi-Molten Silicon and Aluminum Rock Mantle</span>
            </div>
            <div className='centered-label'>
                <GiPlanetCore size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetcoreiron"> Liquid Iron and Nickel Outer Core</span>
            </div>
            <div className='centered-label'>
                <GiPlanetCore size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetcoreiron"> Solid Iron and Nickel Inner Core</span>
            </div>
            

            
            

            <h3>Earth Climate Data</h3>
            <div className='centered-label'>
                <FaCloudSun size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatewarmview"> Warm Climate Class</span>
            </div>
            <div className='centered-label'>
                <FaTemperatureArrowDown size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatefreezingview"> Minimum Surface Temperature = -126 &deg;</span>
            </div>
            <div className='centered-label'>
                <FaTemperatureHalf size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatewarmview"> Average Surface Temperature = 57 &deg;</span>
            </div>
            <div className='centered-label'>
                <FaTemperatureArrowUp size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetclimatehotview"> Maximum Surface Temperature = 136 &deg;</span>
            </div>
            <div className='centered-label'>

                <GiGreenhouse size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="greenhousemoderate"> Greenhouse Effects = Moderate</span>
            </div>
            <div className='centered-label'>

                <GiFallingLeaf size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> 4 Planetary Seasons</span>
            </div>
            

            
            </div>


            <div className="planetimagebelow">

            <h3>Earth Life</h3>
            <div className='centered-label'>
                <FaBacteria size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyesview"> Micro Organisms</span>
            </div>
            <div className='centered-label'>
                <PiPlantDuotone size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyesview"> Plants</span>
            </div>
            <div className='centered-label'>
                <GiPolarBear size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyesview"> Animals</span>
            </div>
            <div className='centered-label'>
                <SiAlienware size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyesview"> Human Race = Humanoid</span>
            </div>
            
            <h3>Human Species</h3>
            <div className='centered-label'>
                <CgProfile size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetaliensyesview"> Human Traits = Curious, Creative, Warlike</span>
            </div>
            <div className='centered-label'>
                <FaPeopleGroup size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Human Population = 7.230 Billion</span>
            </div>
            <div className='centered-label'>
                <FaFlag size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Human Countries = 195</span>
            </div>
            <div className='centered-label'>
                <MdSocialDistance size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Human Lifespan = 80 to 100 Years</span>
            </div>
            <div className='centered-label'>
                <GiSpaceship size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="techlevel8"> Human Technology = Level 8</span>
            </div>

            <h3>Technology Orbitals</h3>
            <div className='centered-label'>
                <MdOutlineSatelliteAlt size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Active Orbiting Satellites = 1,500</span>
            </div>
            <div className='centered-label'>
                <GiOrbitalRays size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting Space Stations = 1 (ISS)</span>
            </div>
            <div className='centered-label'>
                <GiOrbitalRays size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting Space Colonies = 0</span>
            </div>
            <div className='centered-label'>
                <SiConstruct3 size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting Shipyards = 0</span>
            </div>
            <div className='centered-label'>
                <GiInterceptorShip size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting Sub-Light Starships = 0</span>
            </div>
            <div className='centered-label'>
                <GiScoutShip size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> Orbiting FTL Starships = 0</span>
            </div>

            <h3>Alien Diplomatic Relations</h3>
            <div className='centered-label'>
                <GiAlienBug size='25' className="iconmain" alt="Atmosphere" title="Atmosphere" /><span className="planetgray"> No Alien Contact</span>
            </div>

            </div>

                    
                
                <div>
                
                    
                
                    
                </div>
            </div>

          </div>

        </div>
    )
}

export default PlanetEarthView;