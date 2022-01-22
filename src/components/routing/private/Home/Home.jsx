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
import './Home.scss'

import headerImg from './landscape.jpg'
import ParallaxContent from './ParallaxContent/ParallaxContent'
import ParallaxFooter from './ParallaxFooter/ParallaxFooter'
import ParallaxHeader from './ParallaxImg/ParallaxHeader'

ParallaxFooter.propTypes = {
    opacity: PropTypes.string,
    height: PropTypes.string,
    imgsrc: PropTypes.any
}

function Home() {

    const content = 'Coliseum'

    return (
        <div className="flexy_parallax">
            <ParallaxProvider>

                <ParallaxHeader imgsrc={headerImg} height="100vh" opacity=".5" content={content}>
                </ParallaxHeader>
                <h1 className="content_parallax">The world of Grimgold is full of mysteries and challenges.
                    You will fight the fears of this world and will have to
                    face yours. The fate of not only the great capital,
                    but the entire game world depends on each and every action
                    you choose!</h1>

                <ParallaxContent imgsrc={footerImg} height="60vh" opacity=".5">

                </ParallaxContent>

                <h1 className="content_parallax">Each player will be able to choose a character according
                    to their preferences. The game will literally complement
                    your skills: the warrior is more suitable for the brave
                    gamers running headlong into the crowd of enemies.
                    Assassin will appeal to those players whose spirit is full
                    of cunning and a thirst for getting more from life than is
                    destined for them. The class of monks will fascinate with
                    its empowering calmness and unusual insights into the
                    familiar things.</h1>
                <ParallaxFooter imgsrc={bodyImg} height="60vh" opacity=".5">
                </ParallaxFooter>
                <h1 style={{
                    fontSize: 'smaller'
                }}
                >
                    foxestail~ group © 2022</h1>
                {/*<ParallaxBody imgsrc={footerImg} height="40vh" opacity=".5">*/}

                {/*</ParallaxBody>*/}
            </ParallaxProvider>
        </div>
    )
}

export default Home