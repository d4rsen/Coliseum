import React from 'react'
import SvgCave from '../components/common/Map/SvgCave/SvgCave'
import SvgColiseum from '../components/common/Map/SvgColiseum/SvgColiseum'
import SvgMarket from '../components/common/Map/SvgMarket/SvgMarket'
import SvgObservation from '../components/common/Map/SvgObservation/SvgObservation'
import SvgPrimaryCastle from '../components/common/Map/SvgPrimaryCastle/SvgPrimaryCastle'
import SvgTrain from '../components/common/Map/SvgTrain/SvgTrain'

export const warriorLink = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/warrior_man_cc.png'
export const assassinLink = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/assassin_woman_cc.png'
export const mageLink = 'https://dbforgame.herokuapp.com/static/img/classes/playerClasses/mong_woman_cc.png'

export const components = [
    {
        component: <SvgObservation/>,
        class: 'map__observation',
        link: '/active-rooms',
    },
    {
        component: <SvgPrimaryCastle/>,
        class: 'map__primaryCastle',
        link: '/main-tower',
    },
    {
        component: <SvgTrain/>,
        class: 'map__train',
        link: '/mannequin',
    },
    {
        component: <SvgMarket/>,
        class: 'map__market',
        link: '/auction',
    },
    {
        component: <SvgCave/>,
        class: 'map__SvgCave',
        link: '/dungeon'
    },
    {
        component: <SvgColiseum/>,
        class: 'map__coliseum',
        link: '/rooms'
    },
]
