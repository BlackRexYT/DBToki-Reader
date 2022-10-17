import React from 'react';

const Members = ({ icon, name, bio, role }) => {
    return (
            <div className="member__card">
                <div className="member__icon">
                    <figure className="member__icon--img-wrapper">
                        <img src={icon} alt="" className="member__icon--img" />
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
            </div>
    );
}

export default Members;
