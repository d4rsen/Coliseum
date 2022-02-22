import React from 'react'

const MannequinStats = () => {
    return (
        <div className="mob__stats">
            <div className="mob__item ">
                <img
                    src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                    alt="item"
                    className="mob__item-img"
                />
            </div>
            <div className="mob__stats-list">
                <div className="mob__stat">
                    <img src="assets/stats/str.png" alt="" className="mob__stat-img"/>
                    <div>{0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/agl.png" alt="" className="mob__stat-img"/>
                    <div>{0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/int.png" alt="" className="mob__stat-img"/>
                    <div>{0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/def.png" alt="" className="mob__stat-img"/>
                    <div>{0}</div>
                </div>
                <div className="mob__stat">
                    <img src="assets/stats/dmg.png" alt="" className="mob__stat-img"/>
                    <div>{0}</div>
                </div>
            </div>
        </div>
    )
}

export default MannequinStats
