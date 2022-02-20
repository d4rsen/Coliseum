import React from 'react'
import { useSelector } from 'react-redux'

const CharacterStats = () => {
    const player = useSelector(state => state.player)
    const weapon = player.weapon[player.weapon.length - 1]
    const strength = player.total_stats.str
    const agility = player.total_stats.agl
    const intellect = player.total_stats.int
    const defence = player.total_stats.def
    return (
        <div className="character__stats">
            <div className="character__item">
                {weapon
                    ? <img
                        src={weapon.img}
                        alt="item"
                        className="character__item-img"
                    />
                    : <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                }
            </div>
            <div className="character__stats-list">
                <div className="character__stat">
                    <img src="assets/stats/str.png" alt="" className="character__stat-img"/>
                    <div>{strength}</div>
                </div>
                <div className="character__stat">
                    <img src="assets/stats/agl.png" alt="" className="character__stat-img"/>
                    <div>{agility}</div>
                </div>
                <div className="character__stat">
                    <img src="assets/stats/int.png" alt="" className="character__stat-img"/>
                    <div>{intellect}</div>
                </div>
                <div className="character__stat">
                    <img src="assets/stats/def.png" alt="" className="character__stat-img"/>
                    <div>{defence}</div>
                </div>
            </div>
        </div>

    )
}

export default CharacterStats