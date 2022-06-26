import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./BrowseStarSystems.css";
import { Link } from "react-router-dom";
import GStarImage from "../images/stars/g_class_star.png";
import MStarImage from "../images/stars/m_class_star.png";
import MercuryImage from "../images/planets/mercurian_hot_small.png";
import VenusImage from "../images/planets/terran_extremelyhot_small.png";
import EarthImage from "../images/planets/terran_warm_small.png";
import MarsImage from "../images/planets/subterran_cold_small.png";
import AsteroidImage from "../images/asteroids/asteroid_belt_small.png";
import JupiterImage from "../images/planets/superjovian_freezing_small.png";
import SaturnImage from "../images/planets/jovian_freezing_small.png";
import NeptunianFreezing from "../images/planets/neptunian_freezing_small.png";
import KuiperImage from "../images/kuiper/kuiper_belt_small.png";
import OortImage from "../images/oort/oort_cloud_small.png";
import Blank from "../images/blank.png"
import SubTerranHot from "../images/planets/subterran_hot_small.png";
import SuperTerranCold from "../images/planets/superterran_cold_small.png";

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
        <Link to="/dashboard" >Dashboard</Link> {'>'} Browse Star Systems: 0 to 10 Light Years (150 Total Stars and 94 Total Planets, representing 114 Star Systems)
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



        <StarTitle className="startitleyellow">Sol Star System</StarTitle>
        <StarDistance>
        The Sun is 8.3 Light Minutes or 92,398,072 Miles from Earth on Average<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy
        </StarDistance>
           

        <StarSystem>
        
        <StarArea>
            Sol
        <img src={GStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "300px", height: "300px"}}/>
        G2V Main Sequence Yellow Dwarf
        </StarArea>

        <PlanetArea>
        Mercury<br/>
        0.387 AU
        <img src={MercuryImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "40px", height: "40px"}} />
        Hot Mercurian
        0.055 (EM)
        </PlanetArea>

        <PlanetArea>
            Venus<br/>
            0.723 AU
        <img src={VenusImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Extremely Hot Terran<br/>
        0.815 (EM)
        </PlanetArea>

        <PlanetArea className="habzone">
            Earth<br/>
            1.000 AU
        <img src={EarthImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Warm<br/> Terran<br/>
        1.000 (EM)
        </PlanetArea>
        

        <PlanetArea className="habzone">
            Mars<br/>
            1.523 AU
        <img src={MarsImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Cold SubTerran<br/>
        0.107 (EM)
        </PlanetArea>

        <PlanetArea>
            Asteroid Belt<br/>
            2.2 to 5.2 AU
        <img src={AsteroidImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}}  />
        </PlanetArea>

        <PlanetArea>
            Jupiter<br/>
            5.203 AU
        <img src={JupiterImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "200px", height: "200px"}} />
        Freezing Super Jovian<br/>
        317.83 (EM)
        </PlanetArea>

        <PlanetArea>
            Saturn<br/>
            9.538 AU
        <img src={SaturnImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "160px", height: "160px"}} />
        Freezing Jovian<br/>
        95.161 (EM)
        </PlanetArea>

        <PlanetArea>
            Uranus<br/>
            19.819 AU
        <img src={NeptunianFreezing} alt="Browse Star Systems" title="Browse Star Systems"style={{color: "#ffffff", width: "120px", height: "120px"}} />
        Freezing Neptunian<br/>
        15.536 (EM)
        </PlanetArea>

        <PlanetArea>
            Neptune<br/>
            30.058 AU
        <img src={NeptunianFreezing} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "120px", height: "120px"}} />
        Freezing Neptunian<br/>
        17.148 (EM)
        </PlanetArea>

        <PlanetArea>
            Kuiper Belt<br/>
            40 to 700 AU
        <img src={KuiperImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "155px"}} />
        </PlanetArea>

        <PlanetArea>
            Oort Cloud<br/>
            2,000 to 100,000 AU
        <img src={OortImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "200px"}} />
        </PlanetArea>
        <br/>
        <br/>
        
        </StarSystem>
        <SystemNotes>
        The Sol Star System consists of 1 Star, 8 Major Planets, 5 Dwarf Planets, 1 Asteroid Belt, 1 Kuiper Belt, and 1 Oort Cloud. 2 Major Planets orbit in the Potential Liquid Water Zone. Earth is the only Habitable Planet.<br/>
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

        




        <StarTitle className="startitlered">Proxima Centauri Star System</StarTitle>   
        <StarDistance>
        4.2421 Light Years Away From Earth (Equals 1.3006 Parsecs or 24.937 Trillion Miles)<br/>
        Located in the Local Fluff of the Local Bubble of the Orion Arm of the Milky Way Galaxy<br/>
        </StarDistance>
        <StarSystemThree>
        
        
        <StarArea>
            Proxima Centauri
        <img src={MStarImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "300px", height: "300px"}}/>
        M5.5 Main Sequence Red SubDwarf
        </StarArea>

        <PlanetArea>
            b
        <img src={SubTerranHot} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "60px", height: "60px"}} />
        Hot SubTerran
        </PlanetArea>

        <PlanetArea className="habzone">
            c
        <img src={SuperTerranCold} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "80px", height: "80px"}} />
        Cold <br/>Super Terran
        </PlanetArea>

        <PlanetArea>
            d
        <img src={NeptunianFreezing} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "120px", height: "120px"}} />
        Freezing Neptunian
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
        The Proxima Centauri Star System consists of 1 Star and 3 Major Planets. 1 Major Planet orbits in the Potential Liquid Water Zone.<br/> 
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