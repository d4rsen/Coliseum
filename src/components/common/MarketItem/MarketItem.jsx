import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_buyTraderItem } from '../../../redux/actions/thunks/thunkGetPlayerInventoryActions'

const MarketItem = ({item}) => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const buyItemHandler = (e) => {
        e.preventDefault()
        dispatch(THUNK_ACTION_buyTraderItem(player, item))
    }

    // price info str agl int def evs dmg grade item_name

    return (
        <div className="marketPage__item">
            <div className="character__item">
                {item
                    ? <img
                        src={item.img}
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
            <div className="marketPage__stats">
                <div className="marketPage__stat">
                    <img src="assets/stats/str.png" alt="" className="character__stat-img"/>
                    {item.str ? item.str : 0}
                </div>
                <div className="marketPage__stat">
                    <img src="assets/stats/agl.png" alt="" className="character__stat-img"/>
                    {item.agl ? item.agl : 0}
                </div>
                <div className="marketPage__stat">
                    <img src="assets/stats/int.png" alt="" className="character__stat-img"/>
                    {item.int ? item.int : 0}
                </div>
                <div className="marketPage__stat">
                    <img src="assets/stats/def.png" alt="" className="character__stat-img"/>
                    {item.def ? item.def : 0}
                </div>
                <div className="marketPage__stat">
                    <img src="assets/stats/dmg.png" alt="" className="character__stat-img"/>
                    {item.dmg ? item.dmg : 0}
                </div>
            </div>

            <div className="marketPage__description">
                {item.info}
            </div>
            <button onClick={buyItemHandler} className="marketPage__button">
                buy for {item.price} ₲
            </button>
        </div>
    )
}

export default MarketItem
