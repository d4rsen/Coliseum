import React from 'react'
import styles from './AuctionButton.module.css'

const AuctionButton = ({title}) => {
    return (
        <div className={styles['buttons']}>
            <button className={styles['btn']}>{title}</button>
        </div>
    )
}

export default AuctionButton