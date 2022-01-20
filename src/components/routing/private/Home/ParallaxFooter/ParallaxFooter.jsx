import React from 'react';
import {ParallaxBanner} from "react-scroll-parallax";
import './ParallaxFooter.scss'
import {useNavigate} from "react-router-dom";

const ParallaxFooter = (props) => {

    const navigate = useNavigate()

    function handleRegister() {
        navigate('/register')
    }

    function handleLogin() {
        navigate('/login')
    }

    return (
        <ParallaxBanner
            className="your-class"
            layers={[
                {
                    image: props.imgsrc,
                    amount: 0.3,
                }
            ]}
            style={{
                height: props.height,
            }}
        >
            <h1 className='h1_footer'>
                <div onClick={handleLogin} className='action_button_to_register'>
                <span>
                    Log in
                </span>
                </div>
                <div onClick={handleRegister} className='action_button_to_register'>
                <span>
                    Register
                </span>
                </div>

            </h1>

        </ParallaxBanner>
    );
};

export default ParallaxFooter;