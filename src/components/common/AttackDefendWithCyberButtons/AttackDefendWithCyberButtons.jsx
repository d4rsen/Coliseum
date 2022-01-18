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
        // unsetHandler()
        socket.emit('punch', room, player)
    }

    useEffect(() => {
        socket.on('send-message', (data) => {
            // console.log(data)
            // if ((battlePlayer.attackHead || battlePlayer.attackBody || battlePlayer.attackLegs) && (battlePlayer.defendHead || battlePlayer.defendBody || battlePlayer.defendLegs)) {
            //     const WsEnemyPlayer = (players.currBattle.find(el => el.player.id !== player.id)) || null
            //     if (WsEnemyPlayer) {
            //         dispatch(ACTION_getEnemyPlayer(WsEnemyPlayer.player))
            //         dispatch(ACTION_getEnemyStateFromWS(WsEnemyPlayer.battlePlayer))
            //         dispatch(ACTION_punchFromEnemyPlayerToPlayer(WsEnemyPlayer.player.total_stats.dmg, battlePlayer, WsEnemyPlayer.battlePlayer))
            //         unsetHandler()
            //     }
            // }
            // console.log(data.player_two.player.id, player.id)
            // console.log(data.player_one.player.id, player.id)

            if (data.player_one.player.id !== player.id) {
                const enemyPlayerWs = data.player_one
                const playerWs = data.player_two
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(enemyPlayerWs.player.total_stats.dmg, playerWs.battlePlayer, enemyPlayerWs.battlePlayer))
                unsetHandler()
            }
            if (data.player_two.player.id !== player.id) {
                const enemyPlayerWs = data.player_two
                const playerWs = data.player_one
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(enemyPlayerWs.player.total_stats.dmg, playerWs.battlePlayer, enemyPlayerWs.battlePlayer))
                unsetHandler()
            }
        })
    }, [socket])

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
