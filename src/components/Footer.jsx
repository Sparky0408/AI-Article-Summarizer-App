// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>©{<span>&copy {new Date().getFullYear()}; Ruturaj Shinde. All Rights Reserved.</span>}</p>
      </div>
    </footer>
  );
};

export default Footer;
