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

import * as PropTypes from 'prop-types'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import bodyImg from './battle.jpeg'
import footerImg from './fly.jpeg'

import headerImg from './landscape.jpg'
import ParallaxBody from './ParallaxBody/ParallaxBody'
import ParallaxContent from './ParallaxContent/ParallaxContent'
import ParallaxHeader from './ParallaxImg/ParallaxHeader'

function ParallaxFooter(props) {
    return null
}

ParallaxFooter.propTypes = {
    opacity: PropTypes.string,
    height: PropTypes.string,
    imgsrc: PropTypes.any
}

function Home() {

    const content = 'Coliseum'

    return (
        <div>
            <ParallaxProvider>

                <ParallaxHeader imgsrc={headerImg} height="100vh" opacity=".5" content={content}>
                </ParallaxHeader>
                <h1>The world of Grimgold is full of mysteries and challenges.
                    You will fight the fears of this world and will have to
                    face yours. The fate of not only the great capital,
                    but the entire game world depends on each and every action
                    you choose!</h1>
                <ParallaxContent imgsrc={bodyImg} height="60vh" opacity=".5">
                </ParallaxContent>
                <h1>body</h1>
                <ParallaxFooter imgsrc={footerImg} height="40vh" opacity=".5">
                </ParallaxFooter>
                <h1>footer</h1>
                <ParallaxBody imgsrc={footerImg} height="40vh" opacity=".5">

                </ParallaxBody>
            </ParallaxProvider>
        </div>
    )
}

export default Home