import React from 'react'
import { useSelector } from 'react-redux'
import MobStats from '../MobStats/MobStats'
import './Mob.scss'

const Mob = () => {
    const mob = useSelector(state => state.mob)
    return (
        <div className="mob">
            <MobStats/>
            <div className="mob__hp-mp-ap">
                <div className="mob__progressbar">
                    <div style={{height: mob ? mob.creepStats.mp * 3 : 0}} className="mob__mp">
                        {mob && mob.creepStats.mp}
                    </div>
                </div>
                <div className="mob__progressbar">
                    <div style={{height: mob ? mob.creepStats.ap * 3 : 0}} className="mob__ap">
                        {mob && mob.creepStats.ap}
                    </div>
                </div>
                <div className="mob__progressbar">
                    <div style={{height: mob ? mob.creepStats.hp * 3 : 0}} className="mob__hp">
                        {mob && mob.creepStats.hp}
                    </div>
                </div>
            </div>
            <div className="mob__card">
                <img
                    src={mob ? mob.creepClass.img : '/assets/mannequin/mannequin.png'}
                    alt="card"
                    className="mob__img"
                />
            </div>
        </div>
    )
}

export default Mob