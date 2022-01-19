import React from 'react';
import {Parallax} from "react-parallax";

const DivOne = () => {

    const renderContent = () => (
        <>
            <div className="Parallax__content__heading">
                <h1 className="Parallax__content__heading__text">Closure</h1>
                <h2 className="Parallax__content__heading__caption">
                    Your one-stop source of Web Development tricks
                </h2>
            </div>
            <div className="Parallax__content__cta">
                <p>
                    <b>1. Like the video.</b> Because it helps me and my channel
                </p>
                <p>
                    <b>2. Like the video.</b> To see more content like that!
                </p>
                <p>
                    <b>3. Follow the Github link.</b> And play with this code yourself!
                </p>
            </div>
        </>
    );

    return (
        <Parallax
            blur={{min: -15, max: 15}}
            bgImage={require('../battle.jpeg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{height: '-100px'}}/>
            <div className="Parallax__content">{renderContent()}</div>
        </Parallax>
    );
};

export default DivOne;