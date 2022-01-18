import React from 'react'
import { useSelector } from 'react-redux'
import styles from './PlayersWeapon.module.css'

const PlayerWeapon = ({url, width, height}) => {
    const player = useSelector((state) => state.player)

    const sword = player.weapon
    const emptyItemImg =
        'https://dbforgame.herokuapp.com/static/img/items/empty_cell.png'

    return (
        <div>
            <img width={`${width}%`} height={`${height}px`}
                 className={styles.player__weapon}
                 src={sword[0] ? sword : emptyItemImg} alt="sdfsdf"></img>
            <p>str 500</p>
        </div>
    )
}

export default PlayerWeapon
