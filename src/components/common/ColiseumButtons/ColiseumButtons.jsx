import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    ACTION_getEnemyStateFromWS,
    ACTION_unsetAttackBodyPlayer,
    ACTION_unsetAttackHeadPlayer,
    ACTION_unsetAttackLegsPlayer,
    ACTION_unsetDefendBodyPlayer,
    ACTION_unsetDefendHeadPlayer,
    ACTION_unsetDefendLegsPlayer
} from '../../../redux/actions/battleActions'
import { ACTION_getEnemyPlayer, ACTION_unsetEnemyPlayer } from '../../../redux/actions/enemyPlayerActions'
import { ACTION_punchFromEnemyPlayerToPlayer } from '../../../redux/actions/playerActions'
import { THUNK_ACTION_closeRoom } from '../../../redux/actions/thunks/thunkGetRoomFromDbActions'
import { THUNK_ACTION_getPhraseFromDbEnglish } from '../../../redux/actions/thunks/thunkPhraseActions'
import { THUNK_ACTION_getPlayerExpAndGoldForBattle } from '../../../redux/actions/thunks/thunkPlayersFromDbActions'
import AttackDefendButtons from '../AttackDefendButtons/AttackDefendButtons'
import Modal from '../Modal/Modal'
import './ColiseumButtons.scss'

const ColiseumButtons = ({socket}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [battleResult, setBattleResult] = useState('')
    const [restartTimer, setRestartTimer] = useState(15)
    const room = useSelector(state => state.room)
    const player = useSelector((state) => state.player)
    const evasion = useSelector(state => state.evasion)
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const battlePlayer = useSelector(state => state.battlePlayer)
    const phrase = useSelector(state => state.phrase)
    const [battleLog, setBattleLog] = useState([])
    const [isDisabledAttack, setIsDisabledAttack] = useState(false)
    const [isDisabledDefend, setIsDisabledDefend] = useState(false)
    const [isPlaying, setIsPlaying] = useState(true)
    const [active, setActive] = useState(false)

    const unsetAll = () => {
        dispatch(ACTION_unsetAttackHeadPlayer())
        dispatch(ACTION_unsetAttackBodyPlayer())
        dispatch(ACTION_unsetAttackLegsPlayer())
        dispatch(ACTION_unsetDefendHeadPlayer())
        dispatch(ACTION_unsetDefendBodyPlayer())
        dispatch(ACTION_unsetDefendLegsPlayer())
    }

    const quitHandler = () => navigate('/')

    const unsetHandler = () => {
        unsetAll()
        setIsDisabledAttack(false)
        setIsDisabledDefend(false)
    }

    const battleHandler = (e) => {
        e.preventDefault()
        enemyPlayer && socket.emit('to_instance', {id: room.id, player, battlePlayer})
        enemyPlayer && socket.emit('punch', room, player)
    }

    const timerHandler = () => {
        enemyPlayer && socket.emit('to_instance', {id: room.id, player, battlePlayer})
        enemyPlayer && socket.emit('punch', room, player)
        return {shouldRepeat: true}
    }

    const renderTime = (dimension, time) => {
        return (
            <div className="time-wrapper">
                <div>{time}</div>
                <div>{dimension}</div>
            </div>
        )
    }

    const minuteSeconds = 15
    const getTimeSeconds = (time) => (minuteSeconds - time) | 0 //!important

    useEffect(() => {
        socket.on('close-private-room', () => {
            dispatch(ACTION_unsetEnemyPlayer())
            socket.emit('close-private-room', room, player)
        })
        socket.on('send-message', async (data) => {
            const db_room = data.db_room

            if ((data.player_one.player.hp >= 0) || (data.player_two.player.hp >= 0)) {
                setRestartTimer(prevKey => prevKey + 15)
            }
            if ((data.player_one.player.hp <= 0) || (data.player_two.player.hp <= 0)) {
                setIsPlaying(false)
                dispatch(THUNK_ACTION_closeRoom(room.id))
            }

            if (data.player_one.player.id !== player.id) {
                const enemyPlayerWs = data.player_one
                const playerWs = data.player_two
                if (playerWs.player.hp <= 0) {
                    setActive(true)
                    setBattleResult('loss')
                    dispatch(THUNK_ACTION_getPlayerExpAndGoldForBattle(playerWs.player.id, false, room))
                }
                if (enemyPlayerWs.player.hp <= 0) {
                    setActive(true)
                    setBattleResult('win')
                    dispatch(THUNK_ACTION_getPlayerExpAndGoldForBattle(playerWs.player.id, true, room))
                }
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(enemyPlayerWs.player.total_stats.dmg, playerWs.battlePlayer, enemyPlayerWs.battlePlayer, playerWs))
                dispatch(THUNK_ACTION_getPhraseFromDbEnglish(playerWs, enemyPlayerWs, db_room))
                unsetHandler()
            }

            if (data.player_two.player.id !== player.id) {
                const enemyPlayerWs = data.player_two
                const playerWs = data.player_one
                if (playerWs.player.hp <= 0) {
                    setActive(true)
                    setBattleResult('loss')
                    dispatch(THUNK_ACTION_getPlayerExpAndGoldForBattle(playerWs.player.id, false, room))
                }
                if (enemyPlayerWs.player.hp <= 0) {
                    setActive(true)
                    setBattleResult('win')
                    dispatch(THUNK_ACTION_getPlayerExpAndGoldForBattle(playerWs.player.id, true, room))
                }
                dispatch(ACTION_getEnemyPlayer(enemyPlayerWs.player))
                dispatch(ACTION_getEnemyStateFromWS(enemyPlayerWs.battlePlayer))
                dispatch(ACTION_punchFromEnemyPlayerToPlayer(enemyPlayerWs.player.total_stats.dmg, playerWs.battlePlayer, enemyPlayerWs.battlePlayer, playerWs))
                dispatch(THUNK_ACTION_getPhraseFromDbEnglish(playerWs, enemyPlayerWs, db_room))
                unsetHandler()
            }
        })
    }, [socket])

    useEffect(() => {
        phrase && setBattleLog([...battleLog, phrase])
    }, [dispatch, phrase])

    return (
        <div className="coliseumButtons">
            <Modal active={active}>
                <div className="dungeonPage__battleResult">
                    {battleResult === 'win' && 'GREAT BATTLE ! YOU WIN'}
                    {battleResult === 'loss' && 'GREAT BATTLE ! BUT THIS TIME YOU LOSS'}
                </div>
                <button onClick={quitHandler} className="dungeonPage__quit">
                    Quit battle
                </button>
            </Modal>
            <div className="coliseumButtons__top">
                {enemyPlayer &&
                    <CountdownCircleTimer
                        key={restartTimer}
                        isPlaying={isPlaying}
                        initialRemainingTime={15}
                        size={150}
                        duration={15}
                        colors={['#004777', '#F7B801', '#A30000', '#ff0000']}
                        onComplete={timerHandler}
                        colorsTime={[10, 6, 3, 0]}
                    >
                        {({elapsedTime, color}) => (
                            <span style={{color}}>
                                {renderTime('seconds', getTimeSeconds(elapsedTime))}
                            </span>)}
                    </CountdownCircleTimer>}
                {!enemyPlayer && 'Waiting for enemy'}
            </div>
            <div className="coliseumButtons__mid">
                <AttackDefendButtons
                    isDisabledAttack={isDisabledAttack}
                    isDisabledDefend={isDisabledDefend}
                    setIsDisabledAttack={setIsDisabledAttack}
                    setIsDisabledDefend={setIsDisabledDefend}
                />
            </div>
            <div className="coliseumButtons__bottom">
                <button
                    className="coliseumButtons__cancel"
                    onClick={unsetHandler}
                >
                    Cancel
                </button>
                <button
                    onClick={battleHandler}
                    className="coliseumButtons__punch"
                    disabled={!(isDisabledAttack && isDisabledDefend)}
                >
                    {(isDisabledAttack && isDisabledDefend)
                        ? 'Punch'
                        : 'Make choice'}
                </button>
            </div>
        </div>
    )
}

export default ColiseumButtons
