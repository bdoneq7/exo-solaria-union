import React from 'react';
import brian from "../../assets/images/brian-small.png";

function About(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">About Brian</h1>
      <img src={brian} className="my-2" style={{ width: "20%", height: "20%" }} alt="brian" title="brian" />
      <div className="my-2 mx-2">
        <p>
        I am a Full Stack Web Developer that loves to be cre8tive in all aspects.<br/>
        <br/>
        I have been passionate about coding ever since I was a kid, teaching myself how to code when there was only dial up internet! Since then I have been on a life long journey of learning and improving my technical coding skills. I love to create websites around my hobbies including astronomy, gaming, roleplaying, photography, and more. I am always trying to perfect my projects and pay attention to detail.<br/>
        <br/>
        I am great at working in a team environment, thinking outside the box, and constantly looking to the future evolution of technology. My desire is to help bring about the evolution of the Internet to the next level. I am fascinated with the concept of how the future of the Internet will evolve and morph. I am focused on making professional next generation websites and applications that add value to the web industry. I am committed to constantly learning and perfecting my coding craft to bring these ideals to reality!
        </p>
      </div>
    </section>
  );
}

export default About;