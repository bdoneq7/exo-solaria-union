import styled from "styled-components";
import { Container } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const HeroComponent = styled.header`
    padding: 3rem 2rem 0 0;
    height: 60vh;
    background-image: url("https://www.galaxyplanets.com/images/main.png");
    background-size: cover;
    background-position: top;
    background-color: #17202A;
`;

const HeaderContainer = styled.div`
    background-color: #024e76;
    padding: 1rem;
    color: #ffffff;
    width: 30%;
    border: 2px solid #ffffff;
    border-radius: 25px;
`;

const Heading = styled.h1`
font-size: 25px;
font-weight: bold;
`;

const SubHeading = styled.h3`
margin = 1rem 0;
font-size: 18px;
color: #FCF3CF;
`;

const Hero = () => {
    return <HeroComponent>
        <Container>
            <HeaderContainer>
                <Heading>Join the Exo Solaria Union</Heading>
                <SubHeading>Become Part of a Space Community that is dedicated to helping Humantiy in Exploring and Colonizing our Solar System, Building Starships, Exploring the Galaxy, and Engaging with Alien Civlizations!</SubHeading>
                <ModalComponent text="Join Us Now" variant="primary" isSignupFlow={true}/>
                <ModalComponent text="Secure Account Login" variant="warning" isSignupFlow={false} /><FontAwesomeIcon icon={solid('lock')} size="1x" />
            </HeaderContainer>
        </Container>
    </HeroComponent>;
};

export default Hero;