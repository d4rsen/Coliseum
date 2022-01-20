import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_punchFromPlayerToMannequin, SAGA_ACTION_mannequinRegenerate } from '../../../redux/actions/mannequinActions'
import './button.css'

const AttackButtonMannequinPage = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const battleHandler = e => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMannequin(player.total_stats.dmg))
        dispatch(SAGA_ACTION_mannequinRegenerate())
    }
    return (
        <div className=" d-flex flex-column justify-content-center align-items-center">
            <button
                onClick={battleHandler}
                className="cybr-btn m-2">
                Бой
                <span aria-hidden>_</span>
                <span aria-hidden
                      className="cybr-btn__glitch">Бой</span>
                <span aria-hidden className="cybr-btn__tag">theGame</span>
            </button>
        </div>
    )
}

export default AttackButtonMannequinPage
