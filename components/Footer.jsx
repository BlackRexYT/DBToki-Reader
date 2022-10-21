import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoFooter.png'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={logo} alt="" className="footer__logo--img" loading='lazy' />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <a href="https://twitter.com/DragonBallToki" className="footer__link" target="_blank">Twitter</a>
                        <Link to="/read" className="footer__link">Read</Link>
                        <Link to="/about" className="footer__link">About</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
