import React from 'react'
import { useSelector } from 'react-redux'

const MobStats = () => {
    const mob = useSelector(state => state.mob)
    const strength = mob?.creepStats.str
    const agility = mob?.creepStats.agl
    const intellect = mob?.creepStats.int
    const defence = mob?.creepStats.def
    const damage = mob?.creepStats.dmg
    const loot = mob?.loot
    return (
        <div className="mob__stats">
            <div className="mob__item mob__item--loot">
                {loot
                    ? <img
                        src={loot.img}
                        alt="item"
                        className="mob__item-img"
                    />
                    : <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="mob__item-img"
                    />
                }
            </div>
            <div className="mob__stats-list">
                <div className="mob__stat">
                    <img src="assets/stats/str.png" alt="" className="mob__stat-img"/>
                    <div>{strength ? strength : 0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/agl.png" alt="" className="mob__stat-img"/>
                    <div>{agility ? agility : 0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/int.png" alt="" className="mob__stat-img"/>
                    <div>{intellect ? intellect : 0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/def.png" alt="" className="mob__stat-img"/>
                    <div>{defence ? defence : 0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/dmg.png" alt="" className="mob__stat-img"/>
                    <div>{damage ? damage : 0}</div>
                </div>
            </div>
        </div>

    )
}

export default MobStats
