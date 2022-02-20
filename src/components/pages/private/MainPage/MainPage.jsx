import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import Map from '../../../common/Map/Map'
import './MainPage.scss'

const MainPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

    return (
        <div className="mainPage">
            <BackGround/>
            <div className="mainPage__left">
                <Character/>
            </div>
            <div className="mainPage__right">
                <Map/>
            </div>
        </div>
    )
}

export default MainPage
