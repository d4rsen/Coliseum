import React from 'react'
import AuctionButton from '../AuctionButton/AuctionButton'
import styles from './AuctionItem.module.css'

const AuctionItem = ({item}) => {
    const itemId = 124
    const itemImg = 'https://cdn.webshopapp.com/shops/305440/files/345306816/hellscream-foam-two-handed-battle-axe-gore.jpg'
    const itemName = ''
    const itemStats = {
        dmg: 19,
        str: 7,
        agl: 5,
        int: 3
    }
    const itemPrice = 999999
    const itemInfo = 'no description'

    return (
        <div className={styles['item-wrapper']}>
            <div className={styles['item-container']}>
                <div className={styles['title-img']}>
                    <span>{item.stats && item.item_name || itemName}</span>
                    <img className={styles['item-img']}
                         src={item.stats && item.img || itemImg}
                         alt="loading..."/>
                </div>
                <div className={styles['description']}>
                    <span>{item.stats && item.info || itemInfo}</span>
                </div>
                <div className={styles['item-stats']}>
                    <ul>
                        {item.stats && item.stats.dmg ?
                            <li><i className="fas fa-compress"> {item.stats.dmg || itemStats.dmg}</i></li>
                            : <li></li>}
                        {item.stats && item.stats.str ?
                            <li><i className="fas fa-fist-raised"> {item.stats.str || itemStats.str}</i></li>
                            : <li></li>}
                        {item.stats && item.stats.agl ?
                            <li><i className="fas fa-dragon"> {item.stats.agl || itemStats.agl}</i></li>
                            : <li></li>}
                        {item.stats && item.stats.int ?
                            <li><i className="fas fa-hat-wizard"> {item.stats.int || itemStats.int}</i></li>
                            : <li></li>}
                    </ul>
                </div>
                <div className={styles['item-price']}>
                    <span>Price:</span>
                    <div>{item.stats && item.auction_price || itemPrice}
                        <i className="fas fa-coins"></i></div>
                </div>
                <AuctionButton title={'Buy'}
                               itemId={item.stats && item.auction_id || itemId}/>
            </div>
        </div>
    )
}

export default AuctionItem