import React from 'react';
import './PlayerProgressBarHpApMp.module.css';
const PlayerProgressBarHpApMp = ({ bgColor, stat, height,fontSize }) => {
  return (
    
        <div
          // className={` ${bgColor}  `}
          // role="progressbar"
          style={{ width: `${stat}%`, height: `${height}px`,
        backgroundColor: bgColor }}
          // aria-valuenow="100"
          // aria-valuemin="0"
          // aria-valuemax="100"
        >
          <span style={{ fontSize:`${fontSize}px`}}>{stat}</span>
        </div>
    
  );
};

export default PlayerProgressBarHpApMp;
