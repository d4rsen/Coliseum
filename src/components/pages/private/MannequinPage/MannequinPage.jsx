import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_punchFromPlayerToMannequin, SAGA_ACTION_mannequinRegenerate } from '../../../../redux/actions/mannequinActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import Mannequin from '../../../common/Mannequin/Mainnequin'
import './MannequinPage.scss'

const MannequinPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)

    const battleHandler = (e) => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMannequin(player.total_stats.dmg))
        dispatch(SAGA_ACTION_mannequinRegenerate())
    }

    return (
        <div className="mannequinPage">
            <BackGround/>
            <div className="mannequinPage__left">
                <Character/>
            </div>
            <div className="mannequinPage__mid">
                <button onClick={battleHandler} className="dungeonPage__button">
                    Punch
                </button>
            </div>
            <div className="mannequinPage__right">
                <Mannequin/>
            </div>
        </div>
    )
}

export default MannequinPage

