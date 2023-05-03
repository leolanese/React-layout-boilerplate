import React from "react";
import Navigation from "./Navigation";
import './Body.css';

const Body = ({ name, profession, location, navigationLinks, routes }) => (
  <>
    <div className="body-container">

      <div className="body-left">
        <Navigation navigationLinks={navigationLinks} />
      </div>

      <div className="body-right">
        <h1>Body</h1>
        <h1>{name}</h1>
        <p>{profession}</p>
        <p>{location}</p>
        <p>Hi, I'm {name}. I'm a {profession} based in {location}.</p>

        <div>
          {routes}
        </div>
        
      </div>

    </div>
  </>
  );

export default Body;  