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
box-shadow: 0.1rem 0.1rem 1rem rgba(0,0,0,0.2);
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
background-color: #17202A;
color: #ffffff;
display: flex;
margin-top: 10px;
`;

const IconImage = styled.div`

height: 110px;
background-color: #17202A;
color: #ffffff;
flex: 1;
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
    <Container>

        <IconContainer>
            <IconImage>
                <Link to="/BrowseStarSystems" className="nav-link" style={{color: "#ffffff"}}>
                <img src={BrowseSystemIcon} alt="Browse Star Systems" title="Browse Star Systems" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={BrowsePlanetIcon} alt="Browse Planets" title="Browse Planets" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={SearchIcon} alt="Browse Planets" title="Browse Planets" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={SearchIcon} alt="Browse Planets" title="Browse Planets" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={AccountIcon} alt="Account" title="Account" />
                </Link>
            </IconImage>
            <IconImage>
                <Link to="/BrowsePlanets" className="nav-link" style={{color: "#ffffff"}}>
                <img src={SupportIcon} alt="Account" title="Account" />
                </Link>
            </IconImage>
        </IconContainer>

        {articles.length ? (
        <CardsContainer>
            {articles.map(article => (
                <Card key={article.id}>
                    <Image src={article.imageUrl}></Image>
                    <Header>{article.title}</Header>
                    <Content>{article.content}</Content><FontAwesomeIcon icon={solid('lock')} size="1x" />
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
    );
};

export default Dashboard;