import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const ParallaxContent = (props) => {
    return (
        <ParallaxBanner layers={[
            {
                image: props.imgsrc, amount: .2
            }]}
                        style={{
                            height: props.height
                        }}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <h1 style={{
                    // marginBottom: '3em',
                    // paddingBottom: '3em',
                    height: '20em',
                    width: '30em',
                    // backgroundColor: 'rgba(255,255,255,.3)',
                    // borderRadius: '30%'
                    // margin: "auto"
                }}>
                    <iframe style={{
                        boxShadow: '50px -150px 800px rgba(0,0,0,0.4)',
                        padding: '1em',
                        // margin: 'auto',
                        marginTop: '2em',
                        height: '70%',
                        width: '90%',
                    }} src='https://www.youtube.com/embed/TzhKPqOt2aE'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                    />
                </h1>
            </div>
        </ParallaxBanner>
    )
}

export default ParallaxContent