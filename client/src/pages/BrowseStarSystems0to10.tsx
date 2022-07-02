import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./BrowseStarSystems.css";
import { Link } from "react-router-dom";
import AStarImage from "../images/stars/a_class_star.png";
import GStarImage from "../images/stars/g_class_star.png";
import KStarImage from "../images/stars/k_class_star.png";
import KStarImageTest from "../images/stars/k_class_star_test.png";
import MStarImage from "../images/stars/m_class_star.png";
import LStarImage from "../images/stars/l_class_star.png";
import TStarImage from "../images/stars/t_class_star.png";
import SubStarImage from "../images/stars/subbd_class_star.png";
import WhiteDwarfStarImage from "../images/stars/whitedwarf_class_star.png";
import SolarFlareUnknown from "../images/icons/solarflare_unknown.png";
import SolarFlareModerate from "../images/icons/solarflare_moderate.png";
import SolarFlareStrong from "../images/icons/solarflare_strong.png";
import SolarFlareExtreme from "../images/icons/solarflare_extreme.png";
import MercuryImage from "../images/planets/mercury_small.png";
import VenusImage from "../images/planets/venus_small.png";
import EarthImage from "../images/planets/earth_small.png";
import MarsImage from "../images/planets/mars_small.png";
import AsteroidImage from "../images/asteroids/asteroid_belt_small.png";
import JupiterImage from "../images/planets/jupiter_small.png";
import SuperJovian from "../images/planets/superjovian_small.png";
import UranusImage from "../images/planets/uranus_small.png";
import SaturnImage from "../images/planets/saturn_small.png";
import NeptuneImage from "../images/planets/neptune_small.png";
import Neptunian from "../images/planets/neptunian_small.png";
import SubNeptunian from "../images/planets/subneptunian_small.png";
import KuiperImage from "../images/kuiper/kuiper_belt_small.png";
import OortImage from "../images/oort/oort_cloud_small.png";
import Blank from "../images/blank.png"
import SubTerran from "../images/planets/subterran_small.png";
import SuperTerran from "../images/planets/superterran_small.png";

interface Article {
    id: string,
    title: string,
    imageUrl: string,
    content: string,
}

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

const StarSystem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap: 15px;
padding-bottom: 25px;
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

const CardsContainer = styled.div`
padding: 4rem 0;
display: flex;
color: #000000;
`;

const Card = styled.div`
height: 30rem;
width: 32%;
box-shadow: 0.1rem 0.1rem 1rem #ffffff;
background-color: #ffffff;
padding: 2rem;
border-radius: 2rem;
margin-right: 5rem;

`;

const Header = styled.h2`
margin-top: 1rem;
font-size: 1.5rem;
`;

const Content = styled.p`
`;

const Image = styled.img`
width: 100%;
height: 20rem;
border-radius: 2rem;
`;

const TravelTime = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
padding-bottom: 5px;
border-bottom: 2px dashed #ffffff;
`;

const BrowseStarSystems = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const { data: response } = await axios.get("http://localhost:8080/articles");
        setArticles(response);
    };


    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Browse Star Systems: 0 to 10 Light Years (20 Total Stars and 15 Total Planets, representing 15 Star Systems, and 3 multi-planetary systems)
        </BreadCrumbs>


        <div className="main-overview">

                  <div className="overviewcardcurrent">
                  
                    <div className="overviewcard__info">0-10<br/> Light Years</div>
                    
                  </div>

                  <div className="overviewcard">
                  
                    <div className="overviewcard__info"><Link to="/BrowseStarSystems11to20" >11-20<br/> Light Years</Link></div>
                    
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

         {/*Sol Star System Start*/}     

        <StarTitle className="startitleyellow">Sol Star System</StarTitle>
        <StarDistance>
        The Sun is 8.3 Light Minutes or 92,398,072 Miles from Earth on Average<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy
        </StarDistance>
           

        <StarSystem>
        
        <StarArea>
            Sol
        <img src={GStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "240px", height: "240px"}}/>
        G2V Main Sequence Yellow Dwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea>
        Mercury<br/>
        Sol I<br/>
        0.387 AU
        <img src={MercuryImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "25px", height: "25px"}} />
        
        <br/>
        Hot Mercurian
        0.055 (EM)<br/>
        3,032 Miles
        </PlanetArea>

        <PlanetArea>
            Venus<br/>
            Sol II<br/>
            0.723 AU
        <img src={VenusImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Extremely Hot Terran<br/>
        0.815 (EM)<br/>
        7,520 Miles
        </PlanetArea>

        <PlanetArea className="habzone">
            Earth<br/>
            Sol III<br/>
            1.000 AU
        <img src={EarthImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Warm<br/> Terran<br/>
        1.000 (EM)<br/>
        7,918 Miles
        </PlanetArea>
        

        <PlanetArea className="habzone">
            Mars<br/>
            Sol IV<br/>
            1.523 AU
        <img src={MarsImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "40px", height: "40px"}} />
        Cold SubTerran<br/>
        0.107 (EM)<br/>
        4,220 Miles
        </PlanetArea>

        <PlanetArea>
            Asteroid Belt<br/>
            2.2 to 5.2 AU
        <img src={AsteroidImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}}  />
        
        </PlanetArea>

        <PlanetArea>
            Jupiter<br/>
            Sol V<br/>
            5.203 AU
        <img src={JupiterImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "160px", height: "160px"}} />
        Freezing Super Jovian<br/>
        317.83 (EM)<br/>
        177,692 Miles
        </PlanetArea>

        <PlanetArea>
            Saturn<br/>
            Sol VI<br/>
            9.538 AU
        <img src={SaturnImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "280px", height: "140px"}} />
        Freezing Jovian<br/>
        95.161 (EM)<br/>
        74,898 Miles
        </PlanetArea>

        <PlanetArea>
            Uranus<br/>
            Sol VII<br/>
            19.819 AU
        <img src={UranusImage} alt="Browse Star Systems" title="Browse Star Systems"style={{color: "#ffffff", width: "90px", height: "90px"}} />
        Freezing Neptunian<br/>
        15.536 (EM)<br/>
        31,518 Miles
        </PlanetArea>

        <PlanetArea>
            Neptune<br/>
            Sol VIII<br/>
            30.058 AU
        <img src={NeptuneImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "90px", height: "90px"}} />
        Freezing Neptunian<br/>
        17.148 (EM)<br/>
        30,598 Miles
        </PlanetArea>

        <PlanetArea>
            Kuiper Belt<br/>
            40 to 700 AU
        <img src={KuiperImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}} />
        </PlanetArea>

        <PlanetArea>
            Oort Cloud<br/>
            2,000 to 100,000 AU<br/>
            <br/>
        <img src={OortImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "200px"}} />
        </PlanetArea>
        <br/>
        <br/>
        
        </StarSystem>
        <SystemNotes>
        The Sol Star System consists of 1 Star, 8 Major Planets, 5 Dwarf Planets, 1 Asteroid Belt, 1 Kuiper Belt, and 1 Oort Cloud. Earth and Mars orbit in the Potential Liquid Water Zone. Earth is the only Habitable Planet.<br/>
        <br/>
        <span className="traveltitleyellow">Travel Times to the Sun from Earth</span>
        </SystemNotes>

        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 1 Earth Year</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 56 Earth Days</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 28 Earth Days</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 14 Earth Days</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Sol Star System End*/}  
        



        {/*Proxima Centauri System Start*/}  
        <StarTitle className="startitlered">Proxima Centauri Star System</StarTitle>   
        <StarDistance>
        4.2421 Light Years Away From Earth (Equals 1.3006 Parsecs or 24.937 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
            Proxima Centauri
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M5.5 Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareExtreme} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Extreme Solar Flares
        </StarArea>

        <PlanetArea>
            Proxima b<br/> Proxima I<br/>
            0.028 AU
        <img src={SubTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "40px", height: "40px"}} />
        <br/>Hot<br/> SubTerran<br/>
        0.200 (EM)<br/>
        ? Miles
        </PlanetArea>

        <PlanetArea className="habzone">
            Proxima c<br/> Proxima II<br/>
            0.0485 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Cold <br/>Super Terran<br/>
        1.3 (EM)<br/>
        8,710 Miles
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>

        <PlanetArea>
          
        Proxima d <br/>Proxima III<br/>
        1.489 AU
        <img src={Neptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "90px", height: "90px"}} />
        Freezing Neptunian<br/>
        12 (EM)<br/>
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
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Proxima Centauri Star System consists of 1 Star and 3 Major Planets. Proxima c orbits in the Potential Liquid Water Zone, indicated by a green background.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Proxima Centauri from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 55,046 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 85.37 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 42.68 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 21.34 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Proxima Centauri System End*/}  
        
        



        {/*Rigil Kentaurus System Start*/}  
        <StarTitle className="startitleyellow">Rigil Kentaurus Star System (Formerly Alpha Centauri)</StarTitle>   
        <StarDistance>
        4.3650 Light Years Away From Earth (Equals 1.3383 Parsecs or 25.660 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
            Rigil Kentaurus A
        <img src={GStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "240px", height: "240px"}}/>
        G2 Main Sequence Yellow Dwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        
        </StarArea>

        <StarArea>
            Rigil Kentaurus B
        <img src={KStarImageTest} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "225px", height: "225px"}} />
        K1V Main Sequence Orange Dwarf
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
        The Rigil Kentaurus Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitleyellow">Travel Times to Rigil Kentaurus from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 56,641 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 87.34 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 43.92 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 21.96 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Rigil Kenetaurus System End*/}  



        {/*Barnard's Star System Start*/}  
        <StarTitle className="startitlered">Barnard's Star System</StarTitle>   
        <StarDistance>
        5.9630 Light Years Away From Earth (Equals 1.8282 Parsecs or 35.054 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
            Barnard's Star
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M4V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea>
            Barnard b<br/> Barnard I<br/>
            0.40 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Freezing<br/> Sub Neptunian<br/>
        3.2 (EM)<br/>
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
        The Barnard's Star System consists of 1 Star and 1 Major Planet.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Barnard's Star from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 77,377 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 120 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 60 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 30 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Barnard's Star System End*/}  


        {/*WISE 1049-5319 System Start*/}  
        <StarTitle className="startitlebrown">WISE 1049-5319 Failed Star System</StarTitle>   
        <StarDistance>
        6.5200 Light Years Away From Earth (Equals 1.999041 Parsecs or 38.328 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        WISE 1049-5319 A
        <img src={LStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "195px", height: "195px"}}/>
        L7.5 Brown Failed SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        WISE 1049-5319 B
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "180px", height: "180px"}} />
        T0.5 Brown Failed SubDwarf
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
        The WISE 1049-5319 System consists of 2 Failed Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlebrown">Travel Times to WISE 1049-5319 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 84,605 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 131.21 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 65.60 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 32.80 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*WISE 1049-5319 System End*/}  



      {/*WISE WISE 0855-0714 System Start*/}  
      <StarTitle className="startitlebrown">WISE 0855-0714 Failed Star System</StarTitle>   
        <StarDistance>
        7.5300 Light Years Away From Earth (Equals 2.308708 Parsecs or 44.266 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        WISE 0855-0714
        <img src={SubStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "160px", height: "160px"}}/>
        Sub-BD Brown Failed SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
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
        The WISE 0855-0714 System consists of 1 Failed Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlebrown">Travel Times to WISE 0855-0714 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 97,711 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 151.53 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 75.77 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 37.88 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*WISE 0855-0714 System End*/}  


        {/*Wolf Star System Start*/}  
        <StarTitle className="startitlered">Wolf 359 Star System</StarTitle>   
        <StarDistance>
        7.7825 Light Years Away From Earth (Equals 2.3861 Parsecs or 45.740 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
            Wolf 359
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M6.5Ve Main Sequence Red SubDwarf<br/><br/>
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
        The Wolf 359 Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Wolf 359 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 100,987 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 156.61 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 78.31 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 39.15 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Wolf 359 Star System End*/}

        {/*Lalande 21185 System Start*/}  
        <StarTitle className="startitlered">Lalande 21185 Star System</StarTitle>   
        <StarDistance>
        8.2905 Light Years Away From Earth (Equals 2.5418 Parsecs or 48.736 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Lalande 21185
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M2.1Ve Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea>
            Lalande b<br/> Lalande I<br/>
            0.0695 AU
        <img src={SubNeptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "95px", height: "95px"}} />
        Hot<br/> Sub Neptunian<br/>
        3.8 (EM)<br/>
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
        The Lalande 21185 System consists of 1 Star and 1 Major Planet.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Lalande 21185 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 107,579 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 166.84 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 83.42 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 41.71 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Lalande 21185 System End*/} 


        {/*Sirius System Start*/}  
        <StarTitle className="startitlewhite">Sirius Star System</StarTitle>   
        <StarDistance>
        8.5828 Light Years Away From Earth (Equals 2.6314 Parsecs or 50.455 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Sirius A
        <img src={AStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "270px", height: "270px"}}/>
        A1V SubGiant<br/><br/>
        <img src={SolarFlareExtreme} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Extreme Solar Flares
        </StarArea>

        <StarArea>
        Sirius B
        <img src={WhiteDwarfStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        DA2 White Dwarf
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
        The Sirius Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlewhite">Travel Times to Sirius from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 111,372 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 172.72 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 86.36 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 43.18 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Sirius System End*/} 



        {/*Luyten 726-8 System Start*/}  
        <StarTitle className="startitlered">Luyten 726-8 Star System</StarTitle>   
        <StarDistance>
        8.7280 Light Years Away From Earth (Equals 2.6760 Parsecs or 51.308 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Luyten 726-8 A
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M5.5V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        Luyten 726-8 B
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}} />
        M6V Main Sequence Red SubDwarf
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
        The Luyten 726-8 Star System consists of 2 Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Luyten 726-8 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 113,256 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 175.64 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 87.82 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 43.91 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Luyten 726-8 System End*/} 



        {/*Ross 154 System Start*/}  
        <StarTitle className="startitlered">Ross 154 Star System</StarTitle>   
        <StarDistance>
        9.6813 Light Years Away From Earth (Equals 2.9683 Parsecs or 56.912 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Ross 154
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
        
        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Ross 154 Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Ross 154 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 125,627 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 194.82 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 97.41 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 48.71 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Ross 154 Star System End*/}



        {/*Ross 248 System Start*/}  
        <StarTitle className="startitlered">Ross 248 Star System</StarTitle>   
        <StarDistance>
        10.3220 Light Years Away From Earth (Equals 3.1647 Parsecs or 60.679 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Ross 248
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M6V Main Sequence Red SubDwarf<br/><br/>
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
        The Ross 248 Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Ross 248 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 133,941 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 207.72 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 103.86 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 51.93 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Ross 248 Star System End*/}


        {/*WISE 1506+7207 System Start*/}  
        <StarTitle className="startitlebrown">WISE 1506+7207 Failed Star System</StarTitle>   
        <StarDistance>
        10.5210 Light Years Away From Earth (Equals 3.2257 Parsecs or 61.849 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        WISE 1506+7207
        <img src={TStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "180px", height: "180px"}}/>
        T6V Brown Failed SubDwarf<br/><br/>
        <img src={SolarFlareUnknown} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Unknown Solar Flares
        </StarArea>

        <StarArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
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
        The WISE 1506+7207 System consists of 2 Failed Stars and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlebrown">Travel Times to WISE 1506+7207 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 136,523 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 211.72 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 105.86 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 52.93 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*WISE 1506+7207 System End*/}  
        


        {/*Epsilon Eridani System Start*/}  
        <StarTitle className="startitleorange">Epsilon Eridani System</StarTitle>   
        <StarDistance>
        10.5220 Light Years Away From Earth (Equals 3.2260 Parsecs or 61.854 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Epsilon Eridani
        <img src={KStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "225px", height: "225px"}}/>
        K2V Main Sequence Orange SubDwarf<br/><br/>
        <img src={SolarFlareStrong} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Strong Solar Flares
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
          
        Asteroid Belt
            <img src={AsteroidImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}}  />
        
        </PlanetArea>

        <PlanetArea>
        Aegir<br/> Epsilon I<br/>
        3.39 AU
        <img src={SuperJovian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "160px", height: "160px"}} />
        Freezing<br/> Super Jovian<br/>
        1.55 (JM)<br/>
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
        Asteroid Belt
            <img src={AsteroidImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}}  />
        
        </PlanetArea>

        <PlanetArea>
        <img src={Blank} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        
        </PlanetArea>
        
        <PlanetArea>
        Ran<br/> Epsilon II<br/>
        40 AU
        <img src={Neptunian} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "90px", height: "80px"}} />
        Freezing<br/>Neptunian<br/>
        31.75 (EM)<br/>
        ? Miles
        </PlanetArea>
        
        <br/>
        <br/>

        
        
        </StarSystemThree>
        <SystemNotes>
        The Epsilon Eridani Star System consists of 1 Star, 2 Major Planets, and 2 Asteroid Belts.<br/> 
        <br/>
        <span className="traveltitleorange">Travel Times to Epsilon Eridani from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 136,536 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 211.74 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 105.87 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 52.94 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Epsilon Eridani System End*/}  



        {/*Lacaille 9352 System Start*/}  
        <StarTitle className="startitlered">Lacaille 9352 Star System</StarTitle>   
        <StarDistance>
        10.7420 Light Years Away From Earth (Equals 3.2935 Parsecs or 63.148 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Lacaille 9352
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M0.5V Main Sequence Red SubDwarf<br/><br/>
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
        The Lacaille 9352 Star System consists of 1 Star and 0 Planets.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Lacaille 9352 from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 139,931 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 216.17 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 108.18 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 54.05 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Lacaille 9352 Star System End*/}


        {/*Ross 128 System Start*/}  
        <StarTitle className="startitlered">Ross 128 Star System</StarTitle>   
        <StarDistance>
        10.9190 Light Years Away From Earth (Equals 3.3477 Parsecs or 64.188 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
        Ross 128
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        M4V Main Sequence Red SubDwarf<br/><br/>
        <img src={SolarFlareModerate} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "35px", height: "35px"}} />
        Moderate Solar Flares
        </StarArea>

        <PlanetArea className="habzone">
            Ross 128 b<br/> Ross 128 I<br/>
            0.0493 AU
        <img src={SuperTerran} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "70px", height: "70px"}} />
        Warm<br/> Super Terran<br/>
        1.35 (EM)<br/>
        8,710 Miles
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
        The Ross 128 Star System consists of 1 Star and 1 Major Planet. Ross 128 b orbits in the potential liquid water zone, indicated by a green background.<br/> 
        <br/>
        <span className="traveltitlered">Travel Times to Ross 128 Star from Earth</span>
        </SystemNotes>
        
        <TravelTime>
        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Chemical Rocket = 77,377 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fission Rocket = 120 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Fusion Rocket = 60 Earth Years</div>
            
            </div>

        </div>

        <div className="travel-overview">

            <div className="overviewcardtravel">

            <div className="overviewcard__info">Laser Light Sail = 30 Earth Years</div>
            
            </div>

        </div>
        </TravelTime>
        {/*Ross 128 System End*/} 
        
        
        <CardsContainer>
            {articles.map(article => (
                <Card key={article.id}>
                    <Image src={article.imageUrl}></Image>
                    <Header>{article.title}</Header>
                    <Content>{article.content}</Content>
                </Card>
            ))}
        </CardsContainer> 
        
         
        
        </BrowseBackground>
        
    
    );
};

export default BrowseStarSystems;