import styled from "styled-components";
import "./BrowseStarSystems.css";
import { Link } from "react-router-dom";
import AStarImage from "../images/stars/a_class_star.png";
import FStarImage from "../images/stars/f_class_star.png";
import GStarImage from "../images/stars/g_class_star.png";
import KStarImage from "../images/stars/k_class_star.png";
import MStarImage from "../images/stars/m_class_star.png";
import LStarImage from "../images/stars/l_class_star.png";
import TStarImage from "../images/stars/t_class_star.png";
import SubStarImage from "../images/stars/subbd_class_star.png";
import WhiteDwarfStarImage from "../images/stars/whitedwarf_class_star.png";
import SolarFlareUnknown from "../images/icons/solarflare_unknown.png";
import SolarFlareModerate from "../images/icons/solarflare_moderate.png";
import SolarFlareStrong from "../images/icons/solarflare_strong.png";
import SolarFlareExtreme from "../images/icons/solarflare_extreme.png";
import AsteroidImage from "../images/asteroids/asteroid_belt_small.png";
import Blank from "../images/blank.png"
import SubTerran from "../images/planets/subterran_small.png";
import Terran from "../images/planets/terran_small.png";
import SuperTerran from "../images/planets/superterran_small.png";
import Neptunian from "../images/planets/neptunian_small.png";
import SubNeptunian from "../images/planets/subneptunian_small.png";
import Jovian from "../images/planets/jovian_small.png";
import SuperJovian from "../images/planets/superjovian_small.png";

const BreadCrumbs = styled.div`
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;

const StarTitle = styled.div`
`;

const StarDistance = styled.div`
color: #ffffff;
font-size: 20px;
margin-bottom: 30px;
padding-left: 15px;
font-family: verdana;
`;

const SystemNotes = styled.div`
color: #ffffff;
font-size: 12px;
margin-bottom: 40px;
font-family: verdana;
width: 100%;
height: 25px;
text-align: center;
`;


const StarSystemThree = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap: 15px;
padding-bottom: 25px;
`;

const StarArea = styled.div`
padding-left: 15px;
color: #ffffff;
font-size: 11px;
text-align: center;
`;

const PlanetArea = styled.div`
align-self: center; 
color: #ffffff;
font-size: 11px;
text-align: center;
`;



const TravelTime = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
padding-bottom: 5px;
border-bottom: 2px dashed #ffffff;
`;

const BrowseStarSystemsTwo = () => {

    


    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Browse Star Systems: 11 to 20 Light Years (? Total Stars and ? Total Planets, representing ? Star Systems, and ? multi-planetary systems)
        </BreadCrumbs>


        <div className="main-overview">

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems0to10" >0-10<br/> Light Years</Link></div>
                    
                  </div>

                  <div className="overviewcardcurrent">
                  
                    <div className="overviewcard__info">11-20<br/> Light Years</div>
                    
                  </div>

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems21to30" >21-30<br/> Light Years</Link></div>
                    
                  </div>

                  
                  <div className="overviewcard">
                    
                    
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems31to40" >31-40<br/> Light Years</Link></div>
                   
                  </div>
                  

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems41to50" >41-50<br/> Light Years</Link></div>
                    
                  </div>

                  

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems51to60" >51-60<br/> Light Years</Link></div>
                    
                  </div>

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems61to70" >61-70<br/> Light Years</Link></div>
                    
                  </div>

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems71to80" >71-80<br/> Light Years</Link></div>
                   
                  </div>

                  <div className="overviewcard">
                 
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems81to90" >81-90<br/> Light Years</Link></div>
                    
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems91to100" >91-100<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems101to125" >101-125<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems126to150" >126-150<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems151to175" >151-175<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems176to200" >176-200<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems201to400" >201-400<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems401to600" >401-600<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems601to800" >601-800<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems801to1000" >801-1,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems1000to2000" >1,000-2,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems2001to4000" >2,001-4,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems4001to6000" >4,001-6,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems6001to8000" >6,0001-8,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems8001to10000" >8,001-10,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems10001to25000" >10,001-25,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems25001to50000" >25,001-50,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems50001to75000" >50,001-75,000<br/> Light Years</Link></div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems75001to100000" >75,001-100,000<br/> Light Years</Link></div>
                  </div>

              </div>

         
           

        {/*WISE 0350-5658 System Start*/}  
        <StarTitle className="startitlebrown">WISE 0350-5658 Failed Star System</StarTitle>   
        <StarDistance>
        11.2080 Light Years Away From Earth (Equals 3.4363 Parsecs or 65.887 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        WISE 0350-5658
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        Brown SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
            
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The WISE 0350-5658 Failed Star System consists of 1 Failed Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlebrown">Travel Times to WISE 0350-5658 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 145,438 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 225.55 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 112.77 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 56.39 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*WISE 0350-5658 System End*/}  
        
        



        {/*EZ Aquarii System Start*/}  
        <StarTitle className="startitlered">EZ Aquarii Star System</StarTitle>   
        <StarDistance>
        11.2660 Light Years Away From Earth (Equals 3.4541 Parsecs or 66.228 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        EZ Aquarii A
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M5V Main Sequence Red Sub Dwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        
        </StarArea>

        <StarArea>
        EZ Aquarii B
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}} />
        M Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        EZ Aquarii c
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}} />
        M Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The EZ Aquarii Star System consists of 3 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to EZ Aquarii from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 146,190 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 226.71 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 113.36 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 56.58 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*EZ Aquarii System End*/}  



        {/*Procyon System Start*/}  
        <StarTitle className="startitlelightyellow">Procyon Star System</StarTitle>   
        <StarDistance>
        11.4020 Light Years Away From Earth (Equals 3.4958 Parsecs or 67.028 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Procyon A
        <img src={FStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "255px", height: "255px"}}/>
        F5V SubGiant<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        Procyon B
        <img src={WhiteDwarfStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}}/>
        DQZ White Dwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Procyon Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlelightyellow">Travel Times to Procyon from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 147,955 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 229.45 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 114.73 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 57.37 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Procyon System End*/}  


        {/*61 Cygni System Start*/}  
        <StarTitle className="startitleorange">61 Cygni Star System</StarTitle>   
        <StarDistance>
        11.4030 Light Years Away From Earth (Equals 3.4961 Parsecs or 67.033 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        61 Cygni A
        <img src={KStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "225px", height: "225px"}}/>
        K5V Main Sequence Orange Dwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        61 Cygni B
        <img src={KStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "225px", height: "225px"}} />
        K7V Main Sequence Orange Dwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The 61 Cygni Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitleorange">Travel Times to 61 Cygni from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 147,968 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 229.47 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 114.74 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 57.37 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*61 Cygni System End*/}  



      {/*Struve 2398 System Start*/}  
      <StarTitle className="startitlered">Struve 2398 Star System</StarTitle>   
        <StarDistance>
        11.5250 Light Years Away From Earth (Equals 3.5335 Parsecs or 67.751 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Struve 2398 A
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M3V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        Struve 2398 B
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M3.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Struve 2398 Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Struve 2398 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 149,551 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 231.93 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 115.96 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 57.98 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Struve 2398 System End*/}  


        {/*Gliese 15 System Start*/}  
        <StarTitle className="startitlered">Gliese 15 Star System</StarTitle>   
        <StarDistance>
        11.6240 Light Years Away From Earth (Equals 3.5639 Parsecs or 68.333 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Gliese 15 A
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M1.4V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareExtreme} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Extreme Solar Flares
        </StarArea>

        <StarArea>
        Gliese 15 B
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M4.1V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareExtreme} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Extreme Solar Flares
        </StarArea>

        <PlanetArea>
        Gliese 15 b<br/> Gliese 15 I<br/>
            0.0717 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        <br/>Very Hot<br/> SubNeptunian<br/>
        5.35 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
       
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        Gliese 15 c<br/> Gliese 15 II<br/>
            5.18 AU
        <img src={Jovian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "140px", height: "140px"}} />
        <br/>Freezing<br/>Jovian<br/>
        51.80 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Gliese 15 Star System consists of 2 Stars and 2 Major Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Gliese 15 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 150,836 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 233.92 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 116.96 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 58.48 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Gliese 15 Star System End*/}

        {/*Epsilon Indi System Start*/}  
        <StarTitle className="startitleorange">Epsilon Indi Star System</StarTitle>   
        <StarDistance>
        11.8240 Light Years Away From Earth (Equals 3.6252 Parsecs or 69.508 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Epsilon Indi A
        <img src={KStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "225px", height: "225px"}}/>
        K5V Main Sequence Orange Dwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        Epsilon Indi B
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "180px", height: "180px"}}/>
        T1 Brown Failed SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        Epsilon Indi C
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "180px", height: "180px"}}/>
        T6 Brown Failed SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        Epsilon b<br/> Epsilon I<br/>
            12.8 AU
        <img src={SuperJovian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "160px", height: "160px"}} />
        Freezing<br/> Super Jovian<br/>
        2.7 (JM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Epsilon Indi System consists of 3 Stars and 1 Major Planet.<br/> 
        <br/>
        <span className="traveltitleorange">Travel Times to Epsilon Indi from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 153,431 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 237.94 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 118.97 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 59.49 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Epsilon Indi System End*/} 


        {/*DX Cancri System Start*/}  
        <StarTitle className="startitlered">DX Cancri Star System</StarTitle>   
        <StarDistance>
        11.8260 Light Years Away From Earth (Equals 3.6258 Parsecs or 69.520 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        DX Cancri
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M6.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The DX Cancri Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to DX Cancri from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 153,457 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 237.98 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 118.99 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 59.50 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*DX Cancri System End*/} 



        {/*Tau Ceti System Start*/}  
        <StarTitle className="startitleyellow">Tau Ceti Star System</StarTitle>   
        <StarDistance>
        11.8870 Light Years Away From Earth (Equals 2.6445 Parsecs or 69.879 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Tau Ceti
        <img src={GStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "240px", height: "240px"}}/>
        G8.5V Main Sequence Yellow Dwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        

        <PlanetArea>
          
        Tau Ceti b<br/> Tau Ceti I<br/>
        0.133 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Very Hot<br/> Super Terran<br/>
        1.75 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        Tau Ceti c<br/> Tau Ceti II<br/>
        0.243 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Very Hot<br/> Super Terran<br/>
        1.83 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        
        Tau Ceti d<br/> Tau Ceti III<br/>
        0.538 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Hot<br/> SubNeptunian<br/>
        3.93 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea className="habzone">
        Tau Ceti e<br/> Tau Ceti IV<br/>
        1.334 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Cold<br/> SubNeptunian<br/>
        3.93 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        Asteroid Belt<br/>
            6.2 AU
        <img src={AsteroidImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}}  />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Tau Ceti Star System consists of 1 Star, 4 Major Planets, and 1 Asteroid Belt. Tau Ceti IV orbits in the potential liquid water zone. Does it have large Habitable Moons?<br/> 
        <br/>
        <span className="traveltitleyellow">Travel Times to Tau Ceti from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Tau Ceti System End*/} 



        {/*GJ 1061 System Start*/}  
        <StarTitle className="startitlered">GJ 1061 Star System</StarTitle>   
        <StarDistance>
        11.9910 Light Years Away From Earth (Equals 3.6764 Parsecs or 70.490 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        GJ 1061
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M5.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea>
        GJ 1061 b<br/> GJ 1061 I<br/>
        0.021 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Hot<br/> Super Terran<br/>
        1.38 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea className="habzone">
          
        GJ 1061 c<br/> GJ 1061 II<br/>
        0.035 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Warm<br/> Super Terran<br/>
        1.75 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea className="habzone">
        
        GJ 1061 d<br/> GJ 1061 III<br/>
        0.054 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Warm<br/> Super Terran<br/>
        1.68 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The GJ 1061 Star System consists of 1 Star and 3 Planets. GJ 1061 II and GJ 1061 III both orbit in the potential liquid water zone. Do these planets support life?<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to GJ 1061 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*GJ 1061 Star System End*/}



        {/*YZ Ceti System Start*/}  
        <StarTitle className="startitlered">YZ Ceti Star System</StarTitle>   
        <StarDistance>
        12.1320 Light Years Away From Earth (Equals 3.7196 Parsecs or 71.319 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        YZ Ceti
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M4.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareExtreme} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Extreme Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The YZ Ceti Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to YZ Ceti from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*YZ Ceti Star System End*/}


        {/*Luyten's Star System Start*/}  
        <StarTitle className="startitlered">Luyten's Star System</StarTitle>   
        <StarDistance>
        12.3660 Light Years Away From Earth (Equals 3.7822 Parsecs or 72.518 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Luyten's Star
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M3.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        

        <PlanetArea>
          
        Luyten b<br/> Luyten I<br/>
        0.0364 AU
        <img src={Terran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Hot<br/> Terran<br/>
        1.18 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea className="habzone">
        Luyten c<br/> Luyten II<br/>
        0.0911 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Warm<br/> SubNeptunian<br/>
        2.89 (EM)<br/>
        11,877 Miles
        </PlanetArea>

        <PlanetArea>
        Luyten d<br/> Luyten III<br/>
        0.712 AU
        <img src={Neptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "90px", height: "90px"}} />
        Freezing<br/> Neptunian<br/>
        10.8 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        Luyten e<br/> Luyten IV<br/>
        0.849 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Freezing<br/> SubNeptunian<br/>
        9.3 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Luyten's Star System consists of 1 Star and 4 Planets. Luyten's Star II orbits in the potential liquid water zone. Does it have large Habitable Moons?<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Luyten's Star from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Luyten's Star System End*/}  
        


        {/*Teegarden's Star System Start*/}  
        <StarTitle className="startitlered">Teegarden's Star System</StarTitle>   
        <StarDistance>
        12.5140 Light Years Away From Earth (Equals 3.8368 Parsecs or 73.565 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Teegarden's Star
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M6.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea className="habzone">
        Teegarden b<br/> Teegarden I<br/>
        0.0252 AU
        <img src={Terran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Warm<br/>Terran<br/>
        1.05 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea className="habzone">
        Teegarden c<br/> Teegarden II<br/>
        0.0443 AU
        <img src={Terran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Cold<br/>Terran<br/>
        1.11 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Teegarden's Star System consists of 1 Star, and 2 Major Planets. Teegarden's Star I and Teegarden's Star II both orbit in the potential liquid water zone. Are they home to life?<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Teegarden's Star from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Teegarden's Star System End*/}  



        {/*SCR 1845-6357 System Start*/}  
        <StarTitle className="startitlered">SCR 1845-6357 Star System</StarTitle>   
        <StarDistance>
        12.5710 Light Years Away From Earth (Equals 3.8542 Parsecs or 73.900 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        SCR 1845-6357 A
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M8.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        SCR 1845-6357 B
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "180px", height: "180px"}}/>
        T Brown SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The SCR 1845-6357 Star System consists of 1 Star, 1 Failed Star, and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to SCR 1845-6357 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*SCR 1845-6357 Star System End*/}


        {/*Kapteyn's Star System Start*/}  
        <StarTitle className="startitlered">Kapteyn's Star System</StarTitle>   
        <StarDistance>
        12.770 Light Years Away From Earth (Equals 3.9174 Parsecs or 75.111 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Kapteyn's Star
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M1V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea className="habzone">
            Kapteyn b<br/> Kapteyn I<br/>
            0.168 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Cold<br/> SubNeptunian<br/>
        4.8 (EM)<br/>
        11,877 Miles
        </PlanetArea>

        <PlanetArea>
        Kapteyn c<br/> Kapteyn II<br/>
            0.311 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Freezing<br/> SubNeptunian<br/>
        7.0 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Kapteyn's Star System consists of 1 Star and 2 Major Planets. Kapteyn's Star I orbits in the potential liquid water zone. Does it have large Habitable Moons?<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Kapteyn's Star from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Kapteyn's Star System End*/} 
        
        
        
        {/*Lacaille 8760 System Start*/}  
        <StarTitle className="startitlered">Lacaille 8760 Star System</StarTitle>   
        <StarDistance>
        12.8700 Light Years Away From Earth (Equals 3.9459 Parsecs or 75.657 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Lacaille 8760
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M0Ve Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          No Planets Discovered
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Lacaille 8760 Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Lacaille 8760 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = ? Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = ? Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Lacaille 8760 System End*/} 
         
        
        </BrowseBackground>
        
    
    );
};

export default BrowseStarSystemsTwo;