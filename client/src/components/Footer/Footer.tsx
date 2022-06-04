import { Navbar, NavItem} from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () => {


    return <Navbar className="m-auto footer-section">
        
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>HOME</Link>
        </NavItem>
        <NavItem>
            <Link to="/termsofuse" className="nav-link" style={{color: "#ffffff"}}>TERMS OF USE</Link>
        </NavItem>
        <NavItem>
            <Link to="/privacypolicy" className="nav-link" style={{color: "#ffffff"}}>PRIVACY POLICY</Link>
        </NavItem>
        <NavItem>
            <Link to="https://www.facebook.com/exosolariaunion" className="nav-link" style={{color: "#ffffff"}}>FACEBOOK PAGE</Link>
        </NavItem>
        <NavItem>
            <Link to="https://www.youtube.com/channel/UClsd0ZTakEY9GqtxuCdB_3g" className="nav-link" style={{color: "#ffffff"}}>YOUTUBE CHANNEL</Link>
        </NavItem>
        
    
    </Navbar>
};

export default Footer;