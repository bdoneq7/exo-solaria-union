import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BrowseSystemIcon from "../images/browsesystemicon.png";
import BrowsePlanetIcon from "../images/browseplaneticon.png"
import SearchIcon from "../images/search.png";
import EarthlikeIcon from "../images/earthlike.png";
import AccountIcon from "../images/account.png";
import SupportIcon from "../images/support.png";
import "./Dashboard.css";



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

const NameContainer = styled.div`
width: 100%;
height: 110px;
color: #ffffff;
display: flex;
padding-top: 15px;
justify-content: center;
font-size: 25px;
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

        <NameContainer>Welcome back, Brian!</NameContainer>


        <div className="grid">
  <header className="header">
    <i className="fas fa-bars header__menu"></i>
    <div className="header__search">
      <input className="header__input" placeholder="Search..." />
    </div>
    <div className="header__avatar">
      <div className="dropdown">
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="far fa-user"></i></span>
            <span className="dropdown__title">my profile</span>
          </li>
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="fas fa-clipboard-list"></i></span>
            <span className="dropdown__title">my account</span>
          </li>
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
            <span className="dropdown__title">log out</span>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <aside className="sidenav">
    <div className="sidenav__brand">
      <i className="fas fa-feather-alt sidenav__brand-icon"></i>
      <a className="sidenav__brand-link" href="#">Ux<span className="text-light">Pro</span></a>
      <i className="fas fa-times sidenav__brand-close"></i>
    </div>
    <div className="sidenav__profile">
      <div className="sidenav__profile-avatar"></div>
      <div className="sidenav__profile-title text-light">Matthew H</div>
    </div>
    <div className="row row--align-v-center row--align-h-center">
      <ul className="navList">
        <li className="navList__heading">documents<i className="far fa-file-alt"></i></li>
          <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-briefcase-medical"></i></span>
            <span className="navList__subheading-title">insurance</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">medical</li>
            <li className="subList__item">vision</li>
            <li className="subList__item">dental</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-plane-departure"></i></span>
            <span className="navList__subheading-title">travel</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">domestic</li>
            <li className="subList__item">foreign</li>
            <li className="subList__item">misc</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="far fa-angry"></i></span>
            <span className="navList__subheading-title">taxes</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">current</li>
            <li className="subList__item">archives</li>
          </ul>
        </li>

        <li className="navList__heading">messages<i className="far fa-envelope"></i></li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-envelope"></i></span>
            <span className="navList__subheading-title">inbox</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">primary</li>
            <li className="subList__item">social</li>
            <li className="subList__item">promotional</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-eye"></i></span>
            <span className="navList__subheading-title">unread</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">primary</li>
            <li className="subList__item">social</li>
            <li className="subList__item">promotional</li>
          </ul>
        </li>
         <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-book-open"></i></span>
            <span className="navList__subheading-title">archives</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">primary</li>
            <li className="subList__item">social</li>
            <li className="subList__item">promotional</li>
          </ul>
        </li>

        <li className="navList__heading">photo album<i className="far fa-image"></i></li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-mountain"></i></span>
            <span className="navList__subheading-title">vacation</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">cambodia</li>
            <li className="subList__item">new york</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-wine-glass-alt"></i></span>
            <span className="navList__subheading-title">anniversary</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">dive trip</li>
            <li className="subList__item">hikathon</li>
            <li className="subList__item">buffalo river</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-graduation-cap"></i></span>
            <span className="navList__subheading-title">university</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">wild horse saloon</li>
            <li className="subList__item">service corps</li>
            <li className="subList__item">graduation</li>
            <li className="subList__item">internships</li>
          </ul>
        </li>

        <li className="navList__heading">statistics<i className="fas fa-chart-bar"></i></li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-credit-card"></i></span>
            <span className="navList__subheading-title">finances</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">mortgage</li>
            <li className="subList__item">investments</li>
            <li className="subList__item">spend log</li>
            <li className="subList__item">owed</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-phone"></i></span>
            <span className="navList__subheading-title">call stats</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">last month</li>
            <li className="subList__item">bi-weekly</li>
            <li className="subList__item">yesterday</li>
            <li className="subList__item">today</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-plane"></i></span>
            <span className="navList__subheading-title">trip logs</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">amsterdam</li>
            <li className="subList__item">buenos aires</li>
            <li className="subList__item">cambodia</li>
            <li className="subList__item">greenland</li>
          </ul>
        </li>
        
        <li className="navList__heading">Events<i className="fas fa-calendar-alt"></i></li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-wine-glass-alt"></i></span>
            <span className="navList__subheading-title">weddings</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">past</li>
            <li className="subList__item">present</li>
            <li className="subList__item">future</li>
          </ul>
        </li>
        <li>
          <div className="navList__subheading row row--align-v-center">
            <span className="navList__subheading-icon"><i className="fas fa-school"></i></span>
            <span className="navList__subheading-title">playdates</span>
          </div>
          <ul className="subList subList--hidden">
            <li className="subList__item">weirdos</li>
            <li className="subList__item">smarties</li>
            <li className="subList__item">nerds</li>
          </ul>
        </li>
        <li>
              <div className="navList__subheading row row--align-v-center">
                <span className="navList__subheading-icon"><i className="fas fa-users"></i></span>
                <span className="navList__subheading-title">networking</span>
              </div>
              <ul className="subList subList--hidden">
                <li className="subList__item">tech</li>
                <li className="subList__item">automotive</li>
                <li className="subList__item">UX research</li>
                <li className="subList__item">development</li>
              </ul>
            </li>
      </ul>
    </div>
  </aside>

  <main className="main">
    <div className="main-header">
      <div className="main-header__intro-wrapper">
        <div className="main-header__welcome">
          <div className="main-header__welcome-title text-light">Welcome, <strong>Matthew</strong></div>
          <div className="main-header__welcome-subtitle text-light">How are you today?</div>
        </div>
        <div className="quickview">
          <div className="quickview__item">
            <div className="quickview__item-total">41</div>
            <div className="quickview__item-description">
              <i className="far fa-calendar-alt"></i>
              <span className="text-light">Events</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">64</div>
            <div className="quickview__item-description">
              <i className="far fa-comment"></i>
              <span className="text-light">Messages</span>
            </div>
          </div>
          <div className="quickview__item">
            <div className="quickview__item-total">27&deg;</div>
            <div className="quickview__item-description">
              <i className="fas fa-map-marker-alt"></i>
              <span className="text-light">Austin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-overview">
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--document">
           <i className="far fa-file-alt"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">New <strong>Document</strong></h3>
          <p className="overviewCard-subtitle">Europe Trip</p>
        </div>
      </div>
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--calendar">
           <i className="far fa-calendar-check"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">Upcoming <strong>Event</strong></h3>
          <p className="overviewCard-subtitle">Chili Cookoff</p>
        </div>
      </div>
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--mail">
           <i className="far fa-envelope"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">Recent <strong>Emails</strong></h3>
          <p className="overviewCard-subtitle">+10</p>
        </div>
      </div>
      <div className="overviewCard">
        <div className="overviewCard-icon overviewCard-icon--photo">
           <i className="far fa-file-image"></i>
        </div>
        <div className="overviewCard-description">
          <h3 className="overviewCard-title text-light">New <strong>Album</strong></h3>
          <p className="overviewCard-subtitle">House Concert</p>
        </div>
      </div>
    </div> 
    <div className="main__cards">
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">Your <strong>Events</strong>
            <a href="#" className="card__header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div className="card__main">
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-gift"></i></div>
            <div className="card__time">
              <div>today</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Jonathan G</div>
              <div className="card__description">Going away party at 8:30pm. Bring a friend!</div>
              <div className="card__note">1404 Gibson St</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-plane"></i></div>
            <div className="card__time">
              <div>Tuesday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Matthew H</div>
              <div className="card__description">Flying to Bora Bora at 4:30pm</div>
              <div className="card__note">Delta, Gate 27B</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-book"></i></div>
            <div className="card__time">
              <div>Thursday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">National Institute of Science</div>
              <div className="card__description">Join the institute for an in-depth look at Stephen Hawking</div>
              <div className="card__note">7:30pm, Carnegie Center for Science</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-heart"></i></div>
            <div className="card__time">
              <div>Friday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">24th Annual Heart Ball</div>
              <div className="card__description">Join us and contribute to your favorite local charity.</div>
              <div className="card__note">6:45pm, Austin Convention Ctr</div>
            </div>
          </div>
          <div className="card__row">
            <div className="card__icon"><i className="fas fa-heart"></i></div>
            <div className="card__time">
              <div>Saturday</div>
            </div>
            <div className="card__detail">
              <div className="card__source text-bold">Little Rock Air Show</div>
              <div className="card__description">See the Blue Angels fly with roaring thunder</div>
              <div className="card__note">11:00pm, Jacksonville Airforce Base</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__header-title text-light">Recent <strong>Documents</strong>
            <a href="#" className="card__header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div className="card">
          <div className="documents">
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">tesla-patents</div>
              <div className="document__date">07/16/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">yearly-budget</div>
              <div className="document__date">09/04/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">top-movies</div>
              <div className="document__date">10/10/2018</div>
            </div>
            <div className="document">
              <div className="document__img"></div>
              <div className="document__title">trip-itinerary</div>
              <div className="document__date">11/01/2018</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card--finance">
        <div className="card__header">
          <div className="card__header-title text-light">Monthly <strong>Spending</strong>
            <a href="#" className="card__header-link text-bold">View All</a>
          </div>
          <div className="settings">
            <div className="settings__block"><i className="fas fa-edit"></i></div>
            <div className="settings__block"><i className="fas fa-cog"></i></div>
          </div>
        </div>
        <div id="chartdiv"></div>
      </div>
    </div> 
  </main>

  <footer className="footer">
    <p><span className="footer__copyright">&copy;</span> 2018 MTH</p>
  </footer>
</div>





        {articles.length ? (
        <CardsContainer>
            
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