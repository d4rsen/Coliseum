// import React, {useEffect, useState} from 'react';
// import "./Home.scss";
// import DivOne from "./DivOne/DivOne";
// import DivTwo from "./DivTwo/DivTwo";
//
// const Home = () => {
//     const [offsetY, setOffsetY] = useState(0);
//     const handleScroll = () => setOffsetY(window.pageYOffset);
//
//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
//
//     const renderContent = () => (
//         <>
//             <div className="Parallax__content__heading">
//                 <h1 className="Parallax__content__heading__text">Closure</h1>
//                 <h2 className="Parallax__content__heading__caption">
//                     Your one-stop source of Web Development tricks
//                 </h2>
//             </div>
//             <div className="Parallax__content__cta">
//                 <p>
//                     <b>1. Like the video.</b> Because it helps me and my channel
//                 </p>
//                 <p>
//                     <b>2. Like the video.</b> To see more content like that!
//                 </p>
//                 <p>
//                     <b>3. Follow the Github link.</b> And play with this code yourself!
//                 </p>
//             </div>
//         </>
//     );
//
//     return (
//         <>
//
//             <DivOne/>
//
//             <section className="Parallax">
//                 <div
//                     className="Parallax__background"
//                     style={{transform: `translateY(-${offsetY * 0.2}px)`}}
//                 />
//
//                 <div
//                     className="Parallax__background-triangles"
//                     style={{transform: `translateY(${offsetY * 0.2}px)`}}
//                 />
//                 <div className="Parallax__content">{renderContent()}</div>
//             </section>
//
//             <DivTwo/>
//             {/*<section className="Parallax">*/}
//             {/*    <div*/}
//             {/*        className={"Parallax__background_2"}*/}
//             {/*        style={{transform: `translateY(-${offsetY * -0.5}px)`}}*/}
//             {/*    />*/}
//             {/*    <div className="Parallax__content">{renderContent()}</div>*/}
//             {/*</section>*/}
//         </>
//     );
// };
//
// export default Home;

import React from "react";
import {ParallaxProvider} from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg/ParallaxImg";

import headerImg from './landscape.jpg'
import bodyImg from './battle.jpeg'
import footerImg from "./fly.jpeg";
import ParallaxBody from "./ParallaxBody/ParallaxBody";

function Home() {

    const content = 'Coliseum'

    return (
        <div>
            <ParallaxProvider>

                <ParallaxImg imgsrc={headerImg} height="100vh" opacity=".5" content={content}>
                </ParallaxImg>
                <h1>header</h1>
                <ParallaxImg imgsrc={bodyImg} height="40vh" opacity=".5">
                </ParallaxImg>
                <h1>body</h1>
                <ParallaxImg imgsrc={footerImg} height="40vh" opacity=".5">
                </ParallaxImg>
                <h1>footer</h1>
                <ParallaxBody>
                    
                </ParallaxBody>
            </ParallaxProvider>
        </div>
    )
}

export default Home