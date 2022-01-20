import React from 'react'
import { useSelector } from 'react-redux'
import './PlayerProgressBarHpApMp.module.css'

const MobMp = () => {
    const mob = useSelector(state => state.mob)
    return (
        mob ? <>
            <div
                style={{
                    width: `${20}%`,
                    height: `${mob.creepStats.ap}%`,
                    backgroundColor: 'green',
                }}
            >
                <p style={{fontSize: `${10}px`, transform: `rotateX(${180}deg)`}}>{mob.creepStats.ap}</p>
            </div>

        </> : null
    )
}

export default MobMp
