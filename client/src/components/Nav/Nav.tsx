import { Navbar, NavItem, NavLink} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import styled from "styled-components";
import './Nav.css';
import Logo from "../../images/logo-small.png";

const DashboardContainer = styled.div`
margin-left: auto;
`

const LogoutContainer = styled.div`
margin-right: auto;
`

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setState({data: null, loading: false, error: null});
        localStorage.removeItem("token");
        navigate("/");
    }
    return <Navbar className="m-auto navigationbar">
        
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>
            <img src={Logo} className="logo" alt="Exo Solaria Union" title="Exo Solaria Union" />
            </Link>
        </NavItem>
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>OUR PURPOSE</Link>
        </NavItem>
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>OUR VISION</Link>
        </NavItem>
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>OUR MISSION</Link>
        </NavItem>
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>FREE PREVIEW</Link>
        </NavItem>
        {state.data && (
            <DashboardContainer>
                <NavItem>
                    <NavLink style={{color: "#FCF3CF"}} onClick={handleLogout}>MY DASHBOARD</NavLink>
                </NavItem>
            </DashboardContainer>  
        )}

        {state.data && (
            <LogoutContainer> 
                <NavItem>
                    <NavLink style={{color: "#FCF3CF"}} onClick={handleLogout}>LOGOUT</NavLink>
                </NavItem>
            </LogoutContainer>
        )}
    
    </Navbar>
};

export default Nav;