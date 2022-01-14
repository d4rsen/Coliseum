import React from 'react';
import styles from './AuctionItem.module.css'
import AuctionButton from "../AuctionButton/AuctionButton";

const AuctionItem = () => {
    const itemImg = 'https://cdn.webshopapp.com/shops/305440/files/345306816/hellscream-foam-two-handed-battle-axe-gore.jpg'
    const itemName = 'Great Axe'
    const itemStats = {
        dmg: 19,
        str: 7,
        agl: 5,
        int: 3
    }
    const itemInfo = 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipisicing elit. Explicabo facilis laborum nihil nostrum' +
        ' repudiandae. Aut cumque ex, facilis harum iste, iusto' +
        ' minus mollitia nihil pariatur placeat, recusandae rerum' +
        ' vero voluptatibus?'

    return (
        <div className={styles['item-wrapper']}>
            <div className={styles['item-container']}>
                <div className={styles['title-img']}>
                    <span>{itemName}</span>
                    <img className={styles['item-img']} src={itemImg} alt="Great Axe"/>
                </div>
                <div className={styles['description']}>
                    <span>{itemInfo}</span>
                </div>
                <div className={styles['item-stats']}>
                    <ul>
                        <li><i className="fas fa-compress"> {itemStats.dmg}</i></li>
                        <li><i className="fas fa-fist-raised"> {itemStats.str}</i></li>
                        <li><i className="fas fa-dragon"> {itemStats.agl}</i></li>
                        <li><i className="fas fa-hat-wizard"> {itemStats.int}</i></li>
                    </ul>
                </div>
                <AuctionButton title={"Buy"}/>
            </div>
        </div>
    );
};

export default AuctionItem;