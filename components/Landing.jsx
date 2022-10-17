import React from 'react';
import Poster from '../assets/Poster.png'
import iconsyd from '../assets/Placeholder Icon.png'
import Members from './ui/Members';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__half-1">
                        <figure className="header__image--wrapper">
                            <img src={Poster} alt="" />
                        </figure>
                    </div>
                    <div className="header__half-2">
                        <div className="header__description">
                            <h1 className="header__title">Dragon Ball Toki</h1>
                            <h2 className='header__description--para'>What if the Time Patrol got involved with the <span className="alt__color">Time-Space rift</span> from <span className="alt__color">Dragon Ball Fusions</span>? What adventures would come about from this little hypothetical? Find out here!</h2>
                        </div>
                        <a href="/read">
                            <button className="btn">Read now!</button>
                        </a>
                    </div>
                </div>
                <div className="members__container">
                    <h1 className="members__title">Meet the Team!</h1>
                    <div className="empty__space"></div>
                    <div className="members">
                        <Members icon={iconsyd} name='Reks' bio='Some random guy with the mental capacity of a 10 year old' role='Lead Artist' />
                        <Members icon={iconsyd} name='AKA_Nobodyy' bio='| AKA エケエ | Art' role='Artist'/>
                        <Members icon={iconsyd} name='Syd' bio='25|she/her|goku stan|ancient saiyan afficionado|✡️I love Shallot 💕' role='Writer' />
                        <Members icon={iconsyd} name='Ry' bio='「Ry」• ENG/FR 🆗• Asian • I draw' role='Designer' />
                    </div>
                </div>
                <div className="empty__space"></div>
            </header>
        </section>
    );
}

export default Landing;
