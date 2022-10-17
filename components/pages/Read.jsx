import React from 'react';
import Chapter1 from '../ui/Chapter1';

const Read = () => {
    return (
        <div id="landing">
            <div className="container">
                <div className="row row__column">
                    <h1 className="read__title">Read Chapter 1!</h1>
                    <div className="empty__space"></div>
                    <div className="reader__wrapper">
                        <Chapter1 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Read;
