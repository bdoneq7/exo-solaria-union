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
					<span onClick={() => setCurrentTab("portfolio")}>Core Book</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Stories</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Contact</span>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;