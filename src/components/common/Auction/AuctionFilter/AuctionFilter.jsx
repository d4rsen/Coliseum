import React from 'react';
import styles from './AuctionFilter.module.css'
import AuctionButton from "../AuctionButton/AuctionButton";

const AuctionFilter = () => {

    // function clickHandler(e) {
    //     e.preventDefault()
    //     console.log(e.target)
    // }

    function changeHandler(e) {
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <>
            <div className={styles['auction-filter-wrapper']}>
                <div className={styles['auction-actions']}>
                    <select onChange={changeHandler} id="cars" name="type" form="type">
                        <option value="weapon">Weapon</option>
                        <option value="accessory">Accessory</option>
                        <option value="armor">Armor</option>
                    </select>
                </div>
                <AuctionButton title={'Place lot'}/>
            </div>
        </>
    );
};

export default AuctionFilter;