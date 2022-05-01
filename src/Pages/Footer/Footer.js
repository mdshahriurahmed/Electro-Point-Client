import React from 'react';
import './Footer.css'
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            <p><small>copyright ©  {year} electropoint  </small></p>
        </footer>
    );
};

export default Footer;