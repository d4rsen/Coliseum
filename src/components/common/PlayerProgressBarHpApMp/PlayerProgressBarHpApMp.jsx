import React from 'react'
import './PlayerProgressBarHpApMp.module.css'

const PlayerProgressBarHpApMp = ({bgColor, stat, height, fontSize, type, rotate}) => {
    return (
        <>
            {type ===
                'header' && (
                    <div className="header__exp"
                         style={{
                             width: `${stat}%`,
                             height: `${20}px`,
                             backgroundColor: bgColor,
                             borderRadius: '5px',
                         }}
                    >
                        <span style={{fontSize: `${fontSize}px`}}>{stat}</span>
                    </div>
                )}
            {type ===
                'player' && (
                    <div
                        style={{
                            width: `${20}%`,
                            height: `${stat}%`,
                            backgroundColor: bgColor,
                        }}
                    >
                        <p style={{fontSize: `${fontSize}px`, transform: `rotateX(${rotate}deg)`}}>{stat}</p>
                    </div>
                )}
            {type ===
                'exp' && (
                    <div

                        style={{
                            width: `${stat}%`,
                            // height: `${stat}%`,
                            backgroundColor: bgColor,
                            borderRadius: '5px',

                        }}


                    >
                        <p style={{fontSize: `${fontSize}px`, transform: `rotateX(${rotate}deg)`}}>{stat}</p>
                    </div>
                )}
        </>
    )
}

export default PlayerProgressBarHpApMp
