import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ACTION_getEnemyStateFromWS,
    ACTION_unsetAttackBodyPlayer,
    ACTION_unsetAttackHeadPlayer,
    ACTION_unsetAttackLegsPlayer,
    ACTION_unsetDefendBodyPlayer,
    ACTION_unsetDefendHeadPlayer,
    ACTION_unsetDefendLegsPlayer
} from '../../../redux/actions/battleActions'
import { ACTION_getEnemyPlayer } from '../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../redux/actions/playerActions'
import { THUNK_ACTION_getPhraseFromDbEnglish } from '../../../redux/actions/thunks/thunkPhraseActions'
import AttackDefendButtons from '../AttackDefendButtons/AttackDefendButtons'
import style from './AttackDefendWithCyberButtons.module.css'

const AttackDefendWithCyberButtons = ({socket}) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.room)
    const player = useSelector((state) => state.player)
    const evasion = useSelector(state => state.evasion)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const phrase = useSelector(state => state.phrase)
    const [battleLog, setBattleLog] = useState([])
    const [isDisabledAttack, setIsDisabledAttack] = useState(false)
    const [isDisabledDefend, setIsDisabledDefend] = useState(false)
    const unsetAll = () => {
        dispatch(ACTION_unsetAttackHeadPlayer())
        dispatch(ACTION_unsetAttackBodyPlayer())
        dispatch(ACTION_unsetAttackLegsPlayer())
        dispatch(ACTION_unsetDefendHeadPlayer())
        dispatch(ACTION_unsetDefendBodyPlayer())
        dispatch(ACTION_unsetDefendLegsPlayer())
    }
    const unsetHandler = () => {
        unsetAll()
        setIsDisabledAttack(false)
        setIsDisabledDefend(false)
    }
    const battleHandler = (e) => {
        e.preventDefault()
        socket.emit('to_instance', {id: room.id, player, battlePlayer})
        socket.emit('punch', room, player)
    }

    useEffect(() => {
        socket.on('send-message', (data) => {
            const db_room = data.db_room

            if (data.player_one.player.id !== player.id) {
                const enemyPlayerWs = data.player_one
                const playerWs = data.player_two
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(
                    enemyPlayerWs.player.total_stats.dmg,
                    playerWs.battlePlayer,
                    enemyPlayerWs.battlePlayer,
                    playerWs
                ))
                dispatch(THUNK_ACTION_getPhraseFromDbEnglish(playerWs, enemyPlayerWs, evasion, db_room))
                unsetHandler()
            }

            if (data.player_two.player.id !== player.id) {
                const enemyPlayerWs = data.player_two
                const playerWs = data.player_one
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(
                    enemyPlayerWs.player.total_stats.dmg,
                    playerWs.battlePlayer,
                    enemyPlayerWs.battlePlayer,
                    playerWs
                ))
                dispatch(THUNK_ACTION_getPhraseFromDbEnglish(playerWs, enemyPlayerWs, evasion, db_room))
                unsetHandler()
            }
        })
    }, [socket])

    useEffect(() => {
        phrase && setBattleLog([...battleLog, phrase])
    }, [dispatch, phrase])

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
            <div>
                {battleLog && battleLog.map((phraseFromDb, i) => {
                    return (
                        <div key={i}>
                            <p>{phraseFromDb}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AttackDefendWithCyberButtons
