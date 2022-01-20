import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PlayersWeapon.module.css'

const MobLoot = ({url, width, height}) => {
    const mob = useSelector((state) => state.mob)

    const loot = mob && mob.loot
    const emptyItemImg =
        'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

    return (
        <div>
            <img width={`${width}%`} height={`${height}px`}
                 className={styles.player__weapon}
                 src={loot ? loot.img : emptyItemImg}/>
        </div>
    )
}

export default MobLoot
