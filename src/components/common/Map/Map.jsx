import React from 'react';

import style from './Map.module.css';
import SvgObservation from './SvgObservation/SvgObservation';
import SvgPic from './SvgCazarm/SvgCazarm';
import SvgPrimaryCastle from './SvgPrimaryCastle/SvgPrimaryCastle';
import SvgTrain from './SvgTrain/SvgTrain';
import SvgMarket from './SvgMarket/SvgMarket';
import SvgCave from './SvgCave/SvgCave';
console.log('---->', { style });

const background = require('./pictures/map.png');
// const svg = require('./pictures/home.svg')
console.log(background);

const Map = ({}) => {
  return (
    <div className={style.map}>
      <img className={style.map__pic} src={background}></img>

      <div className={style.map__cazarm}>
        <SvgPic stroke={'red'} />
      </div>

      <div className={style.map__observation}>
        <SvgObservation />
      </div>

      <div className={style.map__primaryCastle}>
        <SvgPrimaryCastle />
      </div>
      <div className={style.map__train}>
        <SvgTrain />
      </div>
     
      <div className={style.map__market}>
        <SvgMarket/>
      </div>
      <div className={style.map__SvgCave}> 
      <SvgCave/>
       </div>
      <div className={style.map__coliseum}></div>
      <div className={style.map__coliseum}></div>
    </div>
  );
};

export default Map;
