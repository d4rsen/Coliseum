import {Parallax} from 'react-parallax';
import React from "react";

const DivTwo = () => {

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
            bgImage={require('../landscape.jpg')}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'relative',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        // left: '90%',
                        // top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
            <div className="Parallax__content">{renderContent()}</div>
        </Parallax>
    )
}

export default DivTwo