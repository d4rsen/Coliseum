import React from 'react'
import './BackGround.scss'

const BackGround = ({type}) => {
    let src = type === 'home'
        ? '/assets/background/landscape.jpg'
        : type === 'auth'
            ? '/assets/background/battle.jpg'
            : type === 'choose-class'
                ? '/assets/background/fly.jpg'
                : '/assets/background/dungeon.jpg'

    return (
        <img
            src={src}
            alt="background"
            className="background"
        />
    )
}

export default BackGround
