import React from 'react';
import Poster from '../assets/Poster.png'
import iconReks from '../assets/icon/pfps/Reks.png'
import iconAKA from '../assets/icon/pfps/Aka.png'
import iconRy from '../assets/icon/pfps/Ry.png'
import iconsyd from '../assets/icon/pfps/Syd.png'
import icongus from '../assets/icon/pfps/Gus.png'
import Members from './ui/Members';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__half-1">
                        <figure className="header__image--wrapper">
                            <LazyLoadImage src={Poster} alt="" loading='lazy' />
                        </figure>
                    </div>
                    <div className="header__half-2">
                        <div className="header__description">
                            <h1 className="header__title">Dragon Ball Toki</h1>
                            <h2 className='header__description--para'>What if the Time Patrol got involved with the <span className="alt__color">Time-Space rift</span> from <span className="alt__color">Dragon Ball Fusions</span>? What adventures would come about from this little hypothetical? Find out here!</h2>
                        </div>
                        <Link to="/read">
                            <button className="btn">Read now!</button>
                        </Link>
                    </div>
                </div>
                <div className="members__container">
                    <h1 className="members__title">Meet the Team!</h1>
                    <div className="empty__space"></div>
                    <div className="members">
                        <Members icon={iconReks} name='Reks' bio='Some random guy with the mental capacity of a 10 year old' role='Lead Artist' link='https://twitter.com/BlackRexArt' />
                        <Members icon={iconAKA} name='AKA_Nobodyy' bio='| AKA エケエ | Art' role='Lead Artist' link='https://twitter.com/aka_nobodyy'/>
                        <Members icon={iconsyd} name='Syd' bio='25|she/her|goku stan|ancient saiyan afficionado|✡️I love Shallot 💕' role='Writer' link='https://twitter.com/FigmentSaint' />
                        <Members icon={iconRy} name='Ry' bio='「Ry」• ENG/FR 🆗• Asian • I draw' role='Designer' link='https://twitter.com/Rykun_DSZ' />
                        <Members icon={icongus} name='Gus' bio='27 | artist | 🇧🇷' role='Backgrounds' link='https://twitter.com/gusceps' />
                    </div>
                </div>
                <div className="empty__space"></div>
            </header>
        </section>
    );
}

export default Landing;
