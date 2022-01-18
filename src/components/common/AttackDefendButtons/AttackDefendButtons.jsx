import React from 'react'
import { useDispatch } from 'react-redux'
import {
    ACTION_attackBodyPlayer,
    ACTION_attackHeadPlayer,
    ACTION_attackLegsPlayer,
    ACTION_defendBodyPlayer,
    ACTION_defendHeadPlayer,
    ACTION_defendLegsPlayer,
} from '../../../redux/actions/battleActions'

import AttackButton from '../AttackButton/AttackButton'

const AttackDefendButtons = ({isDisabledAttack, isDisabledDefend, setIsDisabledDefend, setIsDisabledAttack}) => {
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

    return (
        <div>
            <div className="d-row">
                {attackTexts.map((el) => {
                    return (
                        <div key={el} className="row"><AttackButton

                            value={el}
                            disabled={isDisabledAttack}
                            attackDefendHandler={attackHandler}
                        /></div>
                    )
                })}
                {defendTexts.map((el) => {
                    return (
                        <div key={el} className="row"><AttackButton
                            value={el}
                            disabled={isDisabledDefend}
                            attackDefendHandler={defendHandler}
                        /></div>
                    )
                })}
            </div>
        </div>
    )
}

export default AttackDefendButtons
