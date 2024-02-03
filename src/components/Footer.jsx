// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>{ <span>{new Date().getFullYear()}&copy; Ruturaj Shinde. All Rights Reserved.</span>}</p>
      </div>
    </footer>
  );
};

export default Footer;
