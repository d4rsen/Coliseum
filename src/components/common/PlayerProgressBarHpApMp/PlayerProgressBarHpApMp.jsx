import React from 'react';
import './PlayerProgressBarHpApMp.module.css';

const PlayerProgressBarHpApMp = ({bgColor, stat, height, fontSize, type, rotate}) => {

    return (
        <>
            {type ===
                'header' && (
                    <div
                        style={{
                            width: `${stat}%`,
                            height: `${height}px`,
                            backgroundColor: bgColor,
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
        </>
    );
};

export default PlayerProgressBarHpApMp;
