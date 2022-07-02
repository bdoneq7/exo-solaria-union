import styled from "styled-components";
import "./AlienSpecies.css";
import { Link } from "react-router-dom";




const BreadCrumbs = styled.div`
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;









const Community = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} Exo Solaria Union Community
        </BreadCrumbs>

        Community
        
        
        
         
        
        </BrowseBackground>
        
    
    );
};

export default Community;