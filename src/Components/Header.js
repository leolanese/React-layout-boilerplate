import React from 'react';

const Header = ({ title, subTitle }) => (
    <div className="header">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>Thanks for visiting.</p>
    </div>
  );

export default Header;  