import styled from "styled-components";
import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";

const HeroComponent = styled.header`
    padding: 5rem 0;
    height: 60vh;
    background-image: url("https://www.galaxyplanets.com/images/main.png");
    background-size: cover;
    background-position: top;
    background-color: blue;
`;

const HeaderContainer = styled.div`
    background-color: rgb(5, 48, 112);
    padding: 1.5rem;
    color: #ffffff;
    width: 27%;
`;

const Heading = styled.h1`
font-size: 25px;
font-weight: bold;
`;

const SubHeading = styled.h3`
margin = 1rem 0;
font-size: 20px;
`;

const Hero = () => {
    return <HeroComponent>
        <Container>
            <HeaderContainer>
                <Heading>Join Exo Solaria Union</Heading>
                <SubHeading>Become Part of a Space Community that is dedicated to Exploring and Colonizing our Solar System, Building Starships, and Engaging with Alien Civlizations!</SubHeading>
                <ModalComponent text="Sign Up" variant="primary" isSignupFlow={true}/>
                <ModalComponent text="Login" variant="danger" isSignupFlow={false}/>
            </HeaderContainer>
        </Container>
    </HeroComponent>;
};

export default Hero;