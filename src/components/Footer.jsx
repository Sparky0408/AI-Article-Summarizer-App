// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© { <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>} Ruturaj Shinde. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
