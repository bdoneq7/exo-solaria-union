import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BrowseSystemIcon from "../images/browsesystemicon.png";
import BrowsePlanetIcon from "../images/browseplaneticon.png"
import SearchIcon from "../images/search.png";
import EarthlikeIcon from "../images/earthlike.png";
import AliensIcon from "../images/aliens.png";
import DashboardHeader from "../images/dashboard_header.jpg";
import "./Dashboard.css";
import { Card, Button } from "react-bootstrap";



interface Article {
    id: string,
    title: string,
    imageUrl: string,
    content: string,
}


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
color: #ffffff;
`;

const DashboardBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8% );
width: 100%;
`;

const BlankContainer = styled.div`
width: 100%;
height: 25px;
display: flex;
padding-top: 15px;
padding-bottom: 15px;
`;

const CardsContainer = styled.div`
display: flex;
height: 75vh;
width: 200%;
align-items: center;
justify-content: center;
`;

const CardHeader = styled.div`

background-color: blue;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 0.5rem solid #ffffff;
width: 12.5rem;
height: 12.5rem;
box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const PriceCircle = styled.div`
border: 0.5rem solid #ffffff;
width: 12.5rem;
height: 12.5rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
`;

const PriceText = styled.p`
font-size: 3rem;
color: #ffffff;
box-shadow: 0.1rem 0.1rem 1rem rgba(19, 20, 19, 0.342);
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


    const [prices, setPrices] = useState<any[]>([])

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {

        const {data: response} = await axios.get("http://localhost:8080/subs/prices");
        console.log(response);
        setPrices(response.data);
    };

    const createSession = async (priceId: string) => {
        const { data: response } = await axios.post(
            "http://localhost:8080/subs/session", 
            {
                priceId,
            }
        );

        window.location.href = response.url;
    };


    

    return (
    <DashboardBackground>    
    <Container>
 
        {articles.length ? (
        <DashboardBackground>
            <BlankContainer></BlankContainer>

            <div className="grid-container">

              <header className="header">
                <div className="header__search">Welcome, Brian!</div>
                <div className="header__avatar">What will you Discover Today?</div>
              </header>


              <aside className="sidenav">
                <ul className="sidenav__list">
                  <li className="sidenav__list-item">Profile</li>
                  <li className="sidenav__list-item">Account</li>
                  <li className="sidenav__list-item">Billing</li>
                  <li className="sidenav__list-item">Password</li>
                  <li className="sidenav__list-item">Notifications</li>
                  <li className="sidenav__list-item">Support</li>
                </ul>
              </aside>


              <main className="main">

              

                <div className="main-overview">


                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Classifications</div>
                  </div>

                  
                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={BrowseSystemIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <Link to="/BrowseStarSystems0to10" className="nav-link" >
                    <div className="overviewcard__info">Browse Star Systems</div>
                    </Link>
                  </div>
                  

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={BrowsePlanetIcon} alt="Browse Planets" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Browse Planets</div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={SearchIcon} alt="Search Star System" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Search Star System</div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={SearchIcon} alt="Search Star System" title="Browse Planets" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Search Planets</div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Earthlike Candidates</div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={AliensIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Alien Species</div>
                  </div>

                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <div className="overviewcard__info">Data Sources</div>
                  </div>

              </div>

              <div className="main-cards">
                <div className="card">Galaxy Map
                <img src={DashboardHeader} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "100%", height: "90%"}}/>
                </div>
                <div className="card">Card</div>
              </div>

              </main>


              <footer className="footer">Footer</footer>

            </div>

            <BlankContainer></BlankContainer>


        </DashboardBackground> 
        ) : ( 
        <NoArticlesContainer>
            <ErrorHeader>
                STEP 2: Subscribe to Exo Solaria Union Membership
            </ErrorHeader>
            
            <CardsContainer>
            {prices.map((price: any) => {
                return (
                    <Card style={{width: "25%", height: "75%", marginRight: "2rem"}}>
                        <CardHeader style={{backgroundColor: "#273746 "}}>
                            <PriceCircle>
                                <PriceText>
                                ${price.unit_amount / 100}
                                </PriceText>
                            </PriceCircle>
                        </CardHeader>
                        <Card.Body>
                            <Card.Title style={{fontSize: "2rem"}}>
                                {price.nickname}
                            </Card.Title>
                            <Button variant="primary" className="mt-1" style={{backgroundColor: "#273746 "}} onClick={() => createSession(price.id)}>
                                Purchase Now
                            </Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardsContainer>

        </NoArticlesContainer>
        )}
    </Container>
    </DashboardBackground>
    );
};

export default Dashboard;