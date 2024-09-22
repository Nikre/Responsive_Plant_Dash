import React from 'react';
import Container from './Container';

const Footer: React.FC = () => {
    return (
        <footer>
            <p className='footer-text'>&copy; {new Date().getFullYear()} Created by Martina Del Romano & Nicolò Monarca with ❤️</p>
        </footer>
    );
};

export default Footer;