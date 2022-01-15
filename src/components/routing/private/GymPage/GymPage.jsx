import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_getEnemyStateFromWS } from '../../../../redux/actions/battleActions'
import { ACTION_getEnemyPlayer, ACTION_punchFromPlayerToEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../../redux/actions/playerActions'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import EnemyPlayer from '../../../common/EnemyPlayer/EnemyPlayer'
import Player from '../../../common/Player/Player'
import './button.css'

import style from './GymPage.module.css'
const GymPage = () => {
    const dispatch = useDispatch()
    const [socket, setSocket] = useState(new WebSocket('wss://herokuws.herokuapp.com/'))
    // const [socket, setSocket] = useState(new WebSocket('ws://localhost:8000/'))
    const player = useSelector((state) => state.player)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const battleEnemyPlayer = useSelector(state => state.battleEnemyPlayer)
    const room = useSelector(state => state.room)

    // WEBSOCKET
    useEffect(() => {
        socket.onopen = () => {
            socket.send(JSON.stringify({
                id: room.id,
                method: 'connection',
                player,
                battlePlayer,
            }))
        }
    }, [])
    useEffect(() => {
        socket.onmessage = (e) => {
            const WSenemy = JSON.parse(e.data)
            console.log(WSenemy)
            if (WSenemy.player.nickName !== player.nickName) {
                dispatch(ACTION_getEnemyPlayer(WSenemy.player))
                dispatch(ACTION_getEnemyStateFromWS(WSenemy.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(WSenemy.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
                dispatch(ACTION_punchFromPlayerToEnemyPlayer(WSenemy.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
            }
        }
    }, [])

    return (
      <div className={style.mail__gym}>
    <Player/> 
    <AttackDefendWithCyberButtons/>
      <Player/>     
      </div>    
    )
}

export default GymPage
