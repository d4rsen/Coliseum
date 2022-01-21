import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { THUNK_ACTION_buyTraderItem } from '../../../../../redux/actions/thunks/thunkGetPlayerInventoryActions'
import styles from './AuctionItem.module.css'

const TraderItem = ({item}) => {
    const itemId = 124
    const player = useSelector(state => state.player)
    const dispatch = useDispatch()
    const itemImg = 'https://cdn.webshopapp.com/shops/305440/files/345306816/hellscream-foam-two-handed-battle-axe-gore.jpg'
    const itemName = '' //`${item.item_id}`
    const itemStats = {
        dmg: 19,
        str: 7,
        agl: 5,
        int: 3
    }
    const itemPrice = 999999
    const itemInfo = 'no description'

    const buyItemHandler = (e) => {
        e.preventDefault()
        dispatch(THUNK_ACTION_buyTraderItem(player, item)) //TODO CHECK THUNK
    }

    return (
        <div className={styles['item-wrapper']}>
            <div className={styles['item-container']}>
                <div className={styles['title-img']}>
                    <span>{item && item.item_name || itemName}</span>
                    <img className={styles['item-img']}
                         src={item && item.img || itemImg}
                         alt="loading..."/>
                </div>
                <div className={styles['description']}>
                    <span>{item && item.info || itemInfo}</span>
                </div>
                <div className={styles['item-stats']}>
                    <ul>
                        {item && item.dmg ?
                            <li><i className="fas fa-compress"> {item.dmg || itemStats.dmg}</i></li>
                            : <li></li>}
                        {item && item.str ?
                            <li><i className="fas fa-fist-raised"> {item.str || itemStats.str}</i></li>
                            : <li></li>}
                        {item && item.agl ?
                            <li><i className="fas fa-dragon"> {item.agl || itemStats.agl}</i></li>
                            : <li></li>}
                        {item && item.int ?
                            <li><i className="fas fa-hat-wizard"> {item.int || itemStats.int}</i></li>
                            : <li></li>}
                        {item && item.grade && <i className="fas ">{item.grade}</i>}

                    </ul>
                </div>
                <div className={styles['item-price']}>
                    <span>Price:</span>
                    <div>{item && item.price || itemPrice}
                        <i className="fas fa-coins"></i></div>
                </div>
                <div className={styles['buttons']}>
                    <button onClick={buyItemHandler}
                            className={styles['btn']}
                    >{'Buy from trader'}</button>
                </div>
            </div>
        </div>
    )
}

export default TraderItem