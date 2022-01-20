import React from 'react'
import { useSelector } from 'react-redux'

import styles from './PlayerStats.module.css'

const MobStats = () => {
    const mob = useSelector((state) => state.mob)

    const stats = mob && Object.entries(mob.creepStats).slice(1, 7)
    return (
        <ul className={styles.player__stats}>
            {stats && stats.map((item, i) => {
                return (
                    <li key={i}>{item[0]}: {item[1]}</li>)
            })}
        </ul>
    )
}

export default MobStats
