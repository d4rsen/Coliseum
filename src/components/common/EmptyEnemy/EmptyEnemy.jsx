import React from 'react'

const EmptyEnemy = () => {
    return (
        <div className="character">
            <div className="character__stats">
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__stats-list">
                    <div className="character__stat">
                        <img src="assets/stats/str.png" alt="" className="character__stat-img"/>
                        <div>{0}</div>
                    </div>
                    <div className="character__stat">
                        <img src="assets/stats/agl.png" alt="" className="character__stat-img"/>
                        <div>{0}</div>
                    </div>
                    <div className="character__stat">
                        <img src="assets/stats/int.png" alt="" className="character__stat-img"/>
                        <div>{0}</div>
                    </div>
                    <div className="character__stat">
                        <img src="assets/stats/def.png" alt="" className="character__stat-img"/>
                        <div>{0}</div>
                    </div>
                </div>
            </div>
            <div className="character__hp-mp-ap">
                <div className="character__progressbar">
                    <div style={{height: 0}} className="character__mp">
                        {0}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: 0}} className="character__ap">
                        {0}
                    </div>
                </div>
                <div className="character__progressbar">
                    <div style={{height: 0}} className="character__hp">
                        {0}
                    </div>
                </div>
            </div>
            <div className="character__card">
                {/*<img*/}
                {/*    src={mageLink}*/}
                {/*    alt="enemy"*/}
                {/*    className="character__img"*/}
                {/*/>*/}
            </div>
            <div className="character__items">
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
                <div className="character__item">
                    <img
                        src="https://dbforgame.herokuapp.com/static/img/items/empty_cell.png"
                        alt="item"
                        className="character__item-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default EmptyEnemy
