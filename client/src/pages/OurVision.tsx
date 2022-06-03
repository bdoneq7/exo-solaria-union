import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const VisionTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const VisionContent = styled.div`
margin-top: 15px;
`;

const OurVision = () => {


    return (
        <Container>
        
        <VisionTitle>Our Vision</VisionTitle>
        
        <VisionContent>We aim to increase our knowledge of reality, to unify humanity in exploring our entire solar system, colonizing it for the benefit and enlightenment of humanity, all in preparation to explore and colonize nearby solar systems, and to be ready to engage with alien civilizations in an enlightened way.
        </VisionContent>
    </Container>
    );
};

export default OurVision;