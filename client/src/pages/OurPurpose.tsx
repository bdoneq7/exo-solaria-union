import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const PurposeTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const PurposeContent = styled.div`
margin-top: 15px;
`;

const OurPurpose = () => {


    return (
    <Container>
        
        <PurposeTitle>Our Purpose</PurposeTitle>
        
        <PurposeContent>
        <p>Our Purpose is Why we Exist and What Guides Us</p>
        <p>Our Purpose is to help transform Humanitys knowledge of the reality of the universe to progress towards perfect goodness, enlightenment, unity, and joy for all universal life. We can make a difference for good in the lives of all humanity by embracing our purpose, and help elevate humanity to a higher state of existence and fulfillment by reaching for the stars.</p>
        </PurposeContent>
    </Container>
    );
};

export default OurPurpose;