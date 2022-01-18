import React from 'react';

import style from './Map.module.css';
import SvgObservation from './SvgObservation/SvgObservation';
import SvgPic from './SvgCazarm/SvgCazarm';
import SvgPrimaryCastle from './SvgPrimaryCastle/SvgPrimaryCastle';
import SvgTrain from './SvgTrain/SvgTrain';
import SvgMarket from './SvgMarket/SvgMarket';
import SvgCave from './SvgCave/SvgCave';
import SvgColiseum from './SvgColiseum/SvgColiseum';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const background = require('./pictures/map.png');
// const svg = require('./pictures/home.svg')
console.log(background);

const Map = ({ width, height, type }) => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const navigation = useNavigate();
  console.log(type);

  const components = [
    {
      component: <SvgPic />,
      class: style.map__cazarm,
      link: '/train',
    },
    {
      component: <SvgObservation />,
      class: style.map__observation,
      link: '/observer',
    },
    {
      component: <SvgPrimaryCastle />,
      class: style.map__primaryCastle,
      link: '/main-tower',
    },
    {
      component: <SvgTrain />,
      class: <SvgTrain />,
      link: '/mannequin',
    },
    {
      component: <SvgMarket />,
      class: style.map__market,
      // link: ,
    },
    {
      component: <SvgCave />,
      class: style.map__SvgCave,
    },
    // {
    //   component: <SvgColiseum />,
    //   class: style.map__coliseum,
    // },
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(ACTION_PlayerRegenerate());
  //   }, 3000);
  // }, [player, dispatch]);
  const roomsHandler = (e) => {
    e.preventDefault();
    navigation('/rooms');
  };
  return (
    <div className={type === 'logIn' ? style.map__login : style.map}>
      <img className={style.map__pic} src={background}></img>

      {components.map((component, i) => (
        <div
          onClick={() => navigation(component.link)}
          className={component.class}
          id={i}
        >
          {component.component}
        </div>
      ))}

      <div onClick={roomsHandler} className={style.map__coliseum}>
     
        <SvgColiseum />
      
      </div>
    </div>
  );
};

export default Map;
