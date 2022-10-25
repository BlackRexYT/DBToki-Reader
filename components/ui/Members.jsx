import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Members = ({ icon, name, bio, role, link }) => {
    return (
            <div className="member__card">
                <div className="member__icon">
                    <figure className="member__icon--img-wrapper">
                        <a href={link} target='_blank'>
                            <img src={icon} alt="" className="member__icon--img" />
                        </a>
                    </figure>
                </div>
                <div className="member__title">
                    <h2>{name}</h2>
                </div>
                <div className="member__role">
                    <p>{role}</p>
                </div>
                <div className="member__bio">
                    <p>{bio}</p>
                </div>
                <div className="member__social btn2">
                    <a href={link} target="_blank" className="member__social btn2">
                        <FontAwesomeIcon icon={['fab','twitter']} />
                    </a>
                </div>
            </div>
    );
}

export default Members;
