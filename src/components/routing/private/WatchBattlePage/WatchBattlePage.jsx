import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_setWatchBattlePlayers } from '../../../../redux/actions/watchBattleActions'
import { UNSET_ROOM } from '../../../../redux/types/roomTypes'
import { UNSET_WATCH_BATTLE_PLAYERS } from '../../../../redux/types/watchBattleTypes'
import WatchBattleEnemyPlayer from '../../../common/WatchBattleEnemyPlayer/WatchBattleEnemyPlayer'
import WatchBattleLog from '../../../common/WatchBattleLog/WatchBattleLog'
import WatchBattlePlayer from '../../../common/WatchBattlePlayer/WatchBattlePlayer'

import style from './GymPage.module.css'

const WatchBattlePage = ({socket}) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.room)
    const player = useSelector(state => state.player)
    const player1 = useSelector((state) => state.watchBattle?.player1)
    const player2 = useSelector(state => state.watchBattle?.player2)

    useEffect(() => {
        socket.emit('join-room-watcher', Number(room), player)
        return () => {
            dispatch({type: UNSET_WATCH_BATTLE_PLAYERS})
            socket.emit('close-private-room-for-watcher', room, player)
            dispatch({type: UNSET_ROOM})
        }
    }, [dispatch])

    // SOCKET.IO

    useEffect(() => {
        socket.on('join-room-watcher', (players) => {
            console.log(players)
            const currentRoomId = players ? players.current_room : null
            const firstPlayer = players ? players.initial_character : null
            const secondPlayer = players ? players.opponent : null
            console.log(currentRoomId, firstPlayer, secondPlayer)

            if (firstPlayer && secondPlayer) {
                dispatch(ACTION_setWatchBattlePlayers({
                    room: currentRoomId,
                    player1: firstPlayer.player,
                    player2: secondPlayer.player
                }))
            }
        })

    }, [socket])

    return (
        <div className={style.main__gym}>
            <WatchBattlePlayer/>
            <WatchBattleLog socket={socket}/>
            <WatchBattleEnemyPlayer type={'enemy'}/>
        </div>
    )
}

export default WatchBattlePage

