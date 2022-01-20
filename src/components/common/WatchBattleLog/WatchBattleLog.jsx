import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_setWatchBattlePlayers } from '../../../redux/actions/watchBattleActions'
import ExitRoomModal from '../ExitRoomModal/ExitRoomModal'

import style from './AttackDefendWithCyberButtons.module.css'

const WatchBattleLog = ({socket}) => {
    const dispatch = useDispatch()

    const [restartTimer, setRestartTimer] = useState(15)
    const room = useSelector(state => state.watchBattle?.room)
    const player1 = useSelector((state) => state.watchBattle?.player1)
    const player2 = useSelector(state => state.watchBattle?.player2)
    const player = useSelector(state => state.player)
    const phrase = useSelector(state => state.phrase)
    const [battleLog, setBattleLog] = useState([])
    const [isPlaying, setIsPlaying] = useState(true)

    const timerHandler = () => {
        return {shouldRepeat: true}
    }

    const renderTime = (dimension, time) => {
        return (<div className="time-wrapper">
            <div className={style.time}>{time}</div>
            <div>{dimension}</div>
        </div>)
    }
    const minuteSeconds = 15
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0

    useEffect(() => {
        // CLOSE

        // socket.on('close-private-room-for-watcher', () => {
        //     // dispatch({type: UNSET_WATCH_BATTLE_PLAYERS})
        // })

        //GET_PLAYERS
        socket.on('send-message-to-watcher', async (data) => {
            console.log(data)
            dispatch(ACTION_setWatchBattlePlayers({
                room: data.db_room,
                player1: data.player_one.player,
                player2: data.player_two.player
            }))
            if ((data.player_one.player.hp >= 0) || (data.player_two.player.hp >= 0)) {
                setRestartTimer(prevKey => prevKey + 15)
            }
            if ((data.player_one.player.hp <= 0) || (data.player_two.player.hp <= 0)) {
                setIsPlaying(false)
            }
        })
    }, [socket])

    useEffect(() => {
        phrase && setBattleLog([...battleLog, phrase])
    }, [dispatch, phrase])

    return (<div className={style.buttons__block}>
        {player2 && <>

            {/*COUNTER*/}
            <CountdownCircleTimer
                key={restartTimer}
                isPlaying={isPlaying}
                initialRemainingTime={15}
                duration={15}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                onComplete={timerHandler}
                colorsTime={[10, 6, 3, 0]}
            >
                {
                    ({elapsedTime, color}) => (
                        <span style={{color}}>
                        {renderTime('seconds', getTimeSeconds(elapsedTime))}
                        </span>
                    )
                }
            </CountdownCircleTimer>
        </>}
        {/*COUNTER*/}
        <div>
            {battleLog && battleLog.map((phraseFromDb, i) => {
                return (<div key={i}>
                    <p>{phraseFromDb}</p>
                </div>)
            })}
        </div>
        <div>
            {player1 && player1.hp <= 0 && (
                <ExitRoomModal text={`Победил игрок: ${player2 && player2.nickName}`}/>
            )}
            {player2 && player2.hp <= 0 && (
                <ExitRoomModal text={`Победил игрок: ${player1 && player1.nickName}`}/>
            )}
        </div>
    </div>)
}

export default WatchBattleLog


