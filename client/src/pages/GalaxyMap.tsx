import styled from "styled-components";
import { Link } from "react-router-dom";
import Galaxy from "../images/galaxy.jpg";



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







const GalaxyMap = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Galaxy Map
        </BreadCrumbs>

        <SightingContainer>
        <SightingContent>
           Galaxy Map
        </SightingContent>
        </SightingContainer>

        <HeaderImage>
        <img src={Galaxy} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        </HeaderImage>

        

        

        
         
        
        </BrowseBackground>
        
    
    );
};

export default GalaxyMap;