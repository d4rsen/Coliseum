import React from 'react';
import './PlayerProgressBarHpApMp.module.css';
const PlayerProgressBarHpApMp = ({ bgColor, stat, height,fontSize }) => {
  return (
    
        <div
          // className={` ${bgColor}  `}
         
          style={{ width: `${stat}%`, height: `${height}px`,
        backgroundColor: bgColor }}
      
        >
          <span style={{ fontSize:`${fontSize}px`}}>{stat}</span>
        </div>
    
  );
};

export default PlayerProgressBarHpApMp;
