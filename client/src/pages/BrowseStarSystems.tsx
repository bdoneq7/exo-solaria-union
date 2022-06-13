import { Container } from "react-bootstrap";
import styled from "styled-components";
import ZetaReticuli from "../images/zetareticuli.jpg";

const StarTitle = styled.div`
font-weight: bold;
font-color: #000000;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const StarContent = styled.div`

`;

const BrowseStarSystems = () => {


    return (
        <Container>
        
        
        <StarTitle>Browse Star Systems</StarTitle>   

        <StarContent>
        <img src={ZetaReticuli} alt="Browse Star Systems" title="Browse Star Systems" />
        </StarContent>
        
    </Container>
    );
};

export default BrowseStarSystems;