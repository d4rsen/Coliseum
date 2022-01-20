import React from 'react';
import {ParallaxBanner} from "react-scroll-parallax";

const ParallaxContent = (props) => {
    return (
        <ParallaxBanner layers={[
            {
                image: props.imgsrc, amount: .3
            }]}
                        style={{
                            height: props.height
                        }}>

        </ParallaxBanner>
    );
};

export default ParallaxContent;