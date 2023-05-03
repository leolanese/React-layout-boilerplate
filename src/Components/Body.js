import React from "react";
import Navigation from "./Navigation";

const Body = ({ name, profession, location, navigationLinks })  => (
  <>
    <Navigation links={navigationLinks} />

    <div className="body">
      <div className="body-content">
        <h1>Body</h1>
        <h1>{name}</h1>
        <p>{profession}</p>
        <p>{location}</p>
        <p>Hi, I'm {name}. I'm a {profession} based in {location}.</p>
        <Navigation navigationLinks={navigationLinks} />
      </div>
    </div>
  </>
  );

export default Body;  