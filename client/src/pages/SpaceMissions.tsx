import styled from "styled-components";
import { Link } from "react-router-dom";
import MissionsBanner from "../images/missionsheader.jpg";



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
height: 200px;
`;

const SightingContent = styled.div`
width: 97%;
height: 150px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;







const SpaceMissions = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Space Missions
        </BreadCrumbs>

        <HeaderImage>
        <img src={MissionsBanner} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        </HeaderImage>

        

        <SightingContainer>
        <SightingContent>
        MISSION 1: BRING TOGETHER A GLOBAL COMMUNITY OF SPACE VISIONARIES
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 2: BUILD REUSABLE INTER-PLANETARY SPACECRAFT
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 3: BUILD AN EARTH ORBITAL COLONY
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 4: BUILD A SURFACE MOON COLONY
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 5: BUILD A SURFACE MARS COLONY
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 6: MINE ASTEROIDS
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 7: BUILD AN ORBITAL VENUS COLONY
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
        MISSION 8: BUILD A GANYMEDE SURFACE COLONY
        </SightingContent>
        </SightingContainer>
         
        
        </BrowseBackground>
        
    
    );
};

export default SpaceMissions;