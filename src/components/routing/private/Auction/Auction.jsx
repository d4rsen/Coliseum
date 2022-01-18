import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetAllAuctionItemsAction } from '../../../../redux/actions/thunks/auction/thunkGetAllAuctionItemsAction'
import AuctionFilter from '../../../common/Auction/AuctionFilter/AuctionFilter'
import AuctionItem from '../../../common/Auction/AuctionItem/AuctionItem'
import styles from './Auction.module.css'

const Auction = () => {
    const dispatch = useDispatch()
    const auctionItems = useSelector(state => state.auctionItems)
    const playerInventory = useSelector(state => state.playerInventory)
    useEffect(() => {
        dispatch(thunkGetAllAuctionItemsAction())
    }, [playerInventory])

    return (
        <div>

            <div className={styles['auction-wrapper']}>
                <div className={styles['auction-filter']}>
                    <AuctionFilter/>
                </div>

                <div className={styles['auction-items']}>
                    {auctionItems && auctionItems.map(e => {
                        return <AuctionItem item={e}/>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Auction