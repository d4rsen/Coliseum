import React from 'react'
import { useDispatch } from 'react-redux'
import {
    ACTION_attackBodyPlayer,
    ACTION_attackHeadPlayer,
    ACTION_attackLeftHandPlayer,
    ACTION_attackLegsPlayer,
    ACTION_attackRightHandPlayer,
    ACTION_defendBodyPlayer,
    ACTION_defendHeadPlayer,
    ACTION_defendLeftHandPlayer,
    ACTION_defendLegsPlayer,
    ACTION_defendRightHandPlayer
} from '../../../redux/actions/battleActions'

import AttackButton from '../AttackButton/AttackButton'

const AttackDefendButtons = ({isDisabledAttack, isDisabledDefend, setIsDisabledDefend, setIsDisabledAttack}) => {
    const dispatch = useDispatch()

    const attackHandler = (e) => {
        e.preventDefault()
        setIsDisabledAttack(true)
        e.target.value === 'attack head' && dispatch(ACTION_attackHeadPlayer())
        e.target.value === 'attack left hand' && dispatch(ACTION_attackLeftHandPlayer())
        e.target.value === 'attack right hand' && dispatch(ACTION_attackRightHandPlayer())
        e.target.value === 'attack body' && dispatch(ACTION_attackBodyPlayer())
        e.target.value === 'attack legs' && dispatch(ACTION_attackLegsPlayer())
    }
    const defendHandler = (e) => {
        e.preventDefault()
        setIsDisabledDefend(true)
        e.target.value === 'defend head' && dispatch(ACTION_defendHeadPlayer())
        e.target.value === 'defend left hand' && dispatch(ACTION_defendLeftHandPlayer())
        e.target.value === 'defend right hand' && dispatch(ACTION_defendRightHandPlayer())
        e.target.value === 'defend body' && dispatch(ACTION_defendBodyPlayer())
        e.target.value === 'defend legs' && dispatch(ACTION_defendLegsPlayer())
    }

    const attackTexts = [
        'attack head',
        'attack left hand',
        'attack right hand',
        'attack body',
        'attack legs',
    ]
    const defendTexts = [
        'defend head',
        'defend left hand',
        'defend right hand',
        'defend body',
        'defend legs',
    ]

    return (
        <div>
            <div className="d-flex row">
                {attackTexts.map((el) => {
                    return (
                        <AttackButton
                            key={el}
                            value={el}
                            disabled={isDisabledAttack}
                            attackDefendHandler={attackHandler}
                        />
                    )
                })}
                {defendTexts.map((el) => {
                    return (
                        <AttackButton
                            key={el}
                            value={el}
                            disabled={isDisabledDefend}
                            attackDefendHandler={defendHandler}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AttackDefendButtons
