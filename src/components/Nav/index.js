import React from "react";


function Nav(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("stars")}>Exoplanet Star Systems</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("earthlike")}>Earth-Like Planets</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("aliens")}>Alien Species</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;