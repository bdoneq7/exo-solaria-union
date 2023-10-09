import React from "react";
import earthlike from "../../assets/images/earthlike.jpg";



function Earthlike(props) {
  return (
    <section>
      <h1 className="mx-2" id="about">Earth-Like Planets</h1>
      
      <p>
        Earth<br>
        </br>
        Proxima Centauri
        </p>
      
      <div className="my-2 mx-2">
      <img src={earthlike} className="my-2" style={{ width: "50%", height: "50%" }} alt="" title="" />

      </div>
    </section>
  );
}

export default Earthlike;