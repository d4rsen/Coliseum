import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
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
import AttackDefendButtons from '../AttackDefendButtons/AttackDefendButtons'
import style from './AttackDefendWithCyberButtons.module.css'

const AttackDefendWithCyberButtons = ({socket}) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.room)
    const player = useSelector((state) => state.player)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const [isDisabledAttack, setIsDisabledAttack] = useState(false)
    const [isDisabledDefend, setIsDisabledDefend] = useState(false)
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
    const unsetHandler = (e) => {
        e.preventDefault()
        unsetAll()
        setIsDisabledAttack(false)
        setIsDisabledDefend(false)
    }
    const battleHandler = (e) => {
        e.preventDefault()
        socket.emit('punch', room, player, battlePlayer)
    }
    return (
        <div className={style.buttons__block}>
            <AttackDefendButtons
                isDisabledAttack={isDisabledAttack}
                isDisabledDefend={isDisabledDefend}
                setIsDisabledAttack={setIsDisabledAttack}
                setIsDisabledDefend={setIsDisabledDefend}/>

            <button className="cybr-btn" onClick={unsetHandler}>
                Отмена
                <span aria-hidden>_</span>
                <span aria-hidden className="cybr-btn__glitch">Отмена_</span>
                <span aria-hidden className="cybr-btn__tag">R25</span>
            </button>
            <button
                onClick={battleHandler}
                className="cybr-btn m-2"
                disabled={!(isDisabledAttack && isDisabledDefend)}>
                {isDisabledAttack && isDisabledDefend ? 'Бой' : 'Сделайте выбор'}
                <span aria-hidden>_</span>
                <span aria-hidden
                      className="cybr-btn__glitch">{isDisabledAttack && isDisabledDefend ? 'Бой_' : 'Сделайте выбор_'}</span>
                <span aria-hidden className="cybr-btn__tag">theGame</span>
            </button>
        </div>
    )
}

export default AttackDefendWithCyberButtons
