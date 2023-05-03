import React, {navigationLinks} from "react";
import { Link } from 'react-router-dom';

function Navigation({ navigationLinks }) {

  if (!navigationLinks || !Array.isArray(navigationLinks)) {
    return null;
  }
  
  return (
    <nav>
      <ul className="navigation-list">
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