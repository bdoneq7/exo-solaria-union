import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const MissionTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const MissionContent = styled.div`
margin-top: 15px;
`;

const OurMission = () => {


    return (
        <Container>
        
        <MissionTitle>Our Mission</MissionTitle>
        
        <MissionContent>Help Humanity Build Reusable Inter-Planetary Spacecraft, Build an Earth Orbital Space Colony, Build a Surface Moon Colony, Build a Surface Mars Colony, and Build an Orbital Venus Research Station.
        </MissionContent>
    </Container>
    );
};

export default OurMission;