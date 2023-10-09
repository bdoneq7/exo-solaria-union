import React from "react";
import Nav from "../Nav";
import logo from "../../assets/images/logo-small.png";

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div class="logodiv">
			<img src={logo} className="my-2" alt="Exo Solaria Union" title="Exo Solaria Union" />
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