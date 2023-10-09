import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Stars from "./components/Stars";
import Earthlike from "./components/Earthlike";
import Aliens from "./components/Aliens";

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "stars":
				return <Stars />;
			case "earthlike":
				return <Earthlike />;
			case "aliens":
				return <Aliens />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;