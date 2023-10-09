import React from 'react';
import starfield from "../../assets/images/starfield.jpg";


function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">About Exo Solaria Union</h1>
      
      <div className="my-2 mx-2">
      <img src={starfield} className="my-2" style={{ width: "20%", height: "20%" }} alt="" title="" />
        <p>
        The Exo Solaria Union is dedicated to providing a list of exo planets and star systems, and encouraging the exploration and colonization of space.
        </p>
      </div>
    </section>
  );
}

export default About;