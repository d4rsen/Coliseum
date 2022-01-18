import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTION_PlayerRegenerate } from '../../../../redux/actions/playerActions'
import { thunkGetAllAuctionItems } from '../../../../redux/actions/thunks/auction/thunkGetAllAuctionItems'
import AuctionFilter from '../../../common/Auction/AuctionFilter/AuctionFilter'
import AuctionItem from '../../../common/Auction/AuctionItem/AuctionItem'
import styles from './Auction.module.css'

const Auction = () => {
    const dispatch = useDispatch()
    const auctionItems = useSelector(state => state.auctionItems)
    const player = useSelector(state => state.player)
    useEffect(() => {
        dispatch(thunkGetAllAuctionItems())
    }, [])
    useEffect(() => {
        setTimeout(() => {
            dispatch(ACTION_PlayerRegenerate())
        }, 3000)
    }, [player, dispatch])

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