import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_getEnemyStateFromWS } from '../../../../redux/actions/battleActions'
import { ACTION_getEnemyPlayer, ACTION_punchFromPlayerToEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../../redux/actions/playerActions'
import AttackDefendWithCyberButtons from '../../../common/AttackDefendWithCyberButtons/AttackDefendWithCyberButtons'
import EnemyPlayer from '../../../common/EnemyPlayer/EnemyPlayer'
import Player from '../../../common/Player/Player'
import './button.css'

const ColiseumPage = ({socket}) => {
    const dispatch = useDispatch()
    const player = useSelector((state) => state.player)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const battleEnemyPlayer = useSelector(state => state.battleEnemyPlayer)
    const room = useSelector(state => state.room)

    // SOCKET.IO

    useEffect(() => {
        socket.emit('join-room', room.id, player, battlePlayer)
    }, [])

    useEffect(() => {
        socket.on('join-room', (players) => {
            const WsEnemyPlayer = players.find(el => el.player.nickName !== player.nickName)
            if (WsEnemyPlayer) {
                if (WsEnemyPlayer.nickName !== player.nickName) {
                    dispatch(ACTION_getEnemyPlayer(WsEnemyPlayer.player))
                    dispatch(ACTION_getEnemyStateFromWS(WsEnemyPlayer.battlePlayer))
                }
            }
        })
        socket.on('punch', (players) => {
            const WsEnemyPlayer = players.find(el => el.nickName !== player.nickName)
            dispatch(ACTION_getEnemyPlayer(WsEnemyPlayer.player))
            dispatch(ACTION_getEnemyStateFromWS(WsEnemyPlayer.battlePlayer))
            dispatch(ACTION_punchFromEnemyPlayerToPlayer(WsEnemyPlayer.player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
            dispatch(ACTION_punchFromPlayerToEnemyPlayer(player.total_stats.dmg, battlePlayer, battleEnemyPlayer))
        })
    })

    return (
        <div className="container mt-3 d-flex flex-row">
            <Player/>
            <AttackDefendWithCyberButtons socket={socket}/>
            <EnemyPlayer/>
        </div>
    )
}

export default ColiseumPage