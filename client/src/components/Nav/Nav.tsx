import { Navbar, NavItem, NavLink} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context";
import styled from "styled-components";

const LeftNavContainer = styled.div`
margin-left: auto;
`

const Nav = () => {
    const [state, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setState({data: null, loading: false, error: null});
        localStorage.removeItem("token");
        navigate("/");
    }
    return <Navbar style={{backgroundColor: "#17202A"}}>
        <NavItem>
            <Link to="/" className="nav-link" style={{color: "#ffffff"}}>Home</Link>
        </NavItem>
        {state.data && (
            <LeftNavContainer>
                <NavItem>
                    <NavLink style={{color: "#ffffff"}} onClick={handleLogout}>Logout</NavLink>
                </NavItem>
            </LeftNavContainer>
        )}
    </Navbar>
};

export default Nav;