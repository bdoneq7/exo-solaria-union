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
color: #000000;
font-size: 12px;
width: 100%;
height: 50px;
margin-bottom: 10px;
padding-top: 15px;
padding-left: 15px;
background-color: #F9E79F;
font-weight: bold;
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;

const StarTitle = styled.div`
font-weight: bold;
color: #ffffff;
font-size: 24px;
margin-bottom: 30px;
padding-top: 15px;
padding-left: 15px;
`;

const StarSystem = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap: 15px;
border-bottom: 2px dashed #ffffff;
padding-bottom: 25px;
`;

const StarSystemThree = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap: 15px;
border-bottom: 2px dashed #ffffff;
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
        <BreadCrumbs>
        <Link to="/dashboard" >Dashboard</Link> {'>'} Browse Star Systems: 0 to 10 Light Years
        </BreadCrumbs>
        <StarTitle>Sol Star System</StarTitle>   

        <StarSystem>
        
        <StarArea>
            Sol
        <img src={GStarImage} alt="Sol" title="Sol" style={{color: "#ffffff", width: "300px", height: "300px"}}/>
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
        

        <PlanetArea>
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
            2,000 to 3,000 AU
        <img src={OortImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50px", height: "200px"}} />
        </PlanetArea>
        <br/>
        <br/>
        
        </StarSystem>





        <StarTitle>Proxima Centauri Star System</StarTitle>   

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