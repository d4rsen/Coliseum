import React from 'react'
import styles from './PlayersWeapon.module.css'

const PlayerWeapon = ({url, width, height}) => {
    // const player = useSelector((state) => state.player);
    const sword =
        'https://freepngimg.com/thumb/sword/31768-7-black-sword-thumb.png'

    return (
        <div>
            <img width={`${width}%`} height={`${height}px`}
                 className={styles.player__weapon}
                 src={sword} alt="sdfsdf"></img>
            <p>str 500</p>
        </div>
    )
}

export default PlayerWeapon
