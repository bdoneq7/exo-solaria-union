import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/logo.png";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div class="logodiv">
			<img src={logo} className="my-2" style={{ width: "20%", height: "20%" }} alt="Exo Solaria Union" title="Exo Solaria Union" /> <h1>Exo Solaria Union</h1>
			</div>
			<div class="linksdiv">
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Nav>
			</div>
		</header>
	);
}

export default Header;