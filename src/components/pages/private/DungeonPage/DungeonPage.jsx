import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_punchFromPlayerToMob } from '../../../../redux/actions/mobsActions'
import { ACTION_punchFromMobToPlayer } from '../../../../redux/actions/playerActions'
import { THUNK_ACTION_getMobFromDb } from '../../../../redux/actions/thunks/thunkGetMobFromDbActions'
import { THUNK_ACTION_getPlayerExpAndGoldForMobBattle } from '../../../../redux/actions/thunks/thunkPlayersFromDbActions'
import BackGround from '../../../common/BackGround/BackGround'
import Character from '../../../common/Character/Character'
import Mob from '../../../common/Mob/Mob'
import './DungeonPage.scss'

const DungeonPage = () => {
    const dispatch = useDispatch()
    const mob = useSelector(state => state.mob)
    const player = useSelector(state => state.player)
    const playerHp = useSelector(state => state.player.total_stats.hp)
    const mobHp = useSelector(state => state.mob?.creepStats.hp)

    useEffect(async () => {
        await dispatch(THUNK_ACTION_getMobFromDb(Number(player.id)))

        return async () => {
            await dispatch(THUNK_ACTION_getMobFromDb(Number(player.id)))
        }
    }, [])

    useEffect(() => {
        if (playerHp <= 0) {
            dispatch(THUNK_ACTION_getPlayerExpAndGoldForMobBattle(
                player.id, false, Number(mob.loot.id))
            )
        }
        if (mobHp <= 0) {
            dispatch(THUNK_ACTION_getPlayerExpAndGoldForMobBattle(
                player.id, true, Number(mob.loot.id))
            )
        }
    }, [playerHp, mobHp])

    const battleHandler = (e) => {
        e.preventDefault()
        dispatch(ACTION_punchFromPlayerToMob(player.total_stats.dmg))
        dispatch(ACTION_punchFromMobToPlayer(mob.creepStats.dmg))
    }

    return (
        <div className="dungeonPage">
            <BackGround/>

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
