import React from 'react'
import AuctionFilter from '../../../common/Auction/AuctionFilter/AuctionFilter'
import AuctionItem from '../../../common/Auction/AuctionItem/AuctionItem'
import styles from './Auction.module.css'

const Auction = () => {

    return (
        <div>

            <div className={styles['auction-wrapper']}>
                <div className={styles['auction-filter']}>
                    <AuctionFilter/>
                </div>

                <div className="auction-items">
                    <AuctionItem/>
                </div>
            </div>
        </div>
    )
}

export default Auction