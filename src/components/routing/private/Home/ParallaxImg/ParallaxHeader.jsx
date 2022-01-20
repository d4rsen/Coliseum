import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const ParallaxHeader = (props) => {
    return (
        <ParallaxBanner
            className="header_parallax"
            layers={[
                {
                    image: props.imgsrc, amount: .35
                },
                {
                    image: 'https://foo.com/bar.png',
                    amount: 0.2,
                },
            ]}
            style={{
                height: props.height,
            }}
        >

            <div style={
                {
                    boxShadow: '0 0px 100px -0px black',
                    background: 'rgba(2,6,20,0.35)',
                    position: 'relative',
                    alignContent: 'center'
                }
            }>
                <h1 style={
                    {
                        fontFamily: 'Grek',
                        color: 'rgba(250,250,250,0.8)',
                        filter: 'drop-shadow(0px 5px 5px rgb(255, 255, 255))',
                        fontSize: '15em',
                        marginTop: '20%'
                    }
                }>{props.content}</h1>
            </div>
        </ParallaxBanner>
    )
}

export default ParallaxHeader