import React from "react";
import gitLogo from "../../assets/images/food4thought.PNG"
import image_0 from "../../assets/images/food4thought.jpg";
import image_1 from "../../assets/images/whatsoutthere.jpg";
import image_2 from "../../assets/images/what2watch.jpg";


function Project(props) {
  const projectList = [
    {
      name: "Food4Thought",
      type: "Node, Express, MongoDB, GraphQL, React, Bootstrap",
      description: "Search for Recipes",
      image: image_0,
      appLink: "https://immense-shelf-25976.herokuapp.com",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/Dapr1nc3/Food-App",
      accessibility: "Recipe App"
    },
    {
      name: "What's Out There?",
      type: "Node, Express, MySQL, Sequelize, Handlebars, Bulma",
      description: "Documents UFO/UAP Sightings and events in a searchable database.",
      image: image_1,
      appLink: "https://bdoneq7-whats-out-there.herokuapp.com",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/msdale/whats-out-there/tree/main",
      accessibility: "UFO sightings Database"
    },
    {
      name: "What 2 Watch",
      type: "Bulma/JavaScript/Ajax",
      description: "For when you need to Find the Right Movie",
      image: image_2,
      appLink: "https://dapr1nc3.github.io/what-to-watch/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/bdoneq7/what-to-watch",
      accessibility: "What 2 Watch"
    },
    {
      name: "Secure Password Generator",
      type: "HTML/CSS/JavaScript",
      description: "Allows a User to generate a Secure Password Generator",
      image: image_2,
      appLink: "https://bdoneq7.github.io/password-generator/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/bdoneq7/password-generator/tree/main",
      accessibility: "Secure Password Generator"
    },
    {
      name: "Code Quiz",
      type: "HTML/CSS/JavaScript",
      description: "Code Quiz",
      image: image_2,
      appLink: "https://bdoneq7.github.io/code-quiz/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/bdoneq7/code-quiz/tree/main",
      accessibility: "Code Quiz"
    },
    {
      name: "Work Day Scheduler",
      type: "Boostrap/JavaScript/jQuery",
      description: "A simple calendar app for scheduling your work day",
      image: image_2,
      appLink: "https://bdoneq7.github.io/work-day-scheduler/",
      gitLogo: gitLogo,
      gitRepo: "https://github.com/bdoneq7/work-day-scheduler/tree/main",
      accessibility: "Work Day Scheduler"
    },
    
  ];

  return (
    <div className="flex-row">
      {projectList.map((project) => (
        <section>
          
          <div>
          <p>&nbsp;<span class="project-title">{project.name}</span><br/><br/>
          &nbsp;Description: {project.description}<br/><br/>
          &nbsp;Built with {project.type}<br/>
          &nbsp;<a href={project.gitRepo} target="_blank" rel="noreferrer" alt="git Icon">Github Repo Link
            </a>
          </p>
          <br/>
            <a href={project.appLink} target="_blank" rel="noreferrer" alt="app image">
              <img
                src={project.image}
                alt={project.accessibility}
                className="img-thumbnail mx-1 my-project-link"
              />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Project;