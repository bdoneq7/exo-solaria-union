import styled from "styled-components";
import './Loading.css';

const LoadingContainer = styled.div`
text-align: center;
margin-top: 200px;
margin-bottom: 200px;
`;

const Loader = styled.div`
text-align: center;
`;


const Loading = () => {


    return <LoadingContainer>
        <strong>Loading, Please Wait .... </strong><br/><br/>
        <Loader className="loader">

        </Loader>
    </LoadingContainer>
    
};

export default Loading;