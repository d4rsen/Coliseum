import React, {useEffect} from 'react'
import AuctionItem from '../../../common/Auction/AuctionItem/AuctionItem'
import styles from './Auction.module.css'
import AuctionFilter from "../../../common/Auction/AuctionFilter/AuctionFilter";
import {useDispatch, useSelector} from "react-redux";
import {thunkGetAllAuctionItems} from "../../../../redux/actions/thunks/auction/thunkGetAllAuctionItems";

const Auction = () => {
    const dispatch = useDispatch()
    const auctionItems = useSelector(state => state.auctionItems)
    useEffect(() => {
        dispatch(thunkGetAllAuctionItems())
    }, [])

    return (
        <div>

            <div className={styles['auction-wrapper']}>
                <div className={styles['auction-filter']}>
                    <AuctionFilter/>
                </div>

                <div className={styles['auction-items']}>
                    {auctionItems && auctionItems.map(e => {
                        return <AuctionItem/>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Auction