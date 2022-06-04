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

const TermsOfUse = () => {


    return (
        <Container>
        
        <VisionTitle>Terms Of Use</VisionTitle>
        
        <VisionContent>Terms Of Use Text
        </VisionContent>
    </Container>
    );
};

export default TermsOfUse;