import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import BrowseSystemIcon from "../images/browsesystemicon.png";
import BrowsePlanetIcon from "../images/browseplaneticon.png"
import SearchIcon from "../images/search.png";
import EarthlikeIcon from "../images/earthlike.png";
import AccountIcon from "../images/account.png";
import SupportIcon from "../images/support.png";


interface Article {
    id: string,
    title: string,
    imageUrl: string,
    content: string,
}

const CardsContainer = styled.div`
padding: 4rem 0;
display: flex;
`;

const Card = styled.div`
height: 30rem;
width: 32%;
box-shadow: 0.1rem 0.1rem 1rem #ffffff;
background-color: #ffffff;
padding: 2rem;
border-radius: 2rem;
margin-right: 5rem;
`;

const Image = styled.img`
width: 100%;
height: 20rem;
border-radius: 2rem;
`;

const Header = styled.h2`
margin-top: 1rem;
font-size: 1.5rem;
`;

const NoArticlesContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 5rem 0;
flex-direction: column;

& a {
    font-size: 2rem;
    text-decoration: none;
}
`;

const ErrorHeader = styled.h2`
font-size: 3rem;
`;

const Content = styled.p`
`;

const IconContainer = styled.div`
width: 100%;
height: 110px;
background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% );
color: #ffffff;
display: flex;
padding-top: 15px;
justify-content: center;
`;

const IconImage = styled.div`
height: 110px;
color: #ffffff;
flex: 1;
width: 100%;
`;

const DashboardBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% );
width: 100%;
`;

const Dashboard = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const { data: response } = await axios.get("http://localhost:8080/articles");
        setArticles(response);
    };

    

    return (
    <DashboardBackground>    
    <Container>

        <IconContainer>
            <IconImage>
                <Link to="/BrowseStarSystems" className="nav-link" >
                <img src={BrowseSystemIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" >
                <img src={BrowsePlanetIcon} alt="Browse Planets" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/SearchStarSystem" className="nav-link" >
                <img src={SearchIcon} alt="Search Star System" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/SearchPlanet" className="nav-link" >
                <img src={SearchIcon} alt="Search Planet" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/EarthlikeCandidates" className="nav-link" >
                <img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/Account" className="nav-link" >
                <img src={AccountIcon} alt="Account" title="Account" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/Support" className="nav-link" >
                <img src={SupportIcon} alt="Support" title="Support" style={{color: "#ffffff", width: "50%", height: "50%"}}/>
                </Link>
            </IconImage>
        </IconContainer>

        {articles.length ? (
        <CardsContainer>
            {articles.map(article => (
                <Card key={article.id}>
                    <Image src={article.imageUrl}></Image>
                    <Header>{article.title}</Header><FontAwesomeIcon icon={solid('lock')} size="1x" />
                    <Content>{article.content}</Content>
                </Card>
            ))}
        </CardsContainer> 
        ) : ( 
        <NoArticlesContainer>
            <ErrorHeader>
                You don't have access yet to a Membership
            </ErrorHeader>
            <Link to="/membership-plan">Purchase Membership</Link>
        </NoArticlesContainer>
        )}
    </Container>
    </DashboardBackground>
    );
};

export default Dashboard;