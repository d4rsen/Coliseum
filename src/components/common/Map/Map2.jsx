import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './Map.module.css'
import SvgCave from './SvgCave/SvgCave'
import SvgPic from './SvgCazarm/SvgCazarm'
import SvgColiseum from './SvgColiseum/SvgColiseum'
import SvgMarket from './SvgMarket/SvgMarket'
import SvgObservation from './SvgObservation/SvgObservation'
import SvgPrimaryCastle from './SvgPrimaryCastle/SvgPrimaryCastle'
import SvgTrain from './SvgTrain/SvgTrain'

const background = require('./pictures/map.png')
// const svg = require('./pictures/home.svg')
console.log(background)

const Map = ({width, height, type}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const navigation = useNavigate()
    console.log(type)
    return (
        <div className={type === 'logIn' ? style.map__login : style.map}>
            <img className={style.map__pic} src={background}></img>

            <div className={style.map__cazarm}>
                <SvgPic stroke={'red'}/>
            </div>

            <div className={style.map__observation}>
                <SvgObservation/>
            </div>

            <div className={style.map__primaryCastle}>
                <SvgPrimaryCastle/>
            </div>
            <div className={style.map__train}>
                <SvgTrain/>
            </div>

            <div className={style.map__market}>
                <SvgMarket/>
            </div>
            <div className={style.map__SvgCave}>
                <SvgCave/>
            </div>
            <div className={style.map__coliseum}>
                <SvgColiseum/>
            </div>
            {/* <div className={style.map__coliseum}></div> */}
        </div>
    )
}

export default Map
