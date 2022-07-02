import styled from "styled-components";
import "./AlienSpecies.css";
import { Link } from "react-router-dom";
import AlienSpeciesBanner from "../images/alienspeciesbanner.jpg";



const BreadCrumbs = styled.div`
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;









const AlienSpecies = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Alien Species
        </BreadCrumbs>

        <img src={AlienSpeciesBanner} alt="Exo Solaria Union Community" title="Exo Solaria Union Community" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        
        
        
         
        
        </BrowseBackground>
        
    
    );
};

export default AlienSpecies;