import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_getEnemyPlayer, ACTION_unsetEnemyPlayer } from '../../../../redux/actions/enemyPlayerActions'
import { ACTION_unSetRoom } from '../../../../redux/actions/roomActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import EnemyPlayer from '../../../common/EnemyPlayer/EnemyPlayer'
import './ColiseumPage.scss'

const ColiseumPage = ({socket}) => {
    const dispatch = useDispatch()
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const player = useSelector((state) => state.player)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const room = useSelector(state => state.room)

    useEffect(() => {
        return () => {
            dispatch(ACTION_unsetEnemyPlayer())
            dispatch(ACTION_unSetRoom())
            socket.emit('close-private-room', room, player)
        }
    }, [])

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
                        return el
                    }
                }
                if (currentRoom.opponent_id === player.id) {
                    if (el.player.id === currentRoom.initial_character_id) {
                        return el
                    }
                }
            }) : null
            if (enemy) {
                dispatch(ACTION_getEnemyPlayer(enemy[0].player))
            }
        })
    }, [])

    return (
        <div className="coliseumPage">
            <BackGround/>
            <div className="coliseumPage__left">
                <Character/>
            </div>
            <div className="coliseumPage__mid">
                
            </div>
            <div className="coliseumPage__right">
                {enemyPlayer && <EnemyPlayer/>}
            </div>
        </div>
    )
}

export default ColiseumPage
