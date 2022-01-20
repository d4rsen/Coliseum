import React from 'react'
import { useSelector } from 'react-redux'
import style from './enemyPlayer.module.css'
import MobAp from './MobAp/MobAp'
import MobHp from './MobHp/MobHp'
import MobLoot from './MobLoot/MobLoot'
import MobMp from './MobMp/MobMp'
import MobStats from './MobStats/MobStats'

const Mob = () => {
    const mob = useSelector((state) => state.mob)

    return (
        <div className={style.player__enemy}>
            <img
                className={style.player__pic}
                src={mob && mob.creepClass.img}
            />

            <div className={style.player__right}>
                <MobLoot className height={100} width={70}/>
                <div className={style.player__stats}>
                    <MobStats/>
                </div>
            </div>
            <div className={style.player__progress}>
                <MobHp className={style.header__progress_element}/>
                <MobAp className={style.header__progress_element}/>
                <MobMp className={style.header__progress_element}/>
            </div>
        </div>
    )
}

export default Mob
