import React from "react";
import starsystem from "../../assets/images/starsystem.jpg";



function Stars(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Star and Planet Database</h1>
      
      <p>
        Sol Star System<br>
        </br>
        Proxima Centauri System
        </p>
      
      <div className="my-2 mx-2">
      <img src={starsystem} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />

      </div>
    </section>
  );
}

export default Stars;