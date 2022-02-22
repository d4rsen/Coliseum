import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_setWatchBattlePlayers } from '../../../../redux/actions/watchBattleActions'
import { UNSET_ROOM } from '../../../../redux/types/roomTypes'
import { UNSET_WATCH_BATTLE_PLAYERS } from '../../../../redux/types/watchBattleTypes'
import BackGround from '../../../common/BackGround/BackGround'
import WatchBattleEnemyPlayer from '../../../common/WatchBattleEnemyPlayer/WatchBattleEnemyPlayer'
import WatchBattlePlayer from '../../../common/WatchBattlePlayer/WatchBattlePlayer'
import './WatchBattlePage.scss'

const WatchBattlePage = ({socket}) => {
    const dispatch = useDispatch()
    const room = useSelector(state => state.room)
    const player = useSelector(state => state.player)
    const player1 = useSelector((state) => state.watchBattle?.player1)
    const player2 = useSelector(state => state.watchBattle?.player2)
    const watchBattle = useSelector(state => state.watchBattle)

    useEffect(() => {
        socket.emit('join-room-watcher', Number(room?.id), player)

        return () => {
            dispatch({type: UNSET_WATCH_BATTLE_PLAYERS})
            socket.emit('close-private-room-for-watcher', room, player)
            dispatch({type: UNSET_ROOM})
        }
    }, [dispatch])

    useEffect(() => {
        socket.on('join-room-watcher', (players) => {
            const currentRoomId = players ? players.current_room : null
            const firstPlayer = players ? players.initial_character : null
            const secondPlayer = players ? players.opponent : null

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
        <div className="watchBattlePage">
            <BackGround/>
            <div className="watchBattlePage__left">
                {player1 && <WatchBattlePlayer/>}
            </div>
            <div className="watchBattlePage__mid">

            </div>
            <div className="watchBattlePage__right">
                {player2 && <WatchBattleEnemyPlayer/>}
            </div>
        </div>
    )
}

export default WatchBattlePage
