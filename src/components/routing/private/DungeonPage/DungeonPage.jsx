import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_getMobFromDb } from '../../../../redux/actions/thunks/thunkGetMobFromDbActions'
import { THUNK_ACTION_getPlayerExpAndGoldForMobBattle } from '../../../../redux/actions/thunks/thunkPlayersFromDbActions'
import Mob from '../../../common/Mob/Mob'
import MobButtons from '../../../common/Mob/MobButtons/MobButtons'
import Player from '../../../common/Player/Player'
import style from './GymPage.module.css'

const DungeonPage = () => {
    const dispatch = useDispatch()
    const mob = useSelector(state => state.mob)
    const player = useSelector(state => state.player)
    const [temp, setTemp] = useState(0)
    const playerHp = useSelector(state => state.player.total_stats.hp)
    const mobHp = useSelector(state => state.mob?.creepStats.hp)

    useEffect(() => {
        dispatch(THUNK_ACTION_getMobFromDb(Number(player.id)))
    }, [])
    useEffect(() => {
        if (playerHp <= 0) {
            dispatch(THUNK_ACTION_getPlayerExpAndGoldForMobBattle(player.id, false, Number(mob.loot.id)))
        }
        if (mobHp <= 0) {
            dispatch(THUNK_ACTION_getPlayerExpAndGoldForMobBattle(player.id, true, Number(mob.loot.id)))
            //кладем шмотку
        }
    }, [playerHp])

    return (
        <div className={style.main__gym}>
            <Player/>
            <MobButtons/>
            <Mob/>
        </div>
    )
}

export default DungeonPage