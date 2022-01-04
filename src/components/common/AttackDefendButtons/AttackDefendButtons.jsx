import React, { useState } from 'react'
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
  ACTION_defendRightHandPlayer,
  ACTION_unsetAttackBodyPlayer,
  ACTION_unsetAttackHeadPlayer,
  ACTION_unsetAttackLeftHandPlayer,
  ACTION_unsetAttackLegsPlayer,
  ACTION_unsetAttackRightHandPlayer,
  ACTION_unsetDefendBodyPlayer,
  ACTION_unsetDefendHeadPlayer,
  ACTION_unsetDefendLeftHandPlayer,
  ACTION_unsetDefendLegsPlayer,
  ACTION_unsetDefendRightHandPlayer
} from '../../../redux/actions/battleActions'

import AttackButton from '../AttackButton/AttackButton'

const AttackDefendButtons = () => {
  const dispatch = useDispatch()
  const [isDisabled, setIsDisabled] = useState('')
  const [isDisabledDefend, setIsDisabledDefend] = useState('')
  const unsetAll = () => {
    dispatch(ACTION_unsetAttackHeadPlayer())
    dispatch(ACTION_unsetAttackLeftHandPlayer())
    dispatch(ACTION_unsetAttackRightHandPlayer())
    dispatch(ACTION_unsetAttackBodyPlayer())
    dispatch(ACTION_unsetAttackLegsPlayer())
    dispatch(ACTION_unsetDefendHeadPlayer())
    dispatch(ACTION_unsetDefendLeftHandPlayer())
    dispatch(ACTION_unsetDefendRightHandPlayer())
    dispatch(ACTION_unsetDefendBodyPlayer())
    dispatch(ACTION_unsetDefendLegsPlayer())
  }
  const attackHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setIsDisabled('disabled')
    e.target.value === 'attack head' && dispatch(ACTION_attackHeadPlayer())
    e.target.value === 'attack left hand' && dispatch(ACTION_attackLeftHandPlayer())
    e.target.value === 'attack right hand' && dispatch(ACTION_attackRightHandPlayer())
    e.target.value === 'attack body' && dispatch(ACTION_attackBodyPlayer())
    e.target.value === 'attack legs' && dispatch(ACTION_attackLegsPlayer())
  }
  const defendHandler = (e) => {
    e.preventDefault()
    setIsDisabledDefend('disabled')
    e.target.value === 'defend head' && dispatch(ACTION_defendHeadPlayer())
    e.target.value === 'defend left hand' && dispatch(ACTION_defendLeftHandPlayer())
    e.target.value === 'defend right hand' && dispatch(ACTION_defendRightHandPlayer())
    e.target.value === 'defend body' && dispatch(ACTION_defendBodyPlayer())
    e.target.value === 'defend legs' && dispatch(ACTION_defendLegsPlayer())
  }
  const unsetHandler = (e) => {
    e.preventDefault()
    unsetAll()
    setIsDisabled('')
    setIsDisabledDefend('')
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
              value={el}
              disabled={isDisabled}
              attackDefendHandler={attackHandler}
            />
          )
        })}
        {defendTexts.map((el) => {
          return (
            <AttackButton
              value={el}
              disabled={isDisabledDefend}
              attackDefendHandler={defendHandler}
            />
          )
        })}
        <button onClick={unsetHandler} className="btn btn-outline-warning">
          Отмена
        </button>
      </div>
    </div>
  )
}

export default AttackDefendButtons
