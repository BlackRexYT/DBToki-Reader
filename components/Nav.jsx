import React from 'react';
import  logo  from '../assets/Logo.png'

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link link--hover--effect">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="https://twitter.com/DragonBallToki" className="nav__link link--hover--effect">
                            Twitter
                        </a>
                    </li>
                    <li className="">
                        <figure className="nav__logo--container">
                            <img src={logo} alt="" />
                        </figure>
                    </li>
                    <li className="nav__list">
                        <a href="/read" className="nav__link link--hover--effect">
                            Read
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/about" className="nav__link link--hover--effect">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
