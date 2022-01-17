import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_getEnemyStateFromWS } from '../../../../redux/actions/battleActions'
import {
    ACTION_getEnemyPlayer,
    ACTION_punchFromPlayerToEnemyPlayer,
    ACTION_unsetEnemyPlayer
} from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../../redux/actions/playerActions'
import { ACTION_unSetRoom } from '../../../../redux/actions/roomActions'

import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import EnemyPlayer from '../../../common/EnemyPlayer/EnemyPlayer'
import Player from '../../../common/Player/Player'
import './button.css'

import style from './GymPage.module.css'

const ColiseumPage = ({socket}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const battleEnemyPlayer = useSelector(state => state.battleEnemyPlayer)
    const room = useSelector(state => state.room)

    useEffect(() => {
        return () => {
            dispatch(ACTION_unsetEnemyPlayer())
            dispatch(ACTION_unSetRoom())
            socket.emit('close-private-room', player)
        }
    }, [])

    // SOCKET.IO

    useEffect(() => {
        socket.emit('join-room', room, player, battlePlayer)
    }, [])

    useEffect(() => {
        socket.on('join-room', (players) => {
            const AllPlayers = players.arr ? players.arr : null
            const currentRoom = players.currentRoom2 ? players.currentRoom2 : null

            const enemy = AllPlayers ? AllPlayers.filter(el => {

                if (currentRoom.initial_character_id === player.id) {
                    if (el.player.id === currentRoom.opponent_id) {
                        console.log('враг инициализатора', el)
                        return el
                    }
                }
                if (currentRoom.opponent_id === player.id) {
                    if (el.player.id === currentRoom.initial_character_id) {
                        console.log('враг оппонента', el)
                        return el
                    }
                }
            }) : null

            if (enemy) {
                dispatch(ACTION_getEnemyPlayer(enemy[0].player))
                dispatch(ACTION_getEnemyStateFromWS(enemy[0].battlePlayer))

            }
        })

    }, [])

    useEffect(() => {
        socket.on('punch', (players) => {
            const currBattle = players.currBattle
            // console.log(currBattle)
            const WsEnemyPlayer = currBattle.find(el => el.player.id !== player.id) || null
            console.log(WsEnemyPlayer)

            if (WsEnemyPlayer) {
                dispatch(ACTION_getEnemyPlayer(WsEnemyPlayer.player))
                dispatch(ACTION_getEnemyStateFromWS(WsEnemyPlayer.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(WsEnemyPlayer.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
                dispatch(ACTION_punchFromPlayerToEnemyPlayer(player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
            }
        })
    }, [socket])

    return (
        <div className={style.main__gym}>
            <Player/>
            <AttackDefendWithCyberButtons socket={socket}/>
            <EnemyPlayer/>
        </div>
    )
}

export default ColiseumPage
