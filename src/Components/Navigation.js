import React, {navigationLinks} from "react";
import { Link } from 'react-router-dom';


function Navigation({ navigationLinks }) {

  if (!navigationLinks) {
    return null; // or display an error message
  }
  
  return (
    <nav>
      <ul>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;