import React from 'react';
import './ParallaxBody.scss'
import {ParallaxBanner} from "react-scroll-parallax";

const ParallaxBody = (props) => {
    return (
        <ParallaxBanner
            className="header_parallax"
            layers={[
                {
                    image: props.imgsrc, amount: .3
                },
                // {
                //     image: 'https://foo.com/bar.png',
                //     amount: 0.2,
                // },
            ]}
            style={{
                height: props.height,
            }}
        >
            <h1 className='header_title'>{props.content}</h1>
        </ParallaxBanner>
    );
};

export default ParallaxBody;