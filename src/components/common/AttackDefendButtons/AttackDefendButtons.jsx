import React from 'react'
import { useDispatch } from 'react-redux'
import {
    ACTION_attackBodyPlayer,
    ACTION_attackHeadPlayer,
    ACTION_attackLegsPlayer,
    ACTION_defendBodyPlayer,
    ACTION_defendHeadPlayer,
    ACTION_defendLegsPlayer
} from '../../../redux/actions/battleActions'
import './AttackDefendButtons.scss'

const attackTexts = [
    'attack head',
    'attack body',
    'attack legs',
]
const defendTexts = [
    'defend head',
    'defend body',
    'defend legs',
]

const AttackDefendButtons = (
    {
        isDisabledAttack,
        isDisabledDefend,
        setIsDisabledAttack,
        setIsDisabledDefend
    }) => {

    const dispatch = useDispatch()

    const attackHandler = (e) => {
        e.preventDefault()
        setIsDisabledAttack(true)
        e.target.value === 'attack head' && dispatch(ACTION_attackHeadPlayer())
        e.target.value === 'attack body' && dispatch(ACTION_attackBodyPlayer())
        e.target.value === 'attack legs' && dispatch(ACTION_attackLegsPlayer())
    }

    const defendHandler = (e) => {
        e.preventDefault()
        setIsDisabledDefend(true)
        e.target.value === 'defend head' && dispatch(ACTION_defendHeadPlayer())
        e.target.value === 'defend body' && dispatch(ACTION_defendBodyPlayer())
        e.target.value === 'defend legs' && dispatch(ACTION_defendLegsPlayer())
    }

    return (
        <div className="attackDefendButtons">
            <div className="attackDefendButtons__left">
                {attackTexts && attackTexts.map(el => (
                    <button
                        className="attackDefendButtons__attack"
                        onClick={attackHandler}
                        value={el}
                        disabled={isDisabledAttack}
                    >
                        {isDisabledAttack ? 'Wait enemy' : el}
                    </button>
                ))}
            </div>
            <div className="attackDefendButtons__right">
                {defendTexts && defendTexts.map(el => (
                    <button
                        className="attackDefendButtons__defend"
                        onClick={defendHandler}
                        value={el}
                        disabled={isDisabledDefend}
                    >
                        {isDisabledDefend ? 'Wait enemy' : el}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default AttackDefendButtons
