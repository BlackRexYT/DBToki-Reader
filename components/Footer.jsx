import React from 'react';
import logo from '../assets/LogoFooter.png'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={logo} alt="" className="footer__logo--img" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className="footer__link">Home</a>
                        <a href="https://twitter.com/DragonBallToki" className="footer__link">Twitter</a>
                        <a href="/read" className="footer__link">Read</a>
                        <a href="/about" className="footer__link">About</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
