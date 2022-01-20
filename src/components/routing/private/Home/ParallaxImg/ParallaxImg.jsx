import React from 'react';
import {ParallaxBanner} from "react-scroll-parallax";

const ParallaxImg = (props) => {
    return (
        <ParallaxBanner
            className="your-class"
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
            <h1>Banner Children</h1>
        </ParallaxBanner>
        // <ParallaxBanner
        //     layers={[{image: props.imgsrc, amount: .3}]}
        //     style={{height: props.height}}
        // >
        //     <div>
        //         {props.children}
        //     </div>
        // </ParallaxBanner>
    );
};

export default ParallaxImg;