import React from 'react';
import starfield from "../../assets/images/starfield.jpg";


function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">About Exo Solaria Union</h1>

      <p>
        The Exo Solaria Union is dedicated to providing a list of exo planets and star systems, and encouraging the exploration and colonization of space.
        </p>
      
      <div className="my-2 mx-2">
      <img src={starfield} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />
        
      </div>
    </section>
  );

  
}

export default About;