import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SolImage from "../images/g_class_star_large.png";
import MercuryImage from "../images/mercurian__hot_small.png";
import VenusImage from "../images/volcanic_normal_small.png";
import EarthImage from "../images/terran_warm_small.png";
import MarsImage from "../images/subterran__cold_small.png";
import JupiterImage from "../images/SuperJovian_freezing.png";
import SaturnImage from "../images/GasGiant_freezing_normal.png";
import UranusImage from "../images/neptunian_small_freezing.png";

interface Article {
    id: string,
    title: string,
    imageUrl: string,
    content: string,
}

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% );
width: 100%;
`;

const StarTitle = styled.div`
font-weight: bold;
color: #ffffff;
font-size: 24px;
margin-bottom: 20px;
padding-top: 15px;
padding-left: 15px;
`;

const StarContent = styled.div`

`;

const CardsContainer = styled.div`
padding: 4rem 0;
display: flex;
color: #000000;
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

const Header = styled.h2`
margin-top: 1rem;
font-size: 1.5rem;
`;

const Content = styled.p`
`;

const Image = styled.img`
width: 100%;
height: 20rem;
border-radius: 2rem;
`;

const BrowseStarSystems = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        const { data: response } = await axios.get("http://localhost:8080/articles");
        setArticles(response);
    };


    return (
        
        
        <BrowseBackground>
        <StarTitle>Browse Star Systems</StarTitle>   

        <StarContent>
        <br/>
        <br/>
        <img src={SolImage} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "12%", height: "12%"}}/>
        <img src={MercuryImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={VenusImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={EarthImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={MarsImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={JupiterImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={SaturnImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={UranusImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <img src={UranusImage} alt="Browse Star Systems" title="Browse Star Systems" />
        <br/>
        <br/>
        
        </StarContent>
        
        
        
        <CardsContainer>
            {articles.map(article => (
                <Card key={article.id}>
                    <Image src={article.imageUrl}></Image>
                    <Header>{article.title}</Header>
                    <Content>{article.content}</Content>
                </Card>
            ))}
        </CardsContainer> 
        
         
        
        </BrowseBackground>
        
    
    );
};

export default BrowseStarSystems;