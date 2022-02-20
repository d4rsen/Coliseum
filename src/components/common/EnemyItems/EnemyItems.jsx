import React from 'react'
import { useSelector } from 'react-redux'

const EnemyItems = () => {
    const enemyPlayer = useSelector(state => state.enemyPlayer)
    const plate = enemyPlayer.armor_set[0]
    const helmet = enemyPlayer.armor_set[1]
    const boots = enemyPlayer.armor_set[2]
    const necklace = enemyPlayer.accessories_set[0]
    const sphere = enemyPlayer.accessories_set[1]
    const ring = enemyPlayer.accessories_set[2]
    return (
        <div className="character__items">
            <div className="character__item">
                {helmet
                    ? <img
                        src={helmet.img}
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
            <div className="character__item">
                {plate
                    ? <img
                        src={plate.img}
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
            <div className="character__item">
                {boots
                    ? <img
                        src={boots.img}
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
            <div className="character__item">
                {ring
                    ? <img
                        src={ring.img}
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
            <div className="character__item">
                {necklace
                    ? <img
                        src={necklace.img}
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
            <div className="character__item">
                {sphere
                    ? <img
                        src={sphere.img}
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
        </div>

    )
}

export default EnemyItems
