import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BrowseSystemIcon from "../images/browsesystemicon.png";
import BrowsePlanetIcon from "../images/browseplaneticon.png"
import SearchIcon from "../images/search.png";
import EarthlikeIcon from "../images/earthlike.png";
import DashboardHeader from "../images/dashboard_header.jpg";
import "./Dashboard.css";



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
font-color: #ffffff;
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
                    <div className="overviewcard__info">Star/Planet Classifications</div>
                  </div>

                  
                  <div className="overviewcard">
                    <div className="overviewcard__icon"><img src={BrowseSystemIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
                    <Link to="/BrowseStarSystems" className="nav-link" >
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
                    <div className="overviewcard__icon"><img src={EarthlikeIcon} alt="Earthlike Candidates" title="Earthlike Candidates" style={{color: "#ffffff", width: "50%", height: "50%"}}/></div>
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




        </DashboardBackground> 
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