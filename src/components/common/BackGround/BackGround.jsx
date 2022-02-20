import React from 'react'
import './BackGround.scss'

const BackGround = ({type}) => {
    let src = type === 'home'
        ? '/assets/background/landscape.png'
        : type === 'auth'
            ? '/assets/background/battle.png'
            : type === 'choose-class'
                ? '/assets/background/fly.png'
                : '/assets/background/background.png'

    return (
        <img
            src={src}
            alt="background"
            className="background"
        />
    )
}

export default BackGround
