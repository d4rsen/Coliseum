import React from 'react'
import { useSelector } from 'react-redux'
import EnemyImg from '../EnemyImg/EnemyImg'
import EnemyItems from '../EnemyItems/EnemyItems'
import EnemyPlayerStats from '../EnemyPlayerStats/EnemyPlayerStats'

const EnemyPlayer = () => {
    const enemyPlayer = useSelector(state => state.enemyPlayer)

    return (
        <div className="character">
            <EnemyPlayerStats/>
            <div className="character__hp-mp-ap">
                <div className="character__progressbar">
                    <div style={{height: enemyPlayer.mp * 3}} className="character__mp">
                        {enemyPlayer.mp}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: enemyPlayer.ap * 3}} className="character__ap">
                        {enemyPlayer.ap}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: enemyPlayer.hp * 3}} className="character__hp">
                        {enemyPlayer.hp}
                    </div>
                </div>
            </div>
            <EnemyImg/>
            <EnemyItems/>
        </div>
    )
}

export default EnemyPlayer
