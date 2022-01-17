import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_getEnemyPlayer, ACTION_unsetEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
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
    const room = useSelector(state => state.room)
    const navigation = useNavigate()

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
            }
        })

    }, [])

    // useEffect(() => {
    //     socket.on('punch', (players) => {
    //         const WsEnemyPlayer = (players.currBattle.find(el => el.player.nickName !== player.nickName)) || null
    //         if (WsEnemyPlayer) {
    //             dispatch(ACTION_getEnemyPlayer(WsEnemyPlayer.player))
    //             dispatch(ACTION_getEnemyStateFromWS(WsEnemyPlayer.battlePlayer))
    //             dispatch(ACTION_punchFromEnemyPlayerToPlayer(WsEnemyPlayer.player.total_stats.dmg, battlePlayer, WsEnemyPlayer.battlePlayer))
    //             console.log(battlePlayer)
    //         }
    //     })
    // }, [socket])

    const quitRoomHandler = e => {
        navigation('/')
    }

    return (
        <div className={style.main__gym}>
            <Player/>
            <AttackDefendWithCyberButtons socket={socket}/>
            <EnemyPlayer/>
            <div>
                {player && player.hp <= 0 && (
                    <div>
                        <h3>Вы проиграли</h3>
                        <button onClick={quitRoomHandler}>Выйти из боя</button>
                    </div>
                )}
                {enemyPlayer && enemyPlayer.hp <= 0 && (
                    <div>
                        <h3>Вы победили</h3>
                        <button onClick={quitRoomHandler}>Выйти из боя</button>

                    </div>
                )}
            </div>
        </div>
    )
}

export default ColiseumPage
