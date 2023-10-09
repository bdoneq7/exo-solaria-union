import React from "react";
import aliens from "../../assets/images/aliens.jpg";



function Aliens(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Alien Species</h1>
      
      <p>
        Humans<br>
        </br>
        </p>
      
      <div className="my-2 mx-2">
      <img src={aliens} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />

      </div>
    </section>
  );
}

export default Aliens;