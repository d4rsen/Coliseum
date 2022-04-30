import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ACTION_punchFromPlayerToMob } from '../../../../redux/actions/mobsActions'
import { ACTION_punchFromMobToPlayer } from '../../../../redux/actions/playerActions'
import { THUNK_getMobFromDb } from '../../../../redux/thunks/thunkGetMobFromDbActions'
import { THUNK_getPlayerExpAndGoldForMobBattle } from '../../../../redux/thunks/thunkPlayersFromDbActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import Mob from '../../../common/Mob/Mob'
import Modal from '../../../common/Modal/Modal'
import './DungeonPage.scss'

const DungeonPage = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    const [battleResult, setBattleResult] = useState('')
    const mob = useSelector(state => state.mob)
    const player = useSelector(state => state.player)
    const playerHp = useSelector(state => state.player.total_stats.hp)
    const mobHp = useSelector(state => state.mob?.creepStats.hp)
    const navigate = useNavigate()

    useEffect(async () => {
        await dispatch(THUNK_getMobFromDb(Number(player.id)))

        return async () => {
            await dispatch(THUNK_getMobFromDb(Number(player.id)))
        }
    }, [])

    useEffect(() => {
        if (playerHp <= 0) {
            setBattleResult('loss')
            setActive(true)
            dispatch(THUNK_getPlayerExpAndGoldForMobBattle(
                player.id, false, Number(mob.loot.id))
            )
        }
        if (mobHp <= 0) {
            setBattleResult('win')
            setActive(true)
            dispatch(THUNK_getPlayerExpAndGoldForMobBattle(
                player.id, true, Number(mob.loot.id))
            )
        }
    }, [playerHp, mobHp])

    const battleHandler = (e) => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMob(player.total_stats.dmg))
        dispatch(ACTION_punchFromMobToPlayer(mob.creepStats.dmg))
    }

    const quitHandler = () => navigate('/')

    return (
        <div className="dungeonPage">
            <BackGround/>
            <Modal active={active}>
                <div className="dungeonPage__modal">
                    <div className="dungeonPage__battleResult">
                        {battleResult === 'win' && 'GREAT BATTLE ! YOU WIN'}
                        {battleResult === 'loss' && 'GREAT BATTLE ! BUT THIS TIME YOU LOSS'}
                    </div>
                    <button onClick={quitHandler} className="dungeonPage__quit">
                        Quit battle
                    </button>
                </div>
            </Modal>
            <div className="dungeonPage__left">
                <Character/>
            </div>
            <div className="dungeonPage__mid">
                <button onClick={battleHandler} className="dungeonPage__button">
                    Punch
                </button>
            </div>
            <div className="dungeonPage__right">
                <Mob/>
            </div>
        </div>
    )
}

export default DungeonPage
