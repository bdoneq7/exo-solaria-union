import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const FreePreviewTitle = styled.div`
font-weight: bold;
font-size: 24px;
margin-top: 15px;
margin-bottom: 20px;
`;

const FreePreviewContent = styled.div`
margin-top: 15px;
`;

const FreePreview = () => {


    return (
        <Container>
        
        <FreePreviewTitle>Free Preview</FreePreviewTitle>
        
        <FreePreviewContent>Screenshots
        </FreePreviewContent>
    </Container>
    );
};

export default FreePreview;