import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './Map.module.css'
import SvgCave from './SvgCave/SvgCave'
import SvgColiseum from './SvgColiseum/SvgColiseum'
import SvgMarket from './SvgMarket/SvgMarket'
import SvgObservation from './SvgObservation/SvgObservation'
import SvgPrimaryCastle from './SvgPrimaryCastle/SvgPrimaryCastle'
import SvgTrain from './SvgTrain/SvgTrain'

const background = require('./pictures/map.png')

const Map = ({width, height, type}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const navigation = useNavigate()

    const components = [
        {
            component: <SvgObservation/>,
            class: style.map__observation,
            link: '/active-rooms',
        },
        {
            component: <SvgPrimaryCastle/>,
            class: style.map__primaryCastle,
            link: '/main-tower',
        },
        {
            component: <SvgTrain/>,
            class: style.map__train,
            link: '/mannequin',
        },
        {
            component: <SvgMarket/>,
            class: style.map__market,
            link: '/auction',
        },
        {
            component: <SvgCave/>,
            class: style.map__SvgCave,
            link: '/dungeon'
        },
    ]

    const roomsHandler = (e) => {
        e.preventDefault()
        navigation('/rooms')
    }
    return (
        <div className={type === 'logIn' ? style.map__login : style.map}>
            <img className={style.map__pic} src={background}/>

            {components.map((component, i) => (
                <div
                    onClick={() => navigation(component.link)}
                    className={component.class}
                    id={i}
                    key={i}
                >
                    {component.component}
                </div>
            ))}

            <div onClick={roomsHandler} className={style.map__coliseum}>
                <SvgColiseum/>
            </div>
        </div>
    )
}

export default Map
