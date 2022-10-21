import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import  logo  from '../assets/Logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link link--hover--effect">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <a href="https://twitter.com/DragonBallToki" className="nav__link link--hover--effect" target="_blank">
                            Twitter
                        </a>
                    </li>
                    <li className="">
                        <figure className="nav__logo--container">
                            <LazyLoadImage src={logo} alt="" loading='lazy'/>
                        </figure>
                    </li>
                    <li className="nav__list">
                        <Link to="/read" className="nav__link link--hover--effect">
                            Read
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/about" className="nav__link link--hover--effect">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
