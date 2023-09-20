import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">Brian Done Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/Brian_Done_Resume.pdf")} download>
					<h4>&#60;Download Brian's Resume&#62;</h4>
				</a>
			</div>
			<div>
				<h5 class="proficient-title">Front-End Proficiencies</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>AJAX</li>
					<li>React</li>
					<li>UI/UX</li> 
					<li>Responsive Design</li>
				</ol>
				<br></br>
				<h5 class="proficient-title">Back-End Proficiencies</h5>
				<ol>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>RESTful API</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5 class="proficient-title">Development Tool Proficiencies</h5>
				<ol>
					<li>Git</li>
					<li>NPM</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h5 class="proficient-title">Database Proficiencies</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;