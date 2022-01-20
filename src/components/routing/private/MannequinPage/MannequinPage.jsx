import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import AttackButtonMannequinPage from '../../../common/AttackButtonMannequinPage/AttackButtonMannequinPage'
import Mannequin2 from '../../../common/Mannequin/Mannequin2'
import Player from '../../../common/Player/Player'
import style from './GymPage.module.css'

const MannequinPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])
    return (
        <div className={style.main__gym}>
            <Player type={'player'}/>
            <AttackButtonMannequinPage/>
            <Mannequin2/>
        </div>)
}

export default MannequinPage
