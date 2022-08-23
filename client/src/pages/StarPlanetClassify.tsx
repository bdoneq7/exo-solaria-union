import styled from "styled-components";
import { Link } from "react-router-dom";
import ClassifyBanner from "../images/classifybanner.jpg";
import AStarImage from "../images/stars/a_class_star.png";
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




const BreadCrumbs = styled.div`
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;


const HeaderImage = styled.div`
width: 100%;
height: 400px;
margin-bottom: 20px;
`;


const SightingContainer = styled.div`
width: 100%;
height: 100px;
`;


const StarContent = styled.div`
width: 97%;
height: 50px;
color: #000000;
background-color: gold;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
text-align: center;
font-weight: bolder;
`;

const PlanetContent = styled.div`
width: 97%;
height: 50px;
color: #000000;
background-color: #EB984E;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
text-align: center;
font-weight: bolder;
`;

const StarClass = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap: 15px;
padding-bottom: 25px;
margin-left: 25px;

`;

const StarArea = styled.div`
padding-left: 15px;
color: #ffffff;
font-size: 11px;
text-align: center;
`;

const ParameterArea = styled.div`
align-self: center; 
color: #ffffff;
font-size: 11px;
text-align: center;
`;






const StarPlanetClassify = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Star and Planet Classification
        </BreadCrumbs>

        <HeaderImage>
        <img src={ClassifyBanner} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        </HeaderImage>

        
        

        <SightingContainer>
        <StarContent>
           Star Classifications
        </StarContent>
        </SightingContainer>


        


        

        <StarClass>
        
        <StarArea>
            A Class Star
        <img src={AStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "270px", height: "270px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea>
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>

        <StarClass>
        
        
        <StarArea>
            G Class Star (Our Sun)
        <img src={GStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "240px", height: "240px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea className="habzone">
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>

        <StarClass>
        
        <StarArea>
            K Class Star
        <img src={KStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "225px", height: "225px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea>
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea>
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>



        <StarClass>
        
        <StarArea>
            M Class Star 
        <img src={MStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "210px", height: "210px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea className="habzone">
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>

        
        <StarClass>
        
        <StarArea>
            L Class Star
        <img src={LStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "195px", height: "195px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea className="habzone">
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>


        <StarClass>
        
        <StarArea>
            T Class Star 
        <img src={TStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "180px", height: "180px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea className="habzone">
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>


        <StarClass>
        
        <StarArea>
            Sub-BD Class Star 
        <img src={SubStarImage} alt="Sol - Click for Sol Details" title="Sol - Click for Sol Details" style={{color: "#ffffff", width: "160px", height: "160px"}}/>
        Text<br/><br/>
        
        </StarArea>

        <ParameterArea>
        Surface Temperature<br/>
        5,200 K to 5,999 K<br/>
        8,900 F to 10,338 F
        
        </ParameterArea>

        <ParameterArea>
            Core Temperature<br/>
            10 Million K to 15 Million K<br/>
            18 Million F to 27 Million F
        
        </ParameterArea>

        <ParameterArea className="habzone">
            Solar Masses<br/>
            0.80 to 1.03
        
        </ParameterArea>
        

        <ParameterArea className="habzone">
            Solar Diameter<br/>
            0.96 to 1.14
        
        </ParameterArea>

        <ParameterArea>
            Solar Luminosity<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Solar Flares<br/>
            ?
        
        </ParameterArea>

        <ParameterArea>
            Lifetime<br/>
            10 Billion Years<br/>
            
        </ParameterArea>

        <ParameterArea>
            Destiny<br/>
            White Dwarf<br/>
            
        </ParameterArea>

        <ParameterArea>
            Notes
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>

        <ParameterArea>
           
        </ParameterArea>
        <br/>
        <br/>
        
        </StarClass>


        <SightingContainer>
        <PlanetContent>
           Planet Classifications
        </PlanetContent>
        </SightingContainer>

        
         
        
        </BrowseBackground>
        
    
    );
};

export default StarPlanetClassify;